import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";
/**
 *
 *
 * @summary celledit renderer for `uint32`
 * @element celledit-uint32
 */
export class CelleditUint32 extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "celledit-uint32" };
  }

  static get styles() {
    return super.styles;
  }
}
