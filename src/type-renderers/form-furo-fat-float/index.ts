import { FormFuroFatFloat } from "./FormFuroFatFloat";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-float": FormFuroFatFloat;
  }
}

window.customElements.define("form-furo-fat-float", FormFuroFatFloat);
