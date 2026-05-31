import { CellFuroBigdecimal } from "./CellFuroBigdecimal";

window.customElements.define("cell-furo-bigdecimal", CellFuroBigdecimal);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-bigdecimal": CellFuroBigdecimal;
  }
}
