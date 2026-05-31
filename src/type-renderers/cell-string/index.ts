import { CellString } from "./CellString";

window.customElements.define("cell-string", CellString);

declare global {
  interface HTMLElementTagNameMap {
    "cell-string": CellString;
  }
}
