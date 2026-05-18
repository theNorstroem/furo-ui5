import { FuroUi5Select } from "./FuroUi5Select";

FuroUi5Select.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-select": FuroUi5Select;
  }
}
