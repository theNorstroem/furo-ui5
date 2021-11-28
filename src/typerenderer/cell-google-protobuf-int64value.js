import { CellInt64 } from './cell-int64.js';
/**
 * `cell-google-protobuf-boolvalue`
 * The cell-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Int64Value` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.Int64Value`
 * @element cell-google-protobuf-int64value
 */
class CellGoolgeProtobufIn64value extends CellInt64 {}

window.customElements.define(
  'cell-google-protobuf-int64value',
  CellGoolgeProtobufIn64value
);
