import { CellGoogleProtobufAny } from "./CellGoogleProtobufAny";

export * from "./CellGoogleProtobufAny";

window.customElements.define("cell-google-protobuf-any", CellGoogleProtobufAny);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-protobuf-any": CellGoogleProtobufAny;
  }
}
