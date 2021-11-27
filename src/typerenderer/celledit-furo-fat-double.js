// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-double` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Double
 * @element celledit-furo-fat-double
 */
class CelleditFuroFatDouble extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    const md = super.metadata;
    md.tag = 'celledit-furo-fat-double';
    return md;
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatDouble.define();
