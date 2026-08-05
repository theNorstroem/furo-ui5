import { DisplayGoogleProtobufTimestamp } from "./DisplayGoogleProtobufTimestamp";

export * from "./DisplayGoogleProtobufTimestamp";

window.customElements.define("display-google-protobuf-timestamp", DisplayGoogleProtobufTimestamp);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-protobuf-timestamp": DisplayGoogleProtobufTimestamp;
  }
}
