import { FormFuroFatString } from "./FormFuroFatString";

FormFuroFatString.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-string": FormFuroFatString;
  }
}
