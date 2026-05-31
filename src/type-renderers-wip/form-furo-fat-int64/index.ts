import { FormFuroFatInt64 } from "./FormFuroFatInt64";

FormFuroFatInt64.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-int64": FormFuroFatInt64;
  }
}
