import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";
/**
 *
 * @summary form renderer for `uint32`
 * @element form-uint32
 */
export class FormUint32 extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-uint32" };
  }
}
