// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TimePickerLabeled } from '../furo-ui5-time-picker-labeled.js';

/**
 * `form-google-type-timeofday` is a `form` context renderer.
 *
 * It uses furo-ui5-time-picker as the renderer
 *
 * @summary form renderer for `google.type.TimeOfDay`
 * @element form-google-type-timeofday
 */
class FormGoogleTypeTimeofday extends FuroUi5TimePickerLabeled {}

window.customElements.define(
  'form-google-type-timeofday',
  FormGoogleTypeTimeofday
);
