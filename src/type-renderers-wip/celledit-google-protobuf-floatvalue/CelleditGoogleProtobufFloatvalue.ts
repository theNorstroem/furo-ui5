import { CelleditInt32 } from "@/type-renderers/celledit-int32/CelleditInt32";

/**
 * `celledit-google-protobuf-floatvalue` is a `celledit` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary celledit renderer for `google.protobuf.FloatValue`
 * @element celledit-google-protobuf-floatvalue
 */
export class CelleditGoogleProtobufFloatvalue extends CelleditInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "celledit-google-protobuf-floatvalue" };
  }

  static get styles() {
    return super.styles;
  }
}
