import { FormInt32 } from "./form-int32.js";

/**
 *
 * @summary form renderer for `int64`
 * @element form-int64
 */
export class FormInt64 extends FormInt32 {}

declare global {
  interface HTMLElementTagNameMap {
    "form-int64": FormInt64;
  }
}
