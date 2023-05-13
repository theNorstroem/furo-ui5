import { CelleditString } from './celledit-string.js';

/**
 *
 * @summary celledit renderer for `furo.Stringproperty`
 * @element celledit-furo-stringproperty
 */
export class CelleditFuroStringproperty extends CelleditString {
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
