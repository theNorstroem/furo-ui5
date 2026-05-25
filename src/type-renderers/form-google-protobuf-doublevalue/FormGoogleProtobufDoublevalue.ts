import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 * `form-google-protobuf-doublevalue` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `google.protobuf.Double`
 * @element form-google-protobuf-doublevalue
 */
export class FormGoogleProtobufDoublevalue extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-google-protobuf-doublevalue" };
  }
}
