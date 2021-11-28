// eslint-disable-next-line import/no-extraneous-dependencies
import { FuroUi5Select } from '../furo-ui5-select.js';

class CelleditFuroStringoptionproperty extends FuroUi5Select {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-stringoptionproperty' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroStringoptionproperty.define();
