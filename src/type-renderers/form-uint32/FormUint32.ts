import { FormInt32 } from "./form-int32.js";
/**
 *
 * @summary form renderer for `uint32`
 * @element form-uint32
 */
export class FormUint32 extends FormInt32 {}

declare global {
  interface HTMLElementTagNameMap {
    "form-uint32": FormUint32;
  }
}
