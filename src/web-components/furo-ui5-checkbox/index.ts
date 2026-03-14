import { FuroUi5Checkbox } from "./FuroUi5Checkbox";

FuroUi5Checkbox.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-checkbox": FuroUi5Checkbox;
  }
}
