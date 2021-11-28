// eslint-disable-next-line import/named
import { DisplayBool } from './display-bool.js';
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.BoolValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.BoolValue`
 * @element display-google-protobuf-boolvalue
 */
class DisplayGoolgeProtobufBoolvalue extends DisplayBool {}

window.customElements.define(
  'display-google-protobuf-boolvalue',
  DisplayGoolgeProtobufBoolvalue
);
