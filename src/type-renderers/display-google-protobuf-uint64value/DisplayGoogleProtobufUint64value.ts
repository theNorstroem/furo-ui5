import { DisplayUint64 } from "@/type-renderers/display-uint64/DisplayUint64";
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Uint64Value` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.Uint64Value`
 * @element display-google-protobuf-uint64value
 */
export class DisplayGoogleProtobufUint64value extends DisplayUint64 {}
