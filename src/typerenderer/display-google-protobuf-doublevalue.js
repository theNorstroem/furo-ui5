import { DisplayDouble } from './display-double.js';
/**
 * `display-double`
 * The display-double component displays a FieldNode of type `google.protobuf.DoubleValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.DoubleValue`
 * @element display-google-protobuf-doublevalue
 */
export class DisplayGoogleProtobufDoublevalue extends DisplayDouble {}

window.customElements.define(
  'display-google-protobuf-doublevalue',
  DisplayGoogleProtobufDoublevalue
);
