import { CellInt32 } from './cell-int32.js';
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
export class CellGoolgeProtobufIn32value extends CellInt32 {}

window.customElements.define(
  'cell-google-protobuf-int32value',
  CellGoolgeProtobufIn32value
);
