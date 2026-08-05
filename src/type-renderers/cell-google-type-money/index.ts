import { CellGoogleTypeMoney } from "./CellGoogleTypeMoney";

export * from "./CellGoogleTypeMoney";

window.customElements.define("cell-google-type-money", CellGoogleTypeMoney);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-type-money": CellGoogleTypeMoney;
  }
}
