import { type FieldConstraints, STRING } from "@furo/open-models";
import TimePicker from "@ui5/webcomponents/dist/TimePicker.js";

import { DateAndTimeReaderWriters } from "@/lib/open-models/DateAndTimeReaderWriter";
import { FieldNodeValueState } from "@/lib/open-models/FieldNodeValueState";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { ReadonlyState } from "@/lib/open-models/ReadonlyState";
import { TimeOfDay } from "@/models/google/type/TimeOfDay";

/**
 * The 'furo-ui5-time-picker' component lets the user select a time of day, with data binding.
 *
 * It supports all features from the [SAP ui5 TimePicker element](https://ui5.github.io/webcomponents/components/TimePicker/).
 *
 * You can bind a `string` (e.g. "11:42:35") or a `google.type.TimeOfDay`. The bound value is always
 * handled as a 24-hour `HH:mm:ss` string.
 *
 * ## supported meta and constraints
 * - **readonly: true** — set the element to readonly
 * - **required: true** — mark the element as required
 * - **placeholder:"some string"** — set the placeholder for the element
 *
 * Note: UI5 `TimePicker` has no min/max date range, so `min` / `max` constraints are not applied.
 *
 * @summary Time selection input for picking hours, minutes, and optionally seconds.
 * @keywords time, picker, hours, minutes, clock, input
 * @category Form
 * @usecase Use for selecting time values without date.
 * @related furo-ui5-date-time-picker, furo-ui5-date-picker
 * @tagname furo-ui5-time-picker
 */
export class FuroUi5TimePicker extends TimePicker {
  private readonly valueStateManager: FieldNodeValueState = new FieldNodeValueState(this);

  private modelReaderWriter: ModelReaderWriter | undefined;

  private dateAndTimeReaderWriters: DateAndTimeReaderWriters<FuroUi5TimePicker> | undefined;

  private readonlyState: ReadonlyState = new ReadonlyState(this);

  constructor() {
    super();
    // Keep value in 24h HH:mm:ss so the ISO-based DateAndTimeReaderWriter round-trips.
    this.valueFormat = "HH:mm:ss";
  }

  private _model: STRING | TimeOfDay = new TimeOfDay();

  public get model(): STRING | TimeOfDay {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref TimeOfDay - "@/models/google/type/TimeOfDay"
   * @public
   */
  public set model(value: STRING | TimeOfDay) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component.
   *
   * @paramref fieldNode - TimeOfDay - "@/models/google/type/TimeOfDay"
   * @public
   */
  public bindData(fieldNode: STRING | TimeOfDay | undefined) {
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
    this.dateAndTimeReaderWriters = new DateAndTimeReaderWriters<FuroUi5TimePicker>(this, "isoValue", this._model);
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
      // for a11y
      if (fieldConstraints.required) {
        this.required = true;
      }
      if (fieldConstraints.read_only) {
        this.readonly = true;
      }
      // Note: UI5 TimePicker has no minDate/maxDate, so min/max constraints are not applied.
    }
  }

  /**
   * Canonical 24h `HH:mm:ss` bridge between the model and the UI5 input.
   *
   * Reading derives the time from UI5's already-parsed `dateValue` instead of
   * re-parsing the locale/format dependent `value` string; it is `null`-safe
   * (returns `""` on invalid input). Writing assigns the string to `value`
   * (valueFormat is `HH:mm:ss`).
   *
   * @private
   */
  get isoValue(): string {
    const d = this.dateValue;

    if (d === null) {
      return "";
    }
    return `${d.getHours().toString().padStart(2, "0")}:${d.getMinutes().toString().padStart(2, "0")}:${d.getSeconds().toString().padStart(2, "0")}`;
  }

  set isoValue(v: string) {
    this.value = v;
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

  /**
   * Clears the value of the time picker.
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
    md.tag = "furo-ui5-time-picker";
    return md;
  }
}
