import { CellGoogleProtobufTimestamp } from "./CellGoogleProtobufTimestamp";

window.customElements.define("cell-google-protobuf-timestamp", CellGoogleProtobufTimestamp);

declare global {
  interface HTMLElementTagNameMap {
    "cell-google-protobuf-timestamp": CellGoogleProtobufTimestamp;
  }
}
