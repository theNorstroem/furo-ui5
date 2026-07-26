import { FormGoogleTypeDate } from "./FormGoogleTypeDate";

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-date": FormGoogleTypeDate;
  }
}

window.customElements.define("form-google-type-date", FormGoogleTypeDate);
