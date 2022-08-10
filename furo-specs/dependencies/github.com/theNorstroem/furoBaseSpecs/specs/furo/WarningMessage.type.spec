name: WarningMessage
type: WarningMessage
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
        description: Id of the warning message
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.warningmessage.id.placeholder
            hint: ""
            label: furo.warningmessage.id.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
    fields:
        type: furo.MCFieldViolation
        description: Describes all warnings related to an attribute
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.warningmessage.fields.placeholder
            hint: ""
            label: furo.warningmessage.fields.label
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
            placeholder: furo.warningmessage.message.placeholder
            hint: ""
            label: furo.warningmessage.message.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints: {}
