import { CellFuroFatString } from "./CellFuroFatString";

export * from "./CellFuroFatString";

window.customElements.define("cell-furo-fat-string", CellFuroFatString);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-fat-string": CellFuroFatString;
  }
}
