import { FormInt32 } from "./FormInt32";

FormInt32.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-int32": FormInt32;
  }
}
