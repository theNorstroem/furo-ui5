import { CelleditInt32 } from './celledit-int32.js';

/**
 * `celledit-furo-fat-int64` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.Int64`
 * @element celledit-furo-fat-int64
 */
export class CelleditFuroFatInt64 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-int64' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditFuroFatInt64": CelleditFuroFatInt64;
  }
}

import CelleditFuroFatInt64 from "@/wc-type-renderer/impl/CelleditFuroFatInt64
CelleditFuroFatInt64.define()
