// eslint-disable-next-line import/named
import { DisplayUint32 } from './display-uint32.js';
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Uint32Value` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.Uint32Value`
 * @element display-google-protobuf-uint32value
 */
class DisplayGoolgeProtobufUin32value extends DisplayUint32 {}

window.customElements.define(
  'display-google-protobuf-uint32value',
  DisplayGoolgeProtobufUin32value
);
