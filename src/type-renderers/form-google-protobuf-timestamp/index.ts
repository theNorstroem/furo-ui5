import { FormGoogleProtobufTimestamp } from "./FormGoogleProtobufTimestamp";

export * from "./FormGoogleProtobufTimestamp";

declare global {
  interface HTMLElementTagNameMap {
    "form-google-protobuf-timestamp": FormGoogleProtobufTimestamp;
  }
}

window.customElements.define("form-google-protobuf-timestamp", FormGoogleProtobufTimestamp);
