// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePicker } from '../furo-ui5-date-picker.js';

/**
 *
 * @summary celledit renderer for `furo.type.Date`
 * @element celledit-furo-type-date
 */
export class CelleditFuroTypeDate extends FuroUi5DatePicker {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-type-date' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroTypeDate.define();
