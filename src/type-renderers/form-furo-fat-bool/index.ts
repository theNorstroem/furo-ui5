import { FormFuroFatBool } from "./FormFuroFatBool";

export * from "./FormFuroFatBool";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-bool": FormFuroFatBool;
  }
}

window.customElements.define("form-furo-fat-bool", FormFuroFatBool);
