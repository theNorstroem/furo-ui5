import { FormUint64 } from "./FormUint64";

FormUint64.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-uint64": FormUint64;
  }
}
