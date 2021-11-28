// eslint-disable-next-line import/named
import { CellUint64 } from './cell-uint64.js';
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
class CellGoolgeProtobufUin64value extends CellUint64 {}

window.customElements.define(
  'cell-google-protobuf-uint64value',
  CellGoolgeProtobufUin64value
);
