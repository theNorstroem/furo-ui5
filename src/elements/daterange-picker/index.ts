import { FuroUi5DaterangePicker } from "./FuroUi5DaterangePicker";

export * from "./FuroUi5DaterangePicker";

FuroUi5DaterangePicker.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-daterange-picker": FuroUi5DaterangePicker;
  }
}
