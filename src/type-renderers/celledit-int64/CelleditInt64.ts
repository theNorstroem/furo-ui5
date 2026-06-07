import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";
/**
 *
 *
 * @summary celledit renderer for `int64`
 * @element celledit-int64
 */
export class CelleditInt64 extends CelleditInt32 {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-int64" };
  }
}
