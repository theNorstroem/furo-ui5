import { FuroUi5TreeTable } from "./FuroUi5TreeTable";

if (!customElements.get("furo-ui5-tree-table")) {
  customElements.define("furo-ui5-tree-table", FuroUi5TreeTable);
}

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-tree-table": FuroUi5TreeTable;
  }
}
