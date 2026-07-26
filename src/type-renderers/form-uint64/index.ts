import { FormUint64 } from "./FormUint64";

declare global {
  interface HTMLElementTagNameMap {
    "form-uint64": FormUint64;
  }
}

window.customElements.define("form-uint64", FormUint64);
