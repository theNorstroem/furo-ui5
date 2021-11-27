import { CelleditString } from './celledit-string.js';

class CelleditFuroStringproperty extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-furo-stringproperty';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroStringproperty.define();
