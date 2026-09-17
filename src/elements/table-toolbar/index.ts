import { FuroUi5TableToolbar } from "./FuroUi5TableToolbar";

export * from "./FuroUi5TableToolbar";

window.customElements.define("furo-ui5-table-toolbar", FuroUi5TableToolbar);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-table-toolbar": FuroUi5TableToolbar;
  }
}
