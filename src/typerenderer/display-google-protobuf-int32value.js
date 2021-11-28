import { DisplayInt32 } from './display-int32.js';
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Int32Value` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.Int32Value`
 * @element display-google-protobuf-int32Value
 */
class DisplayGoolgeProtobufIn32value extends DisplayInt32 {}

window.customElements.define(
  'display-google-protobuf-int32value',
  DisplayGoolgeProtobufIn32value
);
