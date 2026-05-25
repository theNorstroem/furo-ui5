import { FuroUi5DatePicker } from "./FuroUi5DatePicker";

FuroUi5DatePicker.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-date-picker": FuroUi5DatePicker;
  }
}
