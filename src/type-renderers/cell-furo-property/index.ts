import { CellFuroProperty } from "./CellFuroProperty";

window.customElements.define("cell-furo-property", CellFuroProperty);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-property": CellFuroProperty;
  }
}
