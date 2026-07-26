import { FormFuroFatBool } from "./FormFuroFatBool";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-bool": FormFuroFatBool;
  }
}

window.customElements.define("form-furo-fat-bool", FormFuroFatBool);
