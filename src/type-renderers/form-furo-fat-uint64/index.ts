import { FormFuroFatUint64 } from "./FormFuroFatUint64";

export * from "./FormFuroFatUint64";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-uint64": FormFuroFatUint64;
  }
}

window.customElements.define("form-furo-fat-uint64", FormFuroFatUint64);
