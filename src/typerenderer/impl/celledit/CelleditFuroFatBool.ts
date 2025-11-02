import { CelleditBool } from './celledit-bool.js';

/**
 * `celledit-furo-fat-bool` is a `celledit` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary celledit renderer for `bool`
 * @element celledit-furo-fat-bool
 */
export class CelleditFuroFatBool extends CelleditBool {
  /**
   * @private
   */
  static get metadata() {
    return { tag: 'celledit-furo-fat-bool' };
  }

  static get styles() {
    return super.styles;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "CelleditFuroFatBool": CelleditFuroFatBool;
  }
}

import CelleditFuroFatBool from "@/typerenderer/impl/CelleditFuroFatBool
CelleditFuroFatBool.define()
