import { FormFuroFatUint64 } from "./FormFuroFatUint64";

FormFuroFatUint64.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-uint64": FormFuroFatUint64;
  }
}
