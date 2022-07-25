name: Field
type: Field
description: A single field of a message type.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: type.proto
    imports:
        - google/protobuf/Field/ENUM_type.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: TypeProto
        java_package: google.protobuf
fields:
    kind:
        type: google.protobuf.Field.Kind
        description: The field type.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.kind.placeholder
            hint: ""
            label: google.protobuf.field.kind.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    cardinality:
        type: google.protobuf.Field.Cardinality
        description: The field cardinality.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.cardinality.placeholder
            hint: ""
            label: google.protobuf.field.cardinality.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    number:
        type: int32
        description: The field number.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.number.placeholder
            hint: ""
            label: google.protobuf.field.number.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    name:
        type: string
        description: The field name.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.name.placeholder
            hint: ""
            label: google.protobuf.field.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    type_url:
        type: string
        description: |-
            The field type URL, without the scheme, for message or enumeration
             types. Example: `"type.googleapis.com/google.protobuf.Timestamp"`.
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.typeurl.placeholder
            hint: ""
            label: google.protobuf.field.typeurl.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    oneof_index:
        type: int32
        description: |-
            The index of the field type in `Type.oneofs`, for message or enumeration
             types. The first type has index 1; zero means the type is not in the list.
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.oneofindex.placeholder
            hint: ""
            label: google.protobuf.field.oneofindex.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    packed:
        type: bool
        description: Whether to use alternative packed wire representation.
        __proto:
            number: 8
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.packed.placeholder
            hint: ""
            label: google.protobuf.field.packed.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    options:
        type: google.protobuf.Option
        description: The protocol buffer options.
        __proto:
            number: 9
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.options.placeholder
            hint: ""
            label: google.protobuf.field.options.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    json_name:
        type: string
        description: The field JSON name.
        __proto:
            number: 10
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.jsonname.placeholder
            hint: ""
            label: google.protobuf.field.jsonname.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    default_value:
        type: string
        description: The string value of the default value of this field. Proto2 syntax only.
        __proto:
            number: 11
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.field.defaultvalue.placeholder
            hint: ""
            label: google.protobuf.field.defaultvalue.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
