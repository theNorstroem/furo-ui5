import { FuroUi5TimePicker } from "./FuroUi5TimePicker";

FuroUi5TimePicker.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-time-picker": FuroUi5TimePicker;
  }
}
