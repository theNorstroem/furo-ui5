import { CellFuroFatInt64 } from "./CellFuroFatInt64";

export * from "./CellFuroFatInt64";

window.customElements.define("cell-furo-fat-int64", CellFuroFatInt64);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-fat-int64": CellFuroFatInt64;
  }
}
