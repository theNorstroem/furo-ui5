name: BoolValue
type: BoolValue
description: |-
    Wrapper message for `bool`.

     The JSON representation for `BoolValue` is JSON `true` and `false`.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: wrappers.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        csharp_namespace: Google.Protobuf.WellKnownTypes
        go_package: google.golang.org/protobuf/types/known/wrapperspb
        java_multiple_files: "true"
        java_outer_classname: WrappersProto
        java_package: com.google.protobuf
        objc_class_prefix: GPB
fields:
    value:
        type: bool
        description: The bool value.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.BoolValue.value
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
