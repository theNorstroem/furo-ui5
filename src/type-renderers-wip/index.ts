// WIP type-renderers — excluded from tsc + eslint (see tsconfig.json / eslint.config.mjs).
// These are authored in loose JS-in-TS style and do not yet pass the repo's strict checks.
// When a component is ported to strict TS, git mv its dir back into src/type-renderers/ and
// move its export line into src/type-renderers/index.ts.

// cell
export * from "./cell-google-protobuf-any/CellGoogleProtobufAny";

// celledit
export * from "./celledit-double/CelleditDouble";
export * from "./celledit-float/CelleditFloat";
export * from "./celledit-furo-bigdecimal/CelleditFuroBigdecimal";
export * from "./celledit-furo-fat-bool/CelleditFuroFatBool";
export * from "./celledit-furo-fat-double/CelleditFuroFatDouble";
export * from "./celledit-furo-fat-float/CelleditFuroFatFloat";
export * from "./celledit-furo-fat-int32/CelleditFuroFatInt32";
export * from "./celledit-furo-fat-int64/CelleditFuroFatInt64";
export * from "./celledit-furo-fat-string/CelleditFuroFatString";
export * from "./celledit-furo-fat-uint32/CelleditFuroFatUint32";
export * from "./celledit-furo-fat-uint64/CelleditFuroFatUint64";
export * from "./celledit-furo-type-date/CelleditFuroTypeDate";
export * from "./celledit-furo-type-money/CelleditFuroTypeMoney";
export * from "./celledit-google-protobuf-any/CelleditGoogleProtobufAny";
export * from "./celledit-google-protobuf-boolvalue/CelleditGoogleProtobufBoolvalue";
export * from "./celledit-google-protobuf-doublevalue/CelleditGoogleProtobufDoublevalue";
export * from "./celledit-google-protobuf-floatvalue/CelleditGoogleProtobufFloatvalue";
export * from "./celledit-google-protobuf-int32value/CelleditGoogleProtobufInt32value";
export * from "./celledit-google-protobuf-int64value/CelleditGoogleProtobufInt64value";
export * from "./celledit-google-protobuf-stringvalue/CelleditGoogleProtobufStringvalue";
export * from "./celledit-google-protobuf-timestamp/CelleditGoogleProtobufTimestamp";
export * from "./celledit-google-protobuf-uint32value/CelleditGoogleProtobufUint32value";
export * from "./celledit-google-protobuf-uint64value/CelleditGoogleProtobufUint64value";
export * from "./celledit-google-type-date/CelleditGoogleTypeDate";
export * from "./celledit-google-type-money/CelleditGoogleTypeMoney";
export * from "./celledit-google-type-timeofday/CelleditGoogleTypeTimeofday";
export * from "./celledit-int32/CelleditInt32";
export * from "./celledit-int64/CelleditInt64";
export * from "./celledit-string/CelleditString";
export * from "./celledit-uint32/CelleditUint32";
export * from "./celledit-uint64/CelleditUint64";

// display
export * from "./display-google-protobuf-any/DisplayGoogleProtobufAny";

// form
export * from "./form-furo-bigdecimal/FormFuroBigdecimal";
export * from "./form-furo-type-date/FormFuroTypeDate";
export * from "./form-furo-type-money/FormFuroTypeMoney";
export * from "./form-google-protobuf-timestamp/FormGoogleProtobufTimestamp";
export * from "./form-google-type-date/FormGoogleTypeDate";
export * from "./form-google-type-money/FormGoogleTypeMoney";
export * from "./form-google-type-timeofday/FormGoogleTypeTimeofday";
