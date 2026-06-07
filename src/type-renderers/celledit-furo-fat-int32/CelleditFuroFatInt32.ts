import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

/**
 * `celledit-furo-fat-int32` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.Int32`
 * @element celledit-furo-fat-int32
 */

export class CelleditFuroFatInt32 extends CelleditInt32 {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-furo-fat-int32" };
  }
}
