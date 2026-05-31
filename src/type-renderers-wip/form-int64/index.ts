import { FormInt64 } from "./FormInt64";

FormInt64.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-int64": FormInt64;
  }
}
