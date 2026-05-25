import { FormInt32 } from "@/type-renderers/form-int32/FormInt32";

/**
 * `form-google-protobuf-int32value` is a `form` context renderer.
 *
 * It uses furo-ui5-number-input as the renderer
 *
 * @summary form renderer for `google.protobuf.Int32Value`
 * @element form-google-protobuf-int32value
 */
export class FormGoogleProtobufInt32value extends FormInt32 {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-google-protobuf-int32value" };
  }
}
