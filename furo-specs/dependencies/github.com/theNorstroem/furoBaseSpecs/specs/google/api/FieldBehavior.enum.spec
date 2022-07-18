type: FieldBehavior
description: |-
    An indicator of the behavior of a given field (for example, that a field
     is required in requests, or given as output but ignored as input).
     This **does not** change the behavior in protocol buffers itself; it only
     denotes the behavior and may affect how API tooling handles the field.

     Note: This enum **may** receive new values in the future.
lifecycle: null
__proto:
    package: google.api
    targetfile: ENUM_field_behavior.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api;apipb
        java_multiple_files: "true"
        java_outer_classname: Enum.Field_behaviorProto
        java_package: google.api
    allow_alias: false
values:
    FIELD_BEHAVIOR_UNSPECIFIED: 0
    OPTIONAL: 1
    REQUIRED: 2
    OUTPUT_ONLY: 3
    INPUT_ONLY: 4
    IMMUTABLE: 5
