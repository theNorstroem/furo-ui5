import { CellUint32 } from "@/type-renderers/cell-uint32/CellUint32";
/**
 * `cell-google-protobuf-boolvalue`
 * The cell-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Uint32Value` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Uint32Value`
 * @element cell-google-protobuf-uint32value
 */
export class CellGoogleProtobufUint32value extends CellUint32 {}
