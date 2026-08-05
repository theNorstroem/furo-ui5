import { CellFuroFatBool } from "./CellFuroFatBool";

export * from "./CellFuroFatBool";

window.customElements.define("cell-furo-fat-bool", CellFuroFatBool);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-fat-bool": CellFuroFatBool;
  }
}
