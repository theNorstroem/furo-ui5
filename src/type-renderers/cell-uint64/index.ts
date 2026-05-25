import { CellUint64 } from "./CellUint64";

window.customElements.define("cell-uint64", CellUint64);

declare global {
  interface HTMLElementTagNameMap {
    "cell-uint64": CellUint64;
  }
}
