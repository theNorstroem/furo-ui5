import { DisplayGoogleTypeTimeofday } from "./DisplayGoogleTypeTimeofday";

export * from "./DisplayGoogleTypeTimeofday";

window.customElements.define("display-google-type-timeofday", DisplayGoogleTypeTimeofday);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-type-timeofday": DisplayGoogleTypeTimeofday;
  }
}
