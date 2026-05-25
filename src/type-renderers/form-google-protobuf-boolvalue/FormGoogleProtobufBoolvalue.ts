import { FormBool } from "@/type-renderers/form-bool/FormBool";

/**
 * `form-google-protobuf-boolvalue` is a `form` context renderer.
 *
 * It uses furo-ui5-checkbox as the renderer
 *
 * @summary form renderer for `google.protobuf.BoolValue`
 * @element form-google-protobuf-boolvalue
 */

export class FormGoogleProtobufBoolvalue extends FormBool {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-google-protobuf-boolvalue" };
  }
}
