import { FormInt64 } from "./FormInt64";

declare global {
  interface HTMLElementTagNameMap {
    "form-int64": FormInt64;
  }
}

window.customElements.define("form-int64", FormInt64);
