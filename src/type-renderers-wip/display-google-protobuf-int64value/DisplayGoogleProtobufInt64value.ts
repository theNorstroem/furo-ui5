import { DisplayInt64 } from "@/type-renderers/display-int64/DisplayInt64";
/**
 * `display-google-protobuf-boolvalue`
 * The display-google-protobuf-boolvalue component displays a FieldNode of type `google.protobuf.Int64Value` in read only mode.
 *
 * Every display-xxx component should implement the following API:
 * - function: bindData(fieldNode){...}
 *
 * @summary display renderer for `google.protobuf.Int64Value`
 * @element display-google-protobuf-int64Value
 */
export class DisplayGoogleProtobufInt64value extends DisplayInt64 {}
