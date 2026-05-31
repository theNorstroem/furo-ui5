import { FormFuroFatBool } from "./FormFuroFatBool";

FormFuroFatBool.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-bool": FormFuroFatBool;
  }
}
