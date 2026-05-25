import { DisplayGoogleProtobufAny } from "./DisplayGoogleProtobufAny";

window.customElements.define("display-google-protobuf-any", DisplayGoogleProtobufAny);

declare global {
  interface HTMLElementTagNameMap {
    "display-google-protobuf-any": DisplayGoogleProtobufAny;
  }
}
