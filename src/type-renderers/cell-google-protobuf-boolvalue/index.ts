import { CellGoogleProtobufBoolvalue } from "./CellGoogleProtobufBoolvalue";

export * from "./CellGoogleProtobufBoolvalue";

window.customElements.define("cell-google-protobuf-boolvalue", CellGoogleProtobufBoolvalue);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-protobuf-boolvalue": CellGoogleProtobufBoolvalue;
  }
}
