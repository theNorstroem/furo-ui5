import { FuroUi5ToggleButton } from "./FuroUi5ToggleButton";

export * from "./FuroUi5ToggleButton";

FuroUi5ToggleButton.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toggle-button": FuroUi5ToggleButton;
  }
}
