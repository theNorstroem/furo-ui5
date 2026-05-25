import { CellFuroTypeMoney } from "./CellFuroTypeMoney";

window.customElements.define("cell-furo-type-money", CellFuroTypeMoney);

declare global {
  interface HTMLElementTagNameMap {
    "cell-furo-type-money": CellFuroTypeMoney;
  }
}
