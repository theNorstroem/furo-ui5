import { FuroUi5SplitButton } from "./FuroUi5SplitButton";

FuroUi5SplitButton.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-split-button": FuroUi5SplitButton;
  }
}
