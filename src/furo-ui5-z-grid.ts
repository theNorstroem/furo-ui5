import { FuroUi5ZGrid } from "@/impl/FuroUi5ZGrid";

window.customElements.define("furo-ui5-z-grid", FuroUi5ZGrid);

declare global {
  interface HTMLElementTagNameMap {
    "furo-ui5-z-grid": FuroUi5ZGrid;
  }
}
