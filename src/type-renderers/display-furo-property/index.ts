import { DisplayFuroProperty } from "./DisplayFuroProperty";

window.customElements.define("display-furo-property", DisplayFuroProperty);

declare global {
  interface HTMLElementTagNameMap {
    "display-furo-property": DisplayFuroProperty;
  }
}
