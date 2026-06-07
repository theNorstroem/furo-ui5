import { CelleditBool } from "@/type-renderers/celledit-bool/CelleditBool";

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
  static override get metadata() {
    return { tag: "celledit-furo-fat-bool" };
  }
}
