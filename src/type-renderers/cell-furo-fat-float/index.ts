import { CellFuroFatFloat } from "./CellFuroFatFloat";

window.customElements.define("cell-furo-fat-float", CellFuroFatFloat);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-fat-float": CellFuroFatFloat;
  }
}
