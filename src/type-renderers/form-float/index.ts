import { FormFloat } from "./FormFloat";

declare global {
  interface HTMLElementTagNameMap {
    "form-float": FormFloat;
  }
}

window.customElements.define("form-float", FormFloat);
