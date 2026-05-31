import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 *
 * @summary form renderer for `int64`
 * @element form-int64
 */
export class FormInt64 extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-int64" };
  }
}
