import { CellFuroFatDouble } from "./CellFuroFatDouble";

export * from "./CellFuroFatDouble";

window.customElements.define("cell-furo-fat-double", CellFuroFatDouble);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-fat-double": CellFuroFatDouble;
  }
}
