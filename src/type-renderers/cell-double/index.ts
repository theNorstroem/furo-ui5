import { CellDouble } from "./CellDouble";

export * from "./CellDouble";

window.customElements.define("cell-double", CellDouble);

declare global {
  interface HTMLElementTagNameMap {
    "cell-double": CellDouble;
  }
}
