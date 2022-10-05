name: ListValue
type: ListValue
description: |-
    `ListValue` is a wrapper around a repeated field of values.

     The JSON representation for `ListValue` is JSON array.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: struct.proto
    imports: []
    options:
        csharp_namespace: Google.Protobuf.WellKnownTypes
        go_package: google.golang.org/protobuf/types/known/structpb
        java_multiple_files: "true"
        java_outer_classname: StructProto
        java_package: com.google.protobuf
        objc_class_prefix: GPB
fields:
    values:
        type: google.protobuf.Value
        description: Repeated field of dynamically typed values.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.ListValue.values
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
