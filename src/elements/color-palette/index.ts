import { FuroUi5ColorPalette } from "./FuroUi5ColorPalette";

FuroUi5ColorPalette.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-color-palette": FuroUi5ColorPalette;
  }
}
