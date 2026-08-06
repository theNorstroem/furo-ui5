import { CellEnum } from "./CellEnum";

export * from "./CellEnum";

window.customElements.define("cell-enum", CellEnum);

declare global {
  interface HTMLElementTagNameMap {
    "cell-enum": CellEnum;
  }
}
