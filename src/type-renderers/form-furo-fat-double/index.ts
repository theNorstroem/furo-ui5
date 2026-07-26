import { FormFuroFatDouble } from "./FormFuroFatDouble";

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-double": FormFuroFatDouble;
  }
}

window.customElements.define("form-furo-fat-double", FormFuroFatDouble);
