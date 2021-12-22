import { CelleditInt32 } from './celledit-int32.js';
/**
 *
 *
 * @summary celledit renderer for type `furo.BigDecimal`
 * @element celledit-furo-bigdecimal
 */
export class CelleditFuroBigdecimal extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-bigdecimal' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditFuroBigdecimal.define();
