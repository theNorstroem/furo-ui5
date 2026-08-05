import { CellBool } from "./CellBool";

export * from "./CellBool";

window.customElements.define("cell-bool", CellBool);

declare global {
  interface HTMLElementTagNameMap {
    "cell-bool": CellBool;
  }
}
