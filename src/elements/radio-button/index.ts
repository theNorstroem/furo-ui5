import { FuroUi5RadioButton } from "./FuroUi5RadioButton";

FuroUi5RadioButton.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-radio-button": FuroUi5RadioButton;
  }
}
