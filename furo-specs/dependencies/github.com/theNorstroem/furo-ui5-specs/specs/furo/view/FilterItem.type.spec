name: FilterItem
type: FilterItem
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
    field_name:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.filteritem.fieldname.placeholder
            hint: ""
            label: furo.view.filteritem.fieldname.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    show:
        type: bool
        description: show hide
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.filteritem.show.placeholder
            hint: ""
            label: furo.view.filteritem.show.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
