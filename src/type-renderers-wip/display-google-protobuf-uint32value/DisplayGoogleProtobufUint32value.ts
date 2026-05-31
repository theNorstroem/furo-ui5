import { DisplayUint32 } from "@/type-renderers/display-uint32/DisplayUint32";
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
export class DisplayGoogleProtobufUint32value extends DisplayUint32 {}
