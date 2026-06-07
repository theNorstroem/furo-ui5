import { CelleditString } from "@/type-renderers/celledit-string/CelleditString";

/**
 * `celledit-furo-fat-string` is a `celledit` context renderer.
 *
 * It uses furo-ui5-text-input as the renderer
 *
 * @summary celledit renderer for `furo.fat.String`
 * @element celledit-furo-fat-string
 */
export class CelleditFuroFatString extends CelleditString {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-furo-fat-string" };
  }
}
