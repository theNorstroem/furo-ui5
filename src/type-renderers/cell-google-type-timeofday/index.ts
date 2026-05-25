import { CellGoogleTypeTimeofday } from "./CellGoogleTypeTimeofday";

window.customElements.define("cell-google-type-timeofday", CellGoogleTypeTimeofday);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-type-timeofday": CellGoogleTypeTimeofday;
  }
}
