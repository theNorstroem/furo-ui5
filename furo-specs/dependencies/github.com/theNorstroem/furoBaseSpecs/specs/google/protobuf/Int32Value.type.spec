name: Int32Value
type: Int32Value
description: |-
    Wrapper message for `int32`.

     The JSON representation for `Int32Value` is JSON number.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: wrappers.proto
    imports: []
    options:
        csharp_namespace: Google.Protobuf.WellKnownTypes
        go_package: google.golang.org/protobuf/types/known/wrapperspb
        java_multiple_files: "true"
        java_outer_classname: WrappersProto
        java_package: com.google.protobuf
        objc_class_prefix: GPB
fields:
    value:
        type: int32
        description: The int32 value.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.Int32Value.value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
