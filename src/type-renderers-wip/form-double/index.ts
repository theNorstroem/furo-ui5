import { FormDouble } from "./FormDouble";

FormDouble.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-double": FormDouble;
  }
}
