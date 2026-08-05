import { CellFuroTypeDate } from "./CellFuroTypeDate";

export * from "./CellFuroTypeDate";

window.customElements.define("cell-furo-type-date", CellFuroTypeDate);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-type-date": CellFuroTypeDate;
  }
}
