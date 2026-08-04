import { FuroUi5Tree } from "./FuroUi5Tree";

export * from "./FuroUi5Tree";

if (!customElements.get("furo-ui5-tree")) {
  customElements.define("furo-ui5-tree", FuroUi5Tree);
}

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tree": FuroUi5Tree;
  }
}
