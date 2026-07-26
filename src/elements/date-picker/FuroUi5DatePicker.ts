import { STRING, type FieldConstraints } from "@furo/open-models";
import DatePicker from "@ui5/webcomponents/dist/DatePicker.js";

import { DateAndTimeReaderWriters } from "@/lib/open-models/DateAndTimeReaderWriter";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { XDate as FuroXDate } from "@/models/furo/type/Date";
import { XDate } from "@/models/google/type/Date";

/**
 * Extends the typed `FieldConstraints` with the date-specific `min`/`max`
 * constraints. They arrive as ISO `YYYY-MM-DD` strings but are NOT declared on
 * `@furo/open-models`' `FieldConstraints` interface, so we narrow to this local
 * shape (avoids `any`, which is an eslint error).
 */
interface DateFieldConstraints extends FieldConstraints {
  min?: string;
  max?: string;
}

/**
 * The 'furo-ui5-date-picker' component lets the user select a date, with data binding.
 *
 * It supports all features from the [SAP ui5 DatePicker element](https://ui5.github.io/webcomponents/components/DatePicker/).
 *
 * You can bind a `string` (ISO 8601, e.g. "2020-12-31"), a `google.type.Date` or a `furo.type.Date`.
 * Because the UI5 DatePicker is date-only, the bindable value is always handled as an ISO
 * `YYYY-MM-DD` string.
 *
 * ## supported meta and constraints
 * - **readonly: true** — set the element to readonly
 * - **required: true** — mark the element as required
 * - **placeholder:"some string"** — set the placeholder for the element
 * - **min:"1999-12-31"** — set the minDate for the element (use iso date in the constraint)
 * - **max:"1999-12-31"** — set the maxDate for the element (use iso date in the constraint)
 *
 * @summary Date selection input with calendar popup for picking single dates.
 * @keywords date, picker, calendar, input, selection, form
 * @category Form
 * @usecase Use for selecting a single date value.
 * @related furo-ui5-daterange-picker, furo-ui5-datetime-picker, furo-ui5-calendar
 * @tagname furo-ui5-date-picker
 */
export class FuroUi5DatePicker extends DatePicker {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private dateAndTimeReaderWriters: DateAndTimeReaderWriters<FuroUi5DatePicker> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    // Keep value / minDate / maxDate in ISO so the ISO-based DateAndTimeReaderWriter round-trips.
    // `valueFormat` drives the `value` string format and (via `_formatPattern`) the minDate/maxDate
    // parsing; setting it to "yyyy-MM-dd" pins everything to ISO.
    this.valueFormat = "yyyy-MM-dd";
  }

  private _model: STRING | XDate | FuroXDate = new XDate();

  public get model(): STRING | XDate | FuroXDate {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref XDate - "@/models/google/type/Date"
   * @typeref XDate as FuroXDate - "@/models/furo/type/Date"
   * @public
   */
  public set model(value: STRING | XDate | FuroXDate) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - XDate - "@/models/google/type/Date"
   * @paramref fieldNode FuroXDate - "@/models/furo/type/Date"
   * @public
   */
  public bindData(fieldNode: STRING | XDate | FuroXDate | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    /**
     * remove existing listeners
     * - from readonly watcher
     * - from model: "update"
     * - from ui: input, change
     */
    this.readonlyState.detach();
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("input", this.writeToModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.dateAndTimeReaderWriters = new DateAndTimeReaderWriters<FuroUi5DatePicker>(this, "isoValue", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.dateAndTimeReaderWriters.getWriters(), this.dateAndTimeReaderWriters.getReaders());

    // listen on state changes on the model
    this.valueStateManager.listenToStateChanges(fieldNode);
    this.readonlyState.listenToStateChanged(fieldNode);

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI
    this.addEventListener("input", this.writeToModel);
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readFromModel();

    // constraints
    this.handleConstraints(this._model.__getConstraints());

    // set the placeholder from model if none was set before
    this.placeholder ??= this._model.__placeholder;

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private handleConstraints(fieldConstraints: FieldConstraints | undefined) {
    if (fieldConstraints !== undefined) {
      // `min` / `max` are date-only extra keys, not part of the typed FieldConstraints
      const dateConstraints = fieldConstraints as DateFieldConstraints;

      // for a11y
      if (fieldConstraints.required) {
        this.required = true;
      }
      if (fieldConstraints.read_only) {
        this.readonly = true;
      }
      if (dateConstraints.min) {
        // normalize a possible full timestamp down to ISO YYYY-MM-DD
        this.minDate = dateConstraints.min.slice(0, 10);
      }
      if (dateConstraints.max) {
        this.maxDate = dateConstraints.max.slice(0, 10);
      }
    }
  }

  private _isoValue = "";

  /**
   * Canonical ISO `YYYY-MM-DD` bridge between the model and the UI5 input.
   *
   * The getter is synchronous (the model writers read it synchronously) and
   * returns the value cached by {@link writeToModel}, which sources it from
   * UI5's already-parsed `dateValueAsync` (local calendar parts, so the date is
   * exactly the one displayed — no timezone day-shift) rather than re-parsing
   * the locale/format dependent `value` string. The setter (used on model → UI
   * reads) keeps the cache and the displayed `value` (valueFormat `yyyy-MM-dd`)
   * in sync.
   *
   * @private
   */
  get isoValue(): string {
    return this._isoValue;
  }

  set isoValue(v: string) {
    this._isoValue = v;
    this.value = v;
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  // Resolve the picked date via UI5's parsed `dateValueAsync` (`null`-safe) before
  // writing. For a date-only value we read the LOCAL calendar parts (the date as
  // displayed), never `toISOString()`/UTC, which would shift across midnight. The
  // accessor must stay sync, so we refresh the `_isoValue` cache here.
  private writeToModel = (): void => {
    void this.dateValueAsync.then(d => {
      this._isoValue =
        d === null
          ? ""
          : `${d.getFullYear().toString().padStart(4, "0")}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
      this.modelReaderWriter?.writeModel();
    });
  };

  /**
   * Clears the value of the date picker.
   * @public
   */
  clear() {
    this.value = "";
    this.writeToModel();
  }

  static override get styles() {
    return [
      super.styles,
      // language=css
      `ui5-datetime-input{width:inherit}`,
    ];
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-date-picker";
    return md;
  }
}
