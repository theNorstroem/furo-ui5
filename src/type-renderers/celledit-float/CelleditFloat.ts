import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

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
  static override get metadata() {
    return { tag: "celledit-float" };
  }
}
