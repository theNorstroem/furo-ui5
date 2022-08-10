name: ErrorMessage
type: ErrorMessage
description: ""
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: furo
fields:
    id:
        type: string
        description: Id of the error message
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.errormessage.id.placeholder
            hint: ""
            label: furo.errormessage.id.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: furo.errormessage.id.constraint.required.message
    fields:
        type: furo.MCFieldViolation
        description: Describes all errors related to an attribute
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.errormessage.fields.placeholder
            hint: ""
            label: furo.errormessage.fields.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    message:
        type: string
        description: A general localized message.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.errormessage.message.placeholder
            hint: ""
            label: furo.errormessage.message.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
