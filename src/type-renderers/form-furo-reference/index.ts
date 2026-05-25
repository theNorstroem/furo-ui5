import { FormFuroReference } from "./FormFuroReference";

FormFuroReference.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-reference": FormFuroReference;
  }
}
