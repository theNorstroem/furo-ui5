import { INT32, INT64, STRING, Timestamp } from "@furo/open-models";
import Tag from "@ui5/webcomponents/dist/Tag.js";

import { DateAndTimeReaderWriters } from "@/lib/open-models/DateAndTimeReaderWriter";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { XDate } from "@/models/google/type/Date";
import { formatRelativeTime } from "@/util/formatRelativeTime";

/**
 * The 'furo-ui5-relative-time-badge' is a small, non-interactive, display-only component which shows
 * relative time information (e.g. "in 2 days", "5 days ago"), with data binding.
 *
 * It extends the [SAP ui5 Tag element](https://sap.github.io/ui5-webcomponents/playground/components/Tag/)
 * and drives its text and `colorScheme` from the bound value: a future time uses the POSITIVE scheme,
 * a past time the NEGATIVE one.
 *
 * You can bind a `string` (ISO 8601), a `google.protobuf.Timestamp`, a unix-seconds `int32` / `int64`,
 * or a `google.type.Date`. `int32` / `int64` are interpreted as seconds since epoch.
 *
 * Configuration is set via properties: `colorSchemePositive`, `colorSchemeNegative`, `optionStyle`
 * (`long` | `short` | `narrow`) and `optionNumeric` (`always` | `auto`).
 *
 * ```html
 *  <furo-ui5-relative-time-badge .model="${fieldNode}"></furo-ui5-relative-time-badge>
 * ```
 *
 * @summary bindable, display-only relative time badge
 * @tagname furo-ui5-relative-time-badge
 */
export class FuroUi5RelativeTimeBadge extends Tag {
  /**
   * The color scheme (`"1"`–`"10"`) applied when the bound time is in the future (POSITIVE).
   */
  public colorSchemePositive = "1";

  /**
   * The color scheme (`"1"`–`"10"`) applied when the bound time is in the past (NEGATIVE).
   */
  public colorSchemeNegative = "2";

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

  private dateAndTimeReaderWriters: DateAndTimeReaderWriters<FuroUi5RelativeTimeBadge> | undefined;

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
   * @typeref Timestamp - "@furo/open-models/"
   * @typeref XDate - "@/models/google/type/Date"
   * @typeref INT32 - "@furo/open-models/"
   * @typeref INT64 - "@furo/open-models/"
   * @public
   */
  public set model(value: STRING | Timestamp | INT32 | INT64 | XDate) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component. Display-only: the badge reads from the model but
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
    this._model.__removeEventListener("field-value-changed", this.readFromModel);

    // connect the model
    this._model = fieldNode;
    this.dateAndTimeReaderWriters = new DateAndTimeReaderWriters<FuroUi5RelativeTimeBadge>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.dateAndTimeReaderWriters.getWriters(), this.dateAndTimeReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("field-value-changed", this.readFromModel);

    // initial read
    this.readFromModel();
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
    this._formatDisplay();
  };

  /**
   * Computes the relative-time text, tooltip and color scheme from the current ISO `value`, and
   * applies them to the inherited Tag (slotted text + `colorScheme`).
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

    this.colorScheme = parts.isFuture ? this.colorSchemePositive : this.colorSchemeNegative;
    this.title = parts.tooltip;
    this.textContent = parts.text;
    this.hidden = false;
  }

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-relative-time-badge";
    return md;
  }
}
