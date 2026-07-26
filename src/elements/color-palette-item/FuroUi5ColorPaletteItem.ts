import { STRING, StringValue } from "@furo/open-models";
import ColorPaletteItem from "@ui5/webcomponents/dist/ColorPaletteItem.js";

import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The `furo-ui5-color-palette-item` is a single color swatch, meant to be used inside a
 * `furo-ui5-color-palette` or `furo-ui5-color-palette-popover`.
 *
 * It extends the [SAP ui5 ColorPaletteItem element](https://ui5.github.io/webcomponents/components/ColorPalette/).
 *
 * You can bind any `string` type (a CSS color): `primitives.STRING`, the `furo.fat.String` type or the
 * `google.protobuf.StringValue` type. Display-only: the component reads the color from the model into
 * the inherited `value` property and never writes back.
 *
 * @summary A single color swatch bound to a string (CSS color) field.
 * @keywords color, palette, item, swatch
 * @category Form
 * @usecase Use as a child of furo-ui5-color-palette / furo-ui5-color-palette-popover.
 * @related furo-ui5-color-palette, furo-ui5-color-palette-popover
 * @tagname furo-ui5-color-palette-item
 */
export class FuroUi5ColorPaletteItem extends ColorPaletteItem {
  /**
   * Added for compatibility
   */
  override connectedCallback() {
    this.setAttribute("ui5-color-palette-item", "");
    return super.connectedCallback();
  }

  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5ColorPaletteItem> | undefined;

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
    this.stringReaderWriters = new StringReaderWriters<FuroUi5ColorPaletteItem>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-color-palette-item";
    return md;
  }
}
