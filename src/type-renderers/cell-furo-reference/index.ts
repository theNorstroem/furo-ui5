import { CellFuroReference } from "./CellFuroReference";

window.customElements.define("cell-furo-reference", CellFuroReference);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-reference": CellFuroReference;
  }
}
