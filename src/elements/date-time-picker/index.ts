import { FuroUi5DateTimePicker } from "./FuroUi5DateTimePicker";

export * from "./FuroUi5DateTimePicker";

FuroUi5DateTimePicker.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-date-time-picker": FuroUi5DateTimePicker;
  }
}
