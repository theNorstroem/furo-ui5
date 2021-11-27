import { CelleditString } from './celledit-string.js';

class CelleditFuroFatString extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-furo-fat-string';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatString.define();
