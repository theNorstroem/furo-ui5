import { CellUint64 } from "@/type-renderers/cell-uint64/CellUint64";
/**
 * `cell-google-protobuf-boolvalue`
 * The cell-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Uint64Value` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Uint64Value`
 * @element cell-google-protobuf-uint64value
 */
export class CellGoogleProtobufUint64value extends CellUint64 {}
