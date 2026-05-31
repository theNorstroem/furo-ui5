import { FormFloat } from "./FormFloat";

FormFloat.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-float": FormFloat;
  }
}
