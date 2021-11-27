// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-double` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for double
 * @element celledit-double
 */
export class CelleditDouble extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-double' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditDouble.define();
