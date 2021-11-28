// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';
/**
 *
 *
 * @summary celledit renderer for `int64`
 * @element celledit-int64
 */
export class CelleditInt64 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-int64' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditInt64.define();
