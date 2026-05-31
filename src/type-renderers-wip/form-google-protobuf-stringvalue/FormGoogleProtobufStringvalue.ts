import { FuroUi5TextInputLabeled } from "@/impl/impl/furo-ui5-text-input-labeled";

/**
 *
 * @summary form renderer for `google.protobuf.StringValue`
 * @element form-google-protobuf-stringValue
 */
export class FormGoogleProtobufStringvalue extends FuroUi5TextInputLabeled {
  /**
   * @private
   */
  static get metadata() {
    return { tag: "form-google-protobuf-stringvalue" };
  }

  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}
