import { FuroUi5Combobox } from "./FuroUi5Combobox";

FuroUi5Combobox.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-combobox": FuroUi5Combobox;
  }
}
