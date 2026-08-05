import { CellUint32 } from "./CellUint32";

export * from "./CellUint32";

window.customElements.define("cell-uint32", CellUint32);

declare global {
  interface HTMLElementTagNameMap {
    "cell-uint32": CellUint32;
  }
}
