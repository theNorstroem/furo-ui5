name: ConfirmationMessage
type: ConfirmationMessage
description: Put required responses which are not associated to a field in this type.
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports:
        - google/protobuf/any.proto
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
            readonly: true
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: furo.confirmationmessage.id.constraint.required.message
    user_response:
        type: google.protobuf.Any
        description: Reason why the warning was not followed, can be a text, checkbox,... is displayed as typerenderer
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.confirmationmessage.userresponse.placeholder
            hint: ""
            label: furo.confirmationmessage.userresponse.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: A localized description of the confirmation.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.confirmationmessage.description.placeholder
            hint: ""
            label: furo.confirmationmessage.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    message:
        type: string
        description: A general localized message.
        __proto:
            number: 4
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
