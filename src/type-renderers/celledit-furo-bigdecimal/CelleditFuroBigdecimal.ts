import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";
/**
 *
 *
 * @summary celledit renderer for type `furo.BigDecimal`
 * @element celledit-furo-bigdecimal
 */
export class CelleditFuroBigdecimal extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "celledit-furo-bigdecimal" };
  }

  static get styles() {
    return super.styles;
  }
}
