import { FormGoogleProtobufTimestamp } from "./FormGoogleProtobufTimestamp";

FormGoogleProtobufTimestamp.define();

declare global {
  interface HTMLElementTagNameMap {
    "form-google-protobuf-timestamp": FormGoogleProtobufTimestamp;
  }
}
