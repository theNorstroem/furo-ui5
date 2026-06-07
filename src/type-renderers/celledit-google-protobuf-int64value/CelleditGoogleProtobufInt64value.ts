import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

/**
 * `celledit-google-protobuf-int64value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Int64Value`
 * @element celledit-google-protobuf-int64value
 */
export class CelleditGoogleProtobufInt64value extends CelleditInt32 {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-protobuf-int64value" };
  }

}
