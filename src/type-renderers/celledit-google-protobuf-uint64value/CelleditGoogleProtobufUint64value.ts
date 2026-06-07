import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

/**
 * `celledit-google-protobuf-uint64value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Uint64value`
 * @element celledit-google-protobuf-uint64value
 */
export class CelleditGoogleProtobufUint64value extends CelleditInt32 {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-protobuf-uint64value" };
  }

}
