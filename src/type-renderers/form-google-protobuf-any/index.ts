import { FormGoogleProtobufAny } from "./FormGoogleProtobufAny";

export * from "./FormGoogleProtobufAny";

window.customElements.define("form-google-protobuf-any", FormGoogleProtobufAny);

declare global {
  interface HTMLElementTagNameMap {
    "form-google-protobuf-any": FormGoogleProtobufAny;
  }
}
