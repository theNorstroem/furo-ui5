import { FuroUi5ColorPaletteItem } from "./FuroUi5ColorPaletteItem";

export * from "./FuroUi5ColorPaletteItem";

FuroUi5ColorPaletteItem.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-color-palette-item": FuroUi5ColorPaletteItem;
  }
}
