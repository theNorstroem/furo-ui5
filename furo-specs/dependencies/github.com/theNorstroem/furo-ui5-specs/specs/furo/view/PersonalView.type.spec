name: PersonalView
type: PersonalView
description: ""
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
    id:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.personalview.id.placeholder
            hint: ""
            label: furo.view.personalview.id.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    views:
        type: furo.view.ViewSettings
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.personalview.views.placeholder
            hint: ""
            label: furo.view.personalview.views.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
