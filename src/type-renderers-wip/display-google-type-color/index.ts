import { DisplayGoogleTypeColor } from "./DisplayGoogleTypeColor";

window.customElements.define("display-google-type-color", DisplayGoogleTypeColor);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-type-color": DisplayGoogleTypeColor;
  }
}
