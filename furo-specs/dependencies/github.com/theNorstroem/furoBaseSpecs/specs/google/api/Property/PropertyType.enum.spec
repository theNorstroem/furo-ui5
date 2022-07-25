type: PropertyType
description: |-
    Defines project properties.

     API services can define properties that can be assigned to consumer projects
     so that backends can perform response customization without having to make
     additional calls or maintain additional storage. For example, Maps API
     defines properties that controls map tile cache period, or whether to embed a
     watermark in a result.

     These values can be set via API producer console. Only API providers can
     define and set these properties.
lifecycle: null
__proto:
    package: google.api.Property
    targetfile: ENUM_consumer.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Property;Propertypb
        java_multiple_files: "true"
        java_outer_classname: Enum.ConsumerProto
        java_package: google.api.Property
    allow_alias: false
values:
    UNSPECIFIED: 0
    INT64: 1
    BOOL: 2
    STRING: 3
    DOUBLE: 4
