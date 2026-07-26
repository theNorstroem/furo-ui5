import { FormGoogleTypeMoney } from "./FormGoogleTypeMoney";

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-money": FormGoogleTypeMoney;
  }
}

window.customElements.define("form-google-type-money", FormGoogleTypeMoney);
