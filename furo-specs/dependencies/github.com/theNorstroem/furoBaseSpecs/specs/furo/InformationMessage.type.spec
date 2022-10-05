name: InformationMessage
type: InformationMessage
description: ""
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports: []
    options:
        csharp_namespace: Furo
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: pro.furo
        objc_class_prefix: FPB
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
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fields:
        type: furo.MCFieldViolation
        description: Describes all information items related to an attribute
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.informationmessage.fields.placeholder
            hint: ""
            label: furo.informationmessage.fields.label
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
            placeholder: furo.informationmessage.message.placeholder
            hint: ""
            label: furo.informationmessage.message.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
