import { FormGoogleTypeMoney } from "./FormGoogleTypeMoney";

FormGoogleTypeMoney.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-money": FormGoogleTypeMoney;
  }
}
