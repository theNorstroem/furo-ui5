import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

/**
 * `celledit-furo-fat-uint64` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.Uint64`
 * @element celledit-furo-fat-uint64
 */

export class CelleditFuroFatUint64 extends CelleditInt32 {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-furo-fat-uint64" };
  }
}
