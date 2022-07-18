name: ConfirmationMessage
type: ConfirmationMessage
description: ""
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
    id:
        type: string
        description: Id of the confirmation message
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.confirmationmessage.id.placeholder
            hint: ""
            label: furo.confirmationmessage.id.label
            options:
                flags: []
                list: []
            readonly: false
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
            placeholder: furo.confirmationmessage.readableid.placeholder
            hint: ""
            label: furo.confirmationmessage.readableid.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    fields:
        type: google.rpc.BadRequest.FieldViolation
        description: Describes all warnings related to an attribute
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: furo.confirmationmessage.fields.placeholder
            hint: ""
            label: furo.confirmationmessage.fields.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: true
            typespecific: null
        constraints: {}
    message:
        type: google.rpc.LocalizedMessage
        description: A general localized warning message.
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: furo.confirmationmessage.message.placeholder
            hint: ""
            label: furo.confirmationmessage.message.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    user_response:
        type: google.protobuf.Any
        description: Reason why the warning was not followed, can be a text, checkbox,... is displayed as typerenderer
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.confirmationmessage.reason.placeholder
            hint: ""
            label: furo.confirmationmessage.reason.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
