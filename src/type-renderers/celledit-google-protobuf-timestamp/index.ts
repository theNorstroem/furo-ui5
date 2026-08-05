import { CelleditGoogleProtobufTimestamp } from "./CelleditGoogleProtobufTimestamp";

export * from "./CelleditGoogleProtobufTimestamp";

CelleditGoogleProtobufTimestamp.define();

declare global {
  interface HTMLElementTagNameMap {
    "celledit-google-protobuf-timestamp": CelleditGoogleProtobufTimestamp;
  }
}
