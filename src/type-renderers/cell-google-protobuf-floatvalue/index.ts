import { CellGoogleProtobufFloatvalue } from "./CellGoogleProtobufFloatvalue";

export * from "./CellGoogleProtobufFloatvalue";

window.customElements.define("cell-google-protobuf-floatvalue", CellGoogleProtobufFloatvalue);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-protobuf-floatvalue": CellGoogleProtobufFloatvalue;
  }
}
