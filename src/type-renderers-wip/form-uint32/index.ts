import { FormUint32 } from "./FormUint32";

FormUint32.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-uint32": FormUint32;
  }
}
