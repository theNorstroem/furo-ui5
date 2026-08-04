import { FuroUi5TreeItem } from "./FuroUi5TreeItem";

export * from "./FuroUi5TreeItem";

if (!customElements.get("furo-ui5-tree-item")) {
  customElements.define("furo-ui5-tree-item", FuroUi5TreeItem);
}

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tree-item": FuroUi5TreeItem;
  }
}
