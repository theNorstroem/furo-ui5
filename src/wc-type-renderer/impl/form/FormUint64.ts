import { FormInt32 } from "./form-int32.js";
/**
 *
 * @summary form renderer for `uint64`
 * @element form-uint64
 */
export class FormUint64 extends FormInt32 {}

declare global {
  interface HTMLElementTagNameMap {
    "form-uint64": FormUint64;
  }
}
