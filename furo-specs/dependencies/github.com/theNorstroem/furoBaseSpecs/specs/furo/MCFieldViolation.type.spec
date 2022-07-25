name: MCFieldViolation
type: MCFieldViolation
description: Field violation with user response
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports:
        - google/protobuf/any.proto
        - google/rpc/error_details.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: furo
fields:
    field:
        type: string
        description: |-
            A path leading to a field in the request body. The value will be a
            sequence of dot-separated identifiers that identify a protocol buffer
            field. E.g., "field_violations.field" would identify this field.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.mcfieldviolation.field.placeholder
            hint: ""
            label: furo.mcfieldviolation.field.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: A localized description of why the request element is bad.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.mcfieldviolation.description.placeholder
            hint: ""
            label: furo.mcfieldviolation.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    user_response:
        type: google.protobuf.Any
        description: Optional user confirmation response, can be a text, checkbox,... is displayed as typerenderer
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    message:
        type: google.rpc.LocalizedMessage
        description: Extended message for the violation.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: furo.mcfieldviolation.message.placeholder
            hint: ""
            label: furo.mcfieldviolation.message.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
