name: MessageContainerGrouplabel
type: MessageContainerGrouplabel
description: MessageContainerGrouplabel Helps you to structure the errors and warnings for the UI.
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
    title:
        type: string
        description: Title of the group, should be a localized string.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.messagecontainergrouplabel.title.placeholder
            hint: ""
            label: furo.messagecontainergrouplabel.title.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    id:
        type: string
        description: Id
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.messagecontainergrouplabel.id.placeholder
            hint: ""
            label: furo.messagecontainergrouplabel.id.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: furo.messagecontainergrouplabel.id.constraint.required.message
