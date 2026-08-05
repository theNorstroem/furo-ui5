import { CellFloat } from "./CellFloat";

export * from "./CellFloat";

window.customElements.define("cell-float", CellFloat);

declare global {
  interface HTMLElementTagNameMap {
    "cell-float": CellFloat;
  }
}
