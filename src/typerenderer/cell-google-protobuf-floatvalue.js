import { CellFloat } from './cell-float.js';

/**
 * `cell-google-protobuf-floatvalue`
 * The cell-google-protobuf-floatvalue component displays a FieldNode of type `google.protobuf.FloatValue` in read only mode.
 *
 * Every cell-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary cell display renderer for `google.protobuf.`
 * @element cell-google-protobuf-
 */
export class CellGoolgeProtobufFloatvalue extends CellFloat {}

window.customElements.define(
  'cell-google-protobuf-floatvalue',
  CellGoolgeProtobufFloatvalue
);
