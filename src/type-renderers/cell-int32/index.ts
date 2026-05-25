import { CellInt32 } from "./CellInt32";

window.customElements.define("cell-int32", CellInt32);

declare global {
  interface HTMLElementTagNameMap {
    "cell-int32": CellInt32;
  }
}
