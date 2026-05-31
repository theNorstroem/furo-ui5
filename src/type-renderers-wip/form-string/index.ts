import { FormString } from "./FormString";

FormString.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-string": FormString;
  }
}
