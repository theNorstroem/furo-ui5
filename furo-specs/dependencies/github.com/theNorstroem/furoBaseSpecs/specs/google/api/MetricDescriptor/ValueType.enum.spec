type: ValueType
description: |-
    Defines a metric type and its schema. Once a metric descriptor is created,
     deleting or altering it stops data collection and makes the metric type's
     existing data unusable.
lifecycle: null
__proto:
    package: google.api.MetricDescriptor
    targetfile: ENUM_metric.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/MetricDescriptor;MetricDescriptorpb
        java_multiple_files: "true"
        java_outer_classname: Enum.MetricProto
        java_package: google.api.MetricDescriptor
    allow_alias: false
values:
    VALUE_TYPE_UNSPECIFIED: 0
    BOOL: 1
    INT64: 2
    DOUBLE: 3
    STRING: 4
    DISTRIBUTION: 5
    MONEY: 6
