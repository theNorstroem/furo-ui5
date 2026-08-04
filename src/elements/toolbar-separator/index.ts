import { FuroUi5ToolbarSeparator } from "./FuroUi5ToolbarSeparator";

export * from "./FuroUi5ToolbarSeparator";

FuroUi5ToolbarSeparator.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toolbar-separator": FuroUi5ToolbarSeparator;
  }
}
