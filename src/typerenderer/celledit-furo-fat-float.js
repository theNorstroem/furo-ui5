import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-float` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for furo.fat.Float
 * @element celledit-furo-fat-float
 */
class CelleditFuroFatFloat extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-float' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroFatFloat.define();
