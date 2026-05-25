import { FormFuroStringproperty } from "./FormFuroStringproperty";

FormFuroStringproperty.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-stringproperty": FormFuroStringproperty;
  }
}
