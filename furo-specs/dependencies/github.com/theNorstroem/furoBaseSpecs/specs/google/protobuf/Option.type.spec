name: Option
type: Option
description: |-
    A protocol buffer option, which can be attached to a message, field,
     enumeration, etc.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: type.proto
    imports:
        - google/protobuf/any.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: TypeProto
        java_package: google.protobuf
fields:
    name:
        type: string
        description: |-
            The option's name. For protobuf built-in options (options defined in
             descriptor.proto), this is the short name. For example, `"map_entry"`.
             For custom options, it should be the fully-qualified name. For example,
             `"google.api.http"`.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.option.name.placeholder
            hint: ""
            label: google.protobuf.option.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    value:
        type: google.protobuf.Any
        description: |-
            The option's value packed in an Any message. If the value is a primitive,
             the corresponding wrapper type defined in google/protobuf/wrappers.proto
             should be used. If the value is an enum, it should be stored as an int32
             value using the google.protobuf.Int32Value type.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.option.value.placeholder
            hint: ""
            label: google.protobuf.option.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
