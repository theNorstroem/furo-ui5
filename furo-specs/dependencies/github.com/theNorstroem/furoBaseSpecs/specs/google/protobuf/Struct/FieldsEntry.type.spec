name: FieldsEntry
type: FieldsEntry
description: ""
lifecycle: null
__proto:
    package: google.protobuf.Struct
    targetfile: struct.proto
    imports:
        - google/protobuf/struct.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf/Struct;Structpb
        java_multiple_files: "true"
        java_outer_classname: StructProto
        java_package: google.protobuf.Struct
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.struct.fieldsentry.key.placeholder
            hint: ""
            label: google.protobuf.struct.fieldsentry.key.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    value:
        type: google.protobuf.Value
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.struct.fieldsentry.value.placeholder
            hint: ""
            label: google.protobuf.struct.fieldsentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
