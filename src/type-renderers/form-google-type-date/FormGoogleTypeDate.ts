// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePickerLabeled } from "@/impl/impl/furo-ui5-date-picker-labeled";

/**
 * `form-google-type-date` is a `form` context renderer.
 *
 * It uses furo-ui5-date-picker as the renderer
 *
 * @summary form renderer for `google.type.Date`
 * @element form-google-type-date
 */
export class FormGoogleTypeDate extends FuroUi5DatePickerLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-google-type-date" };
  }
}
