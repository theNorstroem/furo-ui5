import { CellInt64 } from "./CellInt64";

window.customElements.define("cell-int64", CellInt64);

declare global {
  interface HTMLElementTagNameMap {
    "cell-int64": CellInt64;
  }
}
