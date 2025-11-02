import { FuroUi5TextInputLabeled } from "@/impl/impl/furo-ui5-text-input-labeled";

/**
 *
 * @summary form renderer for `google.protobuf.StringValue`
 * @element form-google-protobuf-stringValue
 */
export class FormGoogleProtobufStringvalue extends FuroUi5TextInputLabeled {
  bindData(fieldNode) {
    super.bindData(fieldNode);
  }
}

window.customElements.define("form-google-protobuf-stringvalue", FormGoogleProtobufStringvalue);
