// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-float` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `float`
 * @element celledit-float
 */
export class CelleditFloat extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-float' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFloat.define();
