import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

/**
 * `celledit-google-protobuf-uint32value` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.Uint32value`
 * @element celledit-google-protobuf-uint32value
 */
export class CelleditGoogleProtobufUint32value extends CelleditInt32 {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-protobuf-uint32value" };
  }

}
