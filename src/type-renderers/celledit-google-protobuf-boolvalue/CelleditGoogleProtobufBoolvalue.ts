import { CelleditBool } from "@/type-renderers/celledit-bool/CelleditBool";

/**
 * `celledit-google-protobuf-boolvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary celledit renderer for `google.protobuf.BoolValue`
 * @element celledit-google-protobuf-boolvalue
 */

export class CelleditGoogleProtobufBoolvalue extends CelleditBool {
  /**
   * @private
   */
  static override get metadata() {
    return { tag: "celledit-google-protobuf-boolvalue" };
  }
}
