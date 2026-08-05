import { FormUint32 } from "./FormUint32";

export * from "./FormUint32";

declare global {
  interface HTMLElementTagNameMap {
    "form-uint32": FormUint32;
  }
}

window.customElements.define("form-uint32", FormUint32);
