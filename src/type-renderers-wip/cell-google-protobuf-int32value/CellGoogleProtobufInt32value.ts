import { CellInt32 } from "@/type-renderers/cell-int32/CellInt32";
/**
 * `cell-google-protobuf-boolvalue`
 * The cell-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Int32Value` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Int32Value`
 * @element cell-google-protobuf-int32value
 */
export class CellGoogleProtobufInt32value extends CellInt32 {}
