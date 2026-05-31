import { FormBool } from "./FormBool";

FormBool.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-bool": FormBool;
  }
}
