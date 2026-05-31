import { FormFuroFatUint32 } from "./FormFuroFatUint32";

FormFuroFatUint32.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-fat-uint32": FormFuroFatUint32;
  }
}
