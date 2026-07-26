import { FormFuroFatInt64 } from "./FormFuroFatInt64";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-int64": FormFuroFatInt64;
  }
}

window.customElements.define("form-furo-fat-int64", FormFuroFatInt64);
