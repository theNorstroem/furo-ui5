import { FuroUi5ToolbarButton } from "./FuroUi5ToolbarButton";

FuroUi5ToolbarButton.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toolbar-button": FuroUi5ToolbarButton;
  }
}
