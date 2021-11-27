// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5DatePicker } from '../furo-ui5-date-picker.js';

class CelleditFuroTypeDate extends FuroUi5DatePicker {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-furo-type-date';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroTypeDate.define();
