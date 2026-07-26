import { FormString } from "./FormString";

declare global {
  interface HTMLElementTagNameMap {
    "form-string": FormString;
  }
}

window.customElements.define("form-string", FormString);
