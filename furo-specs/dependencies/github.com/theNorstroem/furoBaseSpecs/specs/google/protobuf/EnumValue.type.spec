name: EnumValue
type: EnumValue
description: Enum value definition.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: type.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: TypeProto
        java_package: google.protobuf
fields:
    name:
        type: string
        description: Enum value name.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enumvalue.name.placeholder
            hint: ""
            label: google.protobuf.enumvalue.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    number:
        type: int32
        description: Enum value number.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enumvalue.number.placeholder
            hint: ""
            label: google.protobuf.enumvalue.number.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    options:
        type: google.protobuf.Option
        description: Protocol buffer options.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enumvalue.options.placeholder
            hint: ""
            label: google.protobuf.enumvalue.options.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
