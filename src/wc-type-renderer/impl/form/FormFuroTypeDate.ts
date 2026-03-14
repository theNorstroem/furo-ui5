// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePickerLabeled } from "@/impl/impl/furo-ui5-date-picker-labeled";

/**
 *
 * @summary form renderer for `furo.type.Date`
 * @element form-furo-type-date
 */
export class FormFuroTypeDate extends FuroUi5DatePickerLabeled {}

declare global {
  interface HTMLElementTagNameMap {
    "form-furo-type-date": FormFuroTypeDate;
  }
}
