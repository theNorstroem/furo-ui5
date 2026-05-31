import { FuroUi5TextInputLabeled } from "@/impl/impl/furo-ui5-text-input-labeled";
/**
 *
 * @summary form renderer for `string`
 * @element form-string
 */
export class FormString extends FuroUi5TextInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-string" };
  }
}
