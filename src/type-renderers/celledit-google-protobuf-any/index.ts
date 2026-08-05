import { CelleditGoogleProtobufAny } from "./CelleditGoogleProtobufAny";

export * from "./CelleditGoogleProtobufAny";

window.customElements.define("celledit-google-protobuf-any", CelleditGoogleProtobufAny);

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-protobuf-any": CelleditGoogleProtobufAny;
  }
}
