import { FuroUi5ToolbarSelectOption } from "./FuroUi5ToolbarSelectOption";

export * from "./FuroUi5ToolbarSelectOption";

FuroUi5ToolbarSelectOption.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-toolbar-select-option": FuroUi5ToolbarSelectOption;
  }
}
