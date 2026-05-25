import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";
/**
 *
 * @summary form renderer for `uint64`
 * @element form-uint64
 */
export class FormUint64 extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-uint64" };
  }
}
