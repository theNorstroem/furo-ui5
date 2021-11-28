// eslint-disable-next-line import/named
import { CelleditInt32 } from './celledit-int32.js';

export class CelleditUint64 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-uint64' };
  }

  static get styles() {
    return super.styles;
  }
}

CelleditUint64.define();
