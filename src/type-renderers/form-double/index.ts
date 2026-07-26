import { FormDouble } from "./FormDouble";

declare global {
  interface HTMLElementTagNameMap {
    "form-double": FormDouble;
  }
}

window.customElements.define("form-double", FormDouble);
