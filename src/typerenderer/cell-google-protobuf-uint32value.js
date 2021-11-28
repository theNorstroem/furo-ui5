// eslint-disable-next-line import/named
import { CellUint32 } from './cell-uint32.js';
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
class CellGoolgeProtobufUin32value extends CellUint32 {}

window.customElements.define(
  'cell-google-protobuf-uint32value',
  CellGoolgeProtobufUin32value
);
