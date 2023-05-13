import { DisplayString } from './display-string.js';

/**
 * `display-google-protobuf-stringvalue`
 * The display-google-protobuf-stringvalue component displays a FieldNode of type `google.protobuf.StringValue` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.StringValue`
 * @element display-google-protobuf-stringvalue
 */
export class DisplayGoogleProtobufStringvalue extends DisplayString {}

window.customElements.define(
  'display-google-protobuf-stringvalue',
  DisplayGoogleProtobufStringvalue
);
