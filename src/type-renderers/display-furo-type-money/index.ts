import { DisplayFuroTypeMoney } from "./DisplayFuroTypeMoney";

window.customElements.define("display-furo-type-money", DisplayFuroTypeMoney);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-type-money": DisplayFuroTypeMoney;
  }
}
