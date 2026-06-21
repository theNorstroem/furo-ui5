import { STRING, StringValue } from "@furo/open-models";
import Tag from "@ui5/webcomponents/dist/Tag.js";

import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-tag' is a display-only component which renders a bound `string` value as a tag /
 * status label, with data binding.
 *
 * It extends the [SAP ui5 Tag element](https://sap.github.io/ui5-webcomponents/playground/components/Tag/).
 * Use the inherited `design` / `colorScheme` / `icon` properties for styling. The date-specific sibling
 * is `furo-ui5-relative-time-badge`.
 *
 * You can bind any `string` type: `primitives.STRING`, the `furo.fat.String` type or the
 * `google.protobuf.StringValue` type. Display-only: the component reads from the model but never writes back.
 *
 * ```html
 *  <furo-ui5-tag .model="${fieldNode}"></furo-ui5-tag>
 * ```
 *
 * @summary Display-only tag / status label bound to a string field.
 * @keywords tag, badge, status, label, display, string
 * @category Display
 * @usecase Use to render a bound string value as a styled status tag.
 * @related furo-ui5-relative-time-badge
 * @tagname furo-ui5-tag
 */
export class FuroUi5Tag extends Tag {
  /**
   * The bound value as a string. Populated by the reader from the bound model and mirrored to the
   * slotted text content.
   */
  public value = "";

  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5Tag> | undefined;

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
    this.stringReaderWriters = new StringReaderWriters<FuroUi5Tag>(this, "value", this._model);
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
    md.tag = "furo-ui5-tag";
    return md;
  }
}
