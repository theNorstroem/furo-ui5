import { FuroUi5ToolbarSelect } from "./FuroUi5ToolbarSelect";

export * from "./FuroUi5ToolbarSelect";

FuroUi5ToolbarSelect.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toolbar-select": FuroUi5ToolbarSelect;
  }
}
