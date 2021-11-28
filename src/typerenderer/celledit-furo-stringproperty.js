import { CelleditString } from './celledit-string.js';

class CelleditFuroStringproperty extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-stringproperty' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroStringproperty.define();
