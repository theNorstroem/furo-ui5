import { CelleditString } from './celledit-string.js';

/**
 * `celledit-furo-fat-string` is a `celledit` context renderer.
 *
 * It uses furo-ui5-text-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.String`
 * @element celledit-furo-fat-string
 */
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
