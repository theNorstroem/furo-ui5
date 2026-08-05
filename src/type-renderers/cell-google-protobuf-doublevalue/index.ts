import { CellGoogleProtobufDoublevalue } from "./CellGoogleProtobufDoublevalue";

export * from "./CellGoogleProtobufDoublevalue";

window.customElements.define("cell-google-protobuf-doublevalue", CellGoogleProtobufDoublevalue);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-protobuf-doublevalue": CellGoogleProtobufDoublevalue;
  }
}
