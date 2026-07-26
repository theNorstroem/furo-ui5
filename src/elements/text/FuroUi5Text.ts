import { STRING, StringValue } from "@furo/open-models";
import Text from "@ui5/webcomponents/dist/Text.js";

import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-text' is a display-only component which renders a bound `string` value as plain text,
 * with data binding.
 *
 * It extends the [SAP ui5 Text element](https://ui5.github.io/webcomponents/components/Text/).
 *
 * You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
 * `google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.
 *
 * ```html
 *  <furo-ui5-text .model="${fieldNode}"></furo-ui5-text>
 * ```
 *
 * @summary Display-only text bound to a string field.
 * @keywords text, display, label, string, value
 * @category Display
 * @usecase Use to render a bound string value as read-only text.
 * @related furo-ui5-label, furo-ui5-expandable-text
 * @tagname furo-ui5-text
 */
export class FuroUi5Text extends Text {
  /**
   * The bound value as a string. Populated by the reader from the bound model and mirrored to the
   * slotted text content.
   */
  public value = "";

  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5Text> | undefined;

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind a model field by attribute.
   *
   * @typeref STRING - "@furo/open-models/"
   * @typeref StringValue - "@furo/open-models/"
   * @typeref FuroFatString - "@/models/index.js"
   * @public
   */
  public set model(value: STRING | FuroFatString | StringValue) {
    this.bindData(value);
  }

  /**
   * Connects your data model to this component. Display-only: the component reads from the model but
   * never writes back.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove the listener from the previous model
    this._model.__removeEventListener("update", this.readFromModel);

    // connect the model
    this._model = fieldNode;
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Text>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
    this.textContent = this.value;
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-text";
    return md;
  }
}
