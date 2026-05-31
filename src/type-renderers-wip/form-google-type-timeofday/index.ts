import { FormGoogleTypeTimeofday } from "./FormGoogleTypeTimeofday";

FormGoogleTypeTimeofday.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-timeofday": FormGoogleTypeTimeofday;
  }
}
