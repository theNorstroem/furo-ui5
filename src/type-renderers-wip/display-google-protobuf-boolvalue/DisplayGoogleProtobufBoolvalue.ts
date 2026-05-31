import { DisplayBool } from "@/type-renderers/display-bool/DisplayBool";
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
export class DisplayGoogleProtobufBoolvalue extends DisplayBool {}
