// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5TimePicker } from '../furo-ui5-time-picker.js';

/**
 * `celledit-google-type-timeofday` is a `celledit` context renderer.
 *
 * It uses furo-ui5-time-picker as the renderer
 *
 * @summary celledit renderer for google.type.TimeOfDay
 * @element celledit-google-type-timeofday
 */
class CelleditGoogleTypeTimeofday extends FuroUi5TimePicker {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-google-type-timeofday' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditGoogleTypeTimeofday.define();
