import "@/elements/color-palette-item";

import { type ARRAY, STRING, StringValue } from "@furo/open-models";
import ColorPalette from "@ui5/webcomponents/dist/ColorPalette.js";

import type { FuroUi5ColorPaletteItem } from "@/elements/color-palette-item/FuroUi5ColorPaletteItem";
import { ModelReaderWriter } from "@/lib/open-models/ModelReaderWriter";
import { StringReaderWriters } from "@/lib/open-models/StringReaderWriters";
import { FuroFatString } from "@/models";

/**
 * The furo-ui5-color-palette displays a predefined set of color swatches and binds the selected color.
 *
 * It supports all features from the [SAP ui5 ColorPalette element](https://sap.github.io/ui5-webcomponents/playground/components/ColorPalette/).
 *
 * ### Selected color (`model`)
 * Bind any `string` type (a CSS color). The component writes the picked color to the model on the
 * `item-click` event and marks the matching swatch as selected when the model changes.
 *
 * ### Swatches (`colorsModel`)
 * Bind an `ARRAY` of `string` colors to generate the `furo-ui5-color-palette-item` swatches. You can
 * also place `furo-ui5-color-palette-item` children manually.
 *
 * ```html
 *  <furo-ui5-color-palette .model="${selected}" .colorsModel="${colorList}"></furo-ui5-color-palette>
 * ```
 *
 * @summary Predefined color swatches with selected-color data binding.
 * @keywords color, palette, swatch, picker, value
 * @category Form
 * @usecase Use to let users pick a color from a predefined set stored as a string.
 * @related furo-ui5-color-palette-popover, furo-ui5-color-palette-item, furo-ui5-color-picker
 * @tagname furo-ui5-color-palette
 */
export class FuroUi5ColorPalette extends ColorPalette {
  /**
   * The selected color as a string. Bridged between the model and the swatch selection.
   */
  public value = "";

  private modelReaderWriter: ModelReaderWriter | undefined;

  private stringReaderWriters: StringReaderWriters<FuroUi5ColorPalette> | undefined;

  constructor() {
    super();
    this.addEventListener("item-click", this._onItemClick);
  }

  private _model: STRING | FuroFatString | StringValue = new STRING();

  public get model(): STRING | FuroFatString | StringValue {
    return this._model;
  }

  /**
   * Use this to bind the selected-color model field by attribute.
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
   * Connects the selected-color data model to this component.
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
    this.stringReaderWriters = new StringReaderWriters<FuroUi5ColorPalette>(this, "value", this._model);
    this.modelReaderWriter = new ModelReaderWriter(this._model, this.stringReaderWriters.getWriters(), this.stringReaderWriters.getReaders());

    // listen on changes from the model
    this._model.__addEventListener("update", this.readFromModel);

    // initial read
    this.readFromModel();

    // a11y
    this.accessibleName ??= this._model.__label;
  }

  private _colorsModel: ARRAY<STRING, string> | undefined;

  public get colorsModel(): ARRAY<STRING, string> | undefined {
    return this._colorsModel;
  }

  /**
   * Use this to bind a list of color strings that generate the swatches.
   *
   * @typeref ARRAY - "@furo/open-models/"
   * @public
   */
  public set colorsModel(value: ARRAY<STRING, string> | undefined) {
    this.bindColors(value);
  }

  /**
   * Connects a list of color strings; each entry renders one `furo-ui5-color-palette-item` swatch.
   *
   * @paramref fieldNode - ARRAY - "@furo/open-models/"
   * @public
   */
  public bindColors(fieldNode: ARRAY<STRING, string> | undefined) {
    if (fieldNode === undefined || fieldNode === this._colorsModel) {
      return;
    }

    this._colorsModel?.__removeEventListener("array-changed", this.readFromColorsModel);

    // connect the model
    this._colorsModel = fieldNode;

    // listen on changes from the model
    this._colorsModel.__addEventListener("array-changed", this.readFromColorsModel);

    // initial read
    this.readFromColorsModel();
  }

  private readFromColorsModel = (): void => {
    // rebuild the generated swatches (manual children without the marker are preserved)
    this.querySelectorAll("furo-ui5-color-palette-item[data-generated]").forEach(el => {
      el.remove();
    });

    this._colorsModel?.forEach(color => {
      const item: FuroUi5ColorPaletteItem = document.createElement("furo-ui5-color-palette-item");
      item.setAttribute("data-generated", "");
      item.model = color;
      this.appendChild(item);
    });

    this._markSelected();
  };

  private readFromModel = (): void => {
    this.modelReaderWriter?.readModel();
    this._markSelected();
  };

  // Reflect the bound value onto the swatches by toggling each item's `selected` flag.
  private _markSelected(): void {
    this.querySelectorAll("furo-ui5-color-palette-item").forEach(item => {
      item.selected = item.value === this.value;
    });
  }

  private _onItemClick = (e: Event): void => {
    const { color } = (e as CustomEvent<{ color?: string }>).detail;
    if (color === undefined) {
      return;
    }
    this.value = color;
    this.modelReaderWriter?.writeModel();
    this._markSelected();
  };

  /**
   * @private
   */
  static override get metadata() {
    const md = super.metadata;
    md.tag = "furo-ui5-color-palette";
    return md;
  }
}
