import { DisplayDouble } from "./DisplayDouble";

window.customElements.define("display-double", DisplayDouble);

declare global {
  interface HTMLElementTagNameMap {
    "display-double": DisplayDouble;
  }
}
