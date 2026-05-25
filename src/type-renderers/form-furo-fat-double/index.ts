import { FormFuroFatDouble } from "./FormFuroFatDouble";

FormFuroFatDouble.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-double": FormFuroFatDouble;
  }
}
