import { INT32, INT64, STRING, Timestamp } from "@furo/open-models";
import Text from "@ui5/webcomponents/dist/Text.js";

import { DateAndTimeReaderWriters } from "@/lib/open-models/DateAndTimeReaderWriter";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { XDate } from "@/models/google/type/Date";
import { formatRelativeTime } from "@/util/formatRelativeTime";

/**
 *
 * The 'furo-ui5-relative-time-display' is a display-only component which shows relative time
 * information as plain text (e.g. "in 2 days", "5 days ago"), with data binding.
 *
 * It extends the [SAP ui5 Text element](https://sap.github.io/ui5-webcomponents/playground/components/Text/)
 * and is the chrome-less sibling of `furo-ui5-relative-time-badge` (no color scheme).
 *
 * You can bind a `string` (ISO 8601), a `google.protobuf.Timestamp`, a unix-seconds `int32` / `int64`,
 * or a `google.type.Date`. `int32` / `int64` are interpreted as seconds since epoch.
 *
 * Configuration is set via properties: `optionStyle` (`long` | `short` | `narrow`) and `optionNumeric`
 * (`always` | `auto`).
 *
 * ```html
 *  <furo-ui5-relative-time-display .model="${fieldNode}"></furo-ui5-relative-time-display>
 * ```
 *
 * @summary Display-only text showing a relative time (e.g. "in 2 hours").
 * @keywords relative-time, time, ago, timestamp, display, text
 * @category Display
 * @usecase Use to show a timestamp as human-friendly relative time text.
 * @related furo-ui5-relative-time-badge
 * @tagname furo-ui5-relative-time-display
 */
export class FuroUi5RelativeTimeDisplay extends Text {
  /**
   * The output style of the relative time: `long`, `short` or `narrow`. Default: `long`.
   */
  public optionStyle: Intl.RelativeTimeFormatStyle = "long";

  /**
   * The output format of the relative time: `always` or `auto`. Default: `auto`.
   */
  public optionNumeric: Intl.RelativeTimeFormatNumeric = "auto";

  /**
   * The bound value, as a canonical ISO 8601 string. Populated by the reader from the bound model.
   */
  public value = "";

  private modelReaderWriter: ModelReaderWriter | undefined;

  private dateAndTimeReaderWriters: DateAndTimeReaderWriters<FuroUi5RelativeTimeDisplay> | undefined;

  constructor() {
    super();
    // nothing to display until a model with a value is bound
    this.hidden = true;
  }

  private _model: STRING | Timestamp | INT32 | INT64 | XDate = new Timestamp();

  public get model(): STRING | Timestamp | INT32 | INT64 | XDate {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref INT32 - "@furo/open-models/"
   * @typeref INT64 - "@furo/open-models/"
   * @typeref Timestamp - "@furo/open-models/"
   * @typeref XDate - "@/models/google/type/Date"
   * @public
   */
  public set model(value: STRING | Timestamp | INT32 | INT64 | XDate) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component. Display-only: the component reads from the model but
   * never writes back.
   *
   * @paramref fieldNode - Timestamp - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | Timestamp | INT32 | INT64 | XDate | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove the listener from the previous model
    this._model.__removeEventListener("update", this.readFromModel);

    // connect the model
    this._model = fieldNode;
    this.dateAndTimeReaderWriters = new DateAndTimeReaderWriters<FuroUi5RelativeTimeDisplay>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.dateAndTimeReaderWriters.getWriters(), this.dateAndTimeReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
    this._formatDisplay();
  };

  /**
   * Computes the relative-time text and tooltip from the current ISO `value`, and applies them to the
   * inherited Text (slotted text + `title`).
   * @private
   */
  private _formatDisplay(): void {
    const parts = formatRelativeTime(this.value, { style: this.optionStyle, numeric: this.optionNumeric });
    if (parts === null) {
      this.textContent = "";
      this.title = "";
      this.hidden = true;
      return;
    }

    this.title = parts.tooltip;
    this.textContent = parts.text;
    this.hidden = false;
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-relative-time-display";
    return md;
  }
}
