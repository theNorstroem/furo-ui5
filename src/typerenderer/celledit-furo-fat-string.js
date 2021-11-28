import { CelleditString } from './celledit-string.js';

class CelleditFuroFatString extends CelleditString {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-string' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatString.define();
