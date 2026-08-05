import { FormInt32 } from "./FormInt32";

export * from "./FormInt32";

declare global {
  interface HTMLElementTagNameMap {
    "form-int32": FormInt32;
  }
}

window.customElements.define("form-int32", FormInt32);
