import { FormFuroFatString } from "./FormFuroFatString";

export * from "./FormFuroFatString";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-string": FormFuroFatString;
  }
}

window.customElements.define("form-furo-fat-string", FormFuroFatString);
