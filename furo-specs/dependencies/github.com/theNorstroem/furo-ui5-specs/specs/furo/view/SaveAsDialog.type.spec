name: SaveAsDialog
type: SaveAsDialog
description: Filter object
lifecycle: null
__proto:
    package: furo.view
    targetfile: view.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/furo-ui5-specs/dist/pb/furo/view;viewpb
        java_multiple_files: "true"
        java_outer_classname: ViewProto
        java_package: pro.furo.ui5.furo.view
fields:
    name:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.saveasdialog.name.placeholder
            hint: ""
            label: furo.view.saveasdialog.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: furo.view.saveasdialog.name.constraint.required.message
    is_favorite:
        type: bool
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.saveasdialog.isfavorite.placeholder
            hint: ""
            label: furo.view.saveasdialog.isfavorite.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    is_standard:
        type: bool
        description: no description
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.saveasdialog.isstandard.placeholder
            hint: ""
            label: furo.view.saveasdialog.isstandard.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    auto_apply:
        type: bool
        description: no description
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.saveasdialog.autoapply.placeholder
            hint: ""
            label: furo.view.saveasdialog.autoapply.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
