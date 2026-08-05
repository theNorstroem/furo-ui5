import { FormFuroFatInt32 } from "./FormFuroFatInt32";

export * from "./FormFuroFatInt32";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-int32": FormFuroFatInt32;
  }
}

window.customElements.define("form-furo-fat-int32", FormFuroFatInt32);
