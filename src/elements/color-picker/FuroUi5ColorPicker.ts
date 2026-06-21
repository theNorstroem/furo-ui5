import { STRING, StringValue } from "@furo/open-models";
import ColorPicker from "@ui5/webcomponents/dist/ColorPicker.js";

import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The 'furo-ui5-color-picker' component lets the user select a color, with data binding.
 *
 * It supports all features from the [SAP ui5 ColorPicker element](https://sap.github.io/ui5-webcomponents/playground/components/ColorPicker/).
 *
 * The selected color is a plain `string` (HEX, RGB, RGBA, HSV or a CSS color name). You can bind any
 * `string` type: `primitives.STRING`, the `furo.fat.String` type or the `google.protobuf.StringValue` type.
 *
 * ```html
 *  <furo-ui5-color-picker .model="${fieldNode}"></furo-ui5-color-picker>
 * ```
 *
 * @summary Color selection control bound to a string field.
 * @keywords color, picker, hex, rgb, swatch, value
 * @category Form
 * @usecase Use to let users pick a color value stored as a string.
 * @related furo-ui5-text-input
 * @tagname furo-ui5-color-picker
 */
export class FuroUi5ColorPicker extends ColorPicker {
  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5ColorPicker> | undefined;

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
   * Connects your data model to this component.
   *
   * @paramref fieldNode - STRING - "@furo/open-models/"
   * @public
   */
  public bindData(fieldNode: STRING | FuroFatString | StringValue | undefined) {
    if (fieldNode === undefined || fieldNode === this._model) {
      return;
    }

    // remove existing listeners
    this._model.__removeEventListener("update", this.readFromModel);
    this.removeEventListener("change", this.writeToModel);

    // connect the model
    this._model = fieldNode;
    // init model
    this.stringReaderWriters = new StringReaderWriters<FuroUi5ColorPicker>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // listen on changes from UI (ColorPicker only fires "change")
    this.addEventListener("change", this.writeToModel);

    // initial read
    this.readFromModel();

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
  };

  private writeToModel = (): void => {
    this.modelReaderWriter?.writeModel();
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-color-picker";
    return md;
  }
}
