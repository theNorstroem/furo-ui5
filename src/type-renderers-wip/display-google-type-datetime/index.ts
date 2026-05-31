import { DisplayGoogleTypeDatetime } from "./DisplayGoogleTypeDatetime";

window.customElements.define("display-google-type-datetime", DisplayGoogleTypeDatetime);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-type-datetime": DisplayGoogleTypeDatetime;
  }
}
