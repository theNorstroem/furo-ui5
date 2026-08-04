import { FuroUi5ContextMenu } from "./FuroUi5ContextMenu";

export * from "./FuroUi5ContextMenu";

FuroUi5ContextMenu.define();

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-context-menu": FuroUi5ContextMenu;
  }
}
