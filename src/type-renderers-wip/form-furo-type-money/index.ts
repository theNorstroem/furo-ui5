import { FormFuroTypeMoney } from "./FormFuroTypeMoney";

FormFuroTypeMoney.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-type-money": FormFuroTypeMoney;
  }
}
