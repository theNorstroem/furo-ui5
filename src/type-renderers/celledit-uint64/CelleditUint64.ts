import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";
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
    return { tag: "celledit-uint64" };
  }

  static get styles() {
    return super.styles;
  }
}
