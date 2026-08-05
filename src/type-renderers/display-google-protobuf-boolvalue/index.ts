import { DisplayGoogleProtobufBoolvalue } from "./DisplayGoogleProtobufBoolvalue";

export * from "./DisplayGoogleProtobufBoolvalue";

window.customElements.define("display-google-protobuf-boolvalue", DisplayGoogleProtobufBoolvalue);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-protobuf-boolvalue": DisplayGoogleProtobufBoolvalue;
  }
}
