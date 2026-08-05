import { FormString } from "./FormString";

export * from "./FormString";

declare global {
  interface HTMLElementTagNameMap {
    "form-string": FormString;
  }
}

window.customElements.define("form-string", FormString);
