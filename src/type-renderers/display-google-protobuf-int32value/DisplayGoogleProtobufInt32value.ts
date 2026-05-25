import { DisplayInt32 } from "@/type-renderers/display-int32/DisplayInt32";
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
export class DisplayGoogleProtobufInt32value extends DisplayInt32 {}
