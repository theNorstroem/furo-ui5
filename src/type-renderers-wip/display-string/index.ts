import { DisplayString } from "./DisplayString";

window.customElements.define("display-string", DisplayString);

declare global {
  interface HTMLElementTagNameMap {
    "display-string": DisplayString;
  }
}
