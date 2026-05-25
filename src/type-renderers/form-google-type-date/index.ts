import { FormGoogleTypeDate } from "./FormGoogleTypeDate";

FormGoogleTypeDate.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-date": FormGoogleTypeDate;
  }
}
