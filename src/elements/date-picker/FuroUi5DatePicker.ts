import { STRING, type FieldConstraints } from "@furo/open-models";
import DatePicker from "@ui5/webcomponents/dist/DatePicker.js";

import { DateAndTimeReaderWriters } from "@/lib/open-models/DateAndTimeReaderWriter";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
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
 * It supports all features from the [SAP ui5 DatePicker element](https://sap.github.io/ui5-webcomponents/playground/components/DatePicker/).
 *
 * You can bind a `string` (ISO 8601, e.g. "2020-12-31") or a `google.type.Date`. Because the UI5
 * DatePicker is date-only, the bindable value is always handled as an ISO `YYYY-MM-DD` string.
 *
 * ## supported meta and constraints
 * - **readonly: true** — set the element to readonly
 * - **required: true** — mark the element as required
 * - **placeholder:"some string"** — set the placeholder for the element
 * - **min:"1999-12-31"** — set the minDate for the element (use iso date in the constraint)
 * - **max:"1999-12-31"** — set the maxDate for the element (use iso date in the constraint)
 *
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

  private _model: STRING | XDate = new XDate();

  public get model(): STRING | XDate {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref XDate - "@/models/google/type/Date"
   * @public
   */
  public set model(value: STRING | XDate) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - XDate - "@/models/google/type/Date"
   * @public
   */
  public bindData(fieldNode: STRING | XDate | undefined) {
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
    this.dateAndTimeReaderWriters = new DateAndTimeReaderWriters<FuroUi5DatePicker>(this, "value", this._model);
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

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.dateValueUTC
    this.modelReaderWriter?.writeModel();
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
