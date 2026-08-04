import { FuroUi5ColorPicker } from "./FuroUi5ColorPicker";

export * from "./FuroUi5ColorPicker";

FuroUi5ColorPicker.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-color-picker": FuroUi5ColorPicker;
  }
}
