import { INT32, INT64, STRING, Timestamp, type FieldConstraints } from "@furo/open-models";
import DateTimePicker from "@ui5/webcomponents/dist/DateTimePicker.js";

import { DateAndTimeReaderWriters } from "@/lib/open-models/DateAndTimeReaderWriter";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";

/**
 * Extends the typed `FieldConstraints` with the date-specific `min`/`max`
 * constraints. They arrive as ISO date strings but are NOT declared on
 * `@furo/open-models`' `FieldConstraints` interface, so we narrow to this local
 * shape (avoids `any`, which is an eslint error).
 */
interface DateFieldConstraints extends FieldConstraints {
  min?: string;
  max?: string;
}

/**
 * The 'furo-ui5-date-time-picker' component lets the user select a date and time, with data binding.
 *
 * It supports all features from the [SAP ui5 DateTimePicker element](https://ui5.github.io/webcomponents/components/DateTimePicker/).
 *
 * You can bind a `string` (ISO 8601 / RFC 3339, e.g. "2017-01-15T01:30:15.000Z"), a
 * `google.protobuf.Timestamp`, or a unix-seconds `int32` / `int64`. The bound value is always
 * handled as a canonical RFC 3339 string; `int32` / `int64` are interpreted as seconds since epoch.
 *
 * ## supported meta and constraints
 * - **readonly: true** — set the element to readonly
 * - **required: true** — mark the element as required
 * - **placeholder:"some string"** — set the placeholder for the element
 * - **min:"1999-12-31"** — set the minDate for the element (use iso date in the constraint)
 * - **max:"1999-12-31"** — set the maxDate for the element (use iso date in the constraint)
 *
 * @summary Combined date and time selection in a single input.
 * @keywords datetime, date, time, picker, calendar, combined
 * @category Form
 * @usecase Use when both date and time need to be selected together.
 * @related furo-ui5-date-picker, furo-ui5-time-picker
 * @tagname furo-ui5-date-time-picker
 */
export class FuroUi5DateTimePicker extends DateTimePicker {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private dateAndTimeReaderWriters: DateAndTimeReaderWriters<FuroUi5DateTimePicker> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    // Keep value / minDate / maxDate in canonical RFC 3339 so the ISO-based DateAndTimeReaderWriter
    // round-trips. `XXX` is timezone-aware (parses/formats the trailing "Z"), matching `toISOString()`.
    this.valueFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSXXX";
  }

  private _model: STRING | Timestamp | INT32 | INT64 = new Timestamp();

  public get model(): STRING | Timestamp | INT32 | INT64 {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref Timestamp - "@furo/open-models/"
   * @typeref INT32 - "@furo/open-models/"
   * @typeref INT64 - "@furo/open-models/"
   * @public
   */
  public set model(value: STRING | Timestamp | INT32 | INT64) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - Timestamp - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | Timestamp | INT32 | INT64 | undefined) {
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
    this.dateAndTimeReaderWriters = new DateAndTimeReaderWriters<FuroUi5DateTimePicker>(this, "isoValue", this._model);
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
      // UI5 compares min/max at calendar-date granularity, so the time part is irrelevant;
      // anchoring the ISO date to start-of-day makes it parseable by the date-time value format.
      if (dateConstraints.min) {
        this.minDate = `${dateConstraints.min.slice(0, 10)}T00:00:00.000Z`;
      }
      if (dateConstraints.max) {
        this.maxDate = `${dateConstraints.max.slice(0, 10)}T00:00:00.000Z`;
      }
    }
  }

  private _isoValue = "";

  /**
   * Canonical RFC 3339 bridge between the model and the UI5 input.
   *
   * The getter is synchronous (the model writers read it synchronously) and
   * returns the value cached by {@link writeToModel}, which sources it from
   * UI5's already-parsed `dateValueAsync` rather than re-parsing the
   * locale/format dependent `value` string. The setter (used on model → UI
   * reads) keeps the cache and the displayed `value` in sync.
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

  // Resolve the picked instant via UI5's parsed `dateValueAsync` (local → UTC,
  // timezone-aware, `null`-safe) before writing. The accessor must stay sync, so
  // we refresh the `_isoValue` cache here and write once the promise resolves.
  private writeToModel = (): void => {
    void this.dateValueAsync.then(d => {
      this._isoValue = d === null ? "" : d.toISOString();
      this.modelReaderWriter?.writeModel();
    });
  };

  /**
   * Clears the value of the date time picker.
   * @public
   */
  clear() {
    this.value = "";
    this.writeToModel();
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-date-time-picker";
    return md;
  }
}
