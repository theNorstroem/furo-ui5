import { DisplayGoogleTypeDate } from "./DisplayGoogleTypeDate";

export * from "./DisplayGoogleTypeDate";

window.customElements.define("display-google-type-date", DisplayGoogleTypeDate);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-type-date": DisplayGoogleTypeDate;
  }
}
