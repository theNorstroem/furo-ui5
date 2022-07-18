name: InformationMessage
type: InformationMessage
description: ""
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports:
        - google/rpc/error_details.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: furo
fields:
    id:
        type: string
        description: Id of the information, extension of google.rpc.LocalizedMessage
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.informationmessage.id.placeholder
            hint: ""
            label: furo.informationmessage.id.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    readable_id:
        type: string
        description: A readable version of the id.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.informationmessage.readableid.placeholder
            hint: ""
            label: furo.informationmessage.readableid.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    fields:
        type: google.rpc.BadRequest.FieldViolation
        description: Describes all information items related to an attribute
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.informationmessage.fields.placeholder
            hint: ""
            label: furo.informationmessage.fields.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: true
            typespecific: null
        constraints: {}
    message:
        type: google.rpc.LocalizedMessage
        description: A general localized information message.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: furo.informationmessage.message.placeholder
            hint: ""
            label: furo.informationmessage.message.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
