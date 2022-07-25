name: Type
type: Type
description: A protocol buffer message type.
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
        description: The fully qualified message name.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.type.name.placeholder
            hint: ""
            label: google.protobuf.type.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fields:
        type: google.protobuf.Field
        description: The list of fields.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.type.fields.placeholder
            hint: ""
            label: google.protobuf.type.fields.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    oneofs:
        type: string
        description: The list of types appearing in `oneof` definitions in this type.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.type.oneofs.placeholder
            hint: ""
            label: google.protobuf.type.oneofs.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    options:
        type: google.protobuf.Option
        description: The protocol buffer options.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.type.options.placeholder
            hint: ""
            label: google.protobuf.type.options.label
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
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.type.sourcecontext.placeholder
            hint: ""
            label: google.protobuf.type.sourcecontext.label
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
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.type.syntax.placeholder
            hint: ""
            label: google.protobuf.type.syntax.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
