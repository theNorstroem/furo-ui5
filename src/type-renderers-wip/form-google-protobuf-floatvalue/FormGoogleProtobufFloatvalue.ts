import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 * `form-google-protobuf-floatvalue` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `google.protobuf.FloatValue`
 * @element form-google-protobuf-floatvalue
 */
export class FormGoogleProtobufFloatvalue extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-google-protobuf-floatvalue" };
  }
}
