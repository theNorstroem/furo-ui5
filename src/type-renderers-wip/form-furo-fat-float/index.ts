import { FormFuroFatFloat } from "./FormFuroFatFloat";

FormFuroFatFloat.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-float": FormFuroFatFloat;
  }
}
