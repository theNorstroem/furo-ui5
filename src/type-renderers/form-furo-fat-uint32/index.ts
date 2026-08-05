import { FormFuroFatUint32 } from "./FormFuroFatUint32";

export * from "./FormFuroFatUint32";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-uint32": FormFuroFatUint32;
  }
}

window.customElements.define("form-furo-fat-uint32", FormFuroFatUint32);
