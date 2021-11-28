import { CellDouble } from './cell-double.js';
/**
 * `cell-double`
 * The cell-double component displays a FieldNode of type `google.protobuf.DoubleValue` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.DoubleValue`
 * @element cell-google-protobuf-doublevalue
 */
class CellGoogleProtobufDoublevalue extends CellDouble {}

window.customElements.define(
  'cell-google-protobuf-doublevalue',
  CellGoogleProtobufDoublevalue
);
