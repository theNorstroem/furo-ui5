import { CelleditInt32 } from './celledit-int32.js';
/**
 *
 *
 * @summary celledit renderer for `uint64`
 * @element celledit-uint64
 */
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

declare global {
  interface HTMLElementTagNameMap {
    "CelleditUint64": CelleditUint64;
  }
}

import CelleditUint64 from "@/typerenderer/impl/CelleditUint64
CelleditUint64.define()
