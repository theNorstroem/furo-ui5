import { FormFuroTypeMoney } from "./FormFuroTypeMoney";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-type-money": FormFuroTypeMoney;
  }
}

window.customElements.define("form-furo-type-money", FormFuroTypeMoney);
