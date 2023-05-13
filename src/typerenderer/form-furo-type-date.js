// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePickerLabeled } from '../furo-ui5-date-picker-labeled.js';

/**
 *
 * @summary form renderer for `furo.type.Date`
 * @element form-furo-type-date
 */
export class FormFuroTypeDate extends FuroUi5DatePickerLabeled {}

window.customElements.define('form-furo-type-date', FormFuroTypeDate);
