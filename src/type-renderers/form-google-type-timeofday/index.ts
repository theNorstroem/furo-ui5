import { FormGoogleTypeTimeofday } from "./FormGoogleTypeTimeofday";

export * from "./FormGoogleTypeTimeofday";

declare global {
  interface HTMLElementTagNameMap {
    "form-google-type-timeofday": FormGoogleTypeTimeofday;
  }
}

window.customElements.define("form-google-type-timeofday", FormGoogleTypeTimeofday);
