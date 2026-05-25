import { FormFuroIntegerproperty } from "./FormFuroIntegerproperty";

FormFuroIntegerproperty.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-integerproperty": FormFuroIntegerproperty;
  }
}
