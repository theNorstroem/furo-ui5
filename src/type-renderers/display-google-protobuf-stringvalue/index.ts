import { DisplayGoogleProtobufStringvalue } from "./DisplayGoogleProtobufStringvalue";

export * from "./DisplayGoogleProtobufStringvalue";

window.customElements.define("display-google-protobuf-stringvalue", DisplayGoogleProtobufStringvalue);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-protobuf-stringvalue": DisplayGoogleProtobufStringvalue;
  }
}
