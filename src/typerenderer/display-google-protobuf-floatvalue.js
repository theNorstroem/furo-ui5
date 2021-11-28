import { DisplayFloat } from './display-float.js';

/**
 * `display-google-protobuf-floatvalue`
 * The display-google-protobuf-floatvalue component displays a FieldNode of type `google.protobuf.FloatValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.FloatValue`
 * @element display-google-protobuf-floatvalue
 */
class DisplayGoolgeProtobufFloatvalue extends DisplayFloat {}

window.customElements.define(
  'display-google-protobuf-floatvalue',
  DisplayGoolgeProtobufFloatvalue
);
