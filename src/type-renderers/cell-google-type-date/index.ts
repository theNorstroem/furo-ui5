import { CellGoogleTypeDate } from "./CellGoogleTypeDate";

export * from "./CellGoogleTypeDate";

window.customElements.define("cell-google-type-date", CellGoogleTypeDate);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-type-date": CellGoogleTypeDate;
  }
}
