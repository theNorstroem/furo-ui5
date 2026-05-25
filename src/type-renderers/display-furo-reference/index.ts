import { DisplayFuroReference } from "./DisplayFuroReference";

window.customElements.define("display-furo-reference", DisplayFuroReference);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-reference": DisplayFuroReference;
  }
}
