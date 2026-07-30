import { STRING, StringValue } from "@furo/open-models";
import ExpandableText from "@ui5/webcomponents/dist/ExpandableText.js";

import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-expandable-text' is a display-only component which renders a bound `string` value as
 * collapsible text with a "show more / show less" toggle, with data binding.
 *
 * It extends the [SAP ui5 ExpandableText element](https://ui5.github.io/webcomponents/components/ExpandableText/).
 *
 * You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
 * `google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.
 *
 * ```html
 *  <furo-ui5-expandable-text .model="${fieldNode}"></furo-ui5-expandable-text>
 * ```
 *
 * @summary Display-only collapsible text bound to a string field.
 * @keywords expandable, text, display, show-more, string
 * @category Display
 * @usecase Use to render a long bound string with a show-more / show-less toggle.
 * @related furo-ui5-text
 * @tagname furo-ui5-expandable-text
 */
export class FuroUi5ExpandableText extends ExpandableText {
  /**
   * The bound value as a string. Populated by the reader from the bound model and mirrored to the
   * inherited `text` property.
   */
  public value = "";

  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5ExpandableText> | undefined;

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
    this.stringReaderWriters = new StringReaderWriters<FuroUi5ExpandableText>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
    this.text = this.value;
  };

  /**
   * @private
   */
  static override get metadata() {
    return { ...super.metadata, tag: "furo-ui5-expandable-text" };
  }
}
