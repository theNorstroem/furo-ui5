import { DisplayGoogleProtobufFloatvalue } from "./DisplayGoogleProtobufFloatvalue";

export * from "./DisplayGoogleProtobufFloatvalue";

window.customElements.define("display-google-protobuf-floatvalue", DisplayGoogleProtobufFloatvalue);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-protobuf-floatvalue": DisplayGoogleProtobufFloatvalue;
  }
}
