// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePicker } from '../furo-ui5-date-picker.js';

/**
 * `celledit-google-type-date` is a `celledit` context renderer.
 *
 * It uses furo-ui5-date-picker as the renderer
 *
 * @summary celledit renderer for google.type.Date
 * @customElement celledit-google-type-date
 */
class CelleditGoogleTypeDate extends FuroUi5DatePicker {
  constructor() {
    super();
    this.addEventListener('click', e => {
      e.stopPropagation();
      e.preventDefault();
    });
  }
}

window.customElements.define(
  'celledit-google-type-date',
  CelleditGoogleTypeDate
);
