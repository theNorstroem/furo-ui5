name: Enum
type: Enum
description: Enum type definition.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: type.proto
    imports:
        - google/protobuf/ENUM_type.proto
        - google/protobuf/source_context.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: TypeProto
        java_package: google.protobuf
fields:
    name:
        type: string
        description: Enum type name.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enum.name.placeholder
            hint: ""
            label: google.protobuf.enum.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    enumvalue:
        type: google.protobuf.EnumValue
        description: Enum value definitions.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enum.enumvalue.placeholder
            hint: ""
            label: google.protobuf.enum.enumvalue.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
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
            placeholder: google.protobuf.enum.options.placeholder
            hint: ""
            label: google.protobuf.enum.options.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    source_context:
        type: google.protobuf.SourceContext
        description: The source context.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enum.sourcecontext.placeholder
            hint: ""
            label: google.protobuf.enum.sourcecontext.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    syntax:
        type: google.protobuf.Syntax
        description: The source syntax.
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.enum.syntax.placeholder
            hint: ""
            label: google.protobuf.enum.syntax.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
