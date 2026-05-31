import { CellGoogleTypeColor } from "./CellGoogleTypeColor";

window.customElements.define("cell-google-type-color", CellGoogleTypeColor);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-type-color": CellGoogleTypeColor;
  }
}
