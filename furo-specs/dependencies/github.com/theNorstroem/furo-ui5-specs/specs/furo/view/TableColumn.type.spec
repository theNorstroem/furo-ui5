name: TableColumn
type: TableColumn
description: TableColumn
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
            placeholder: furo.view.tablecolumn.fieldname.placeholder
            hint: ""
            label: furo.view.tablecolumn.fieldname.label
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
            placeholder: furo.view.tablecolumn.show.placeholder
            hint: ""
            label: furo.view.tablecolumn.show.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    sortable:
        type: bool
        description: set this to true if the field is sortable
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.tablecolumn.sortable.placeholder
            hint: ""
            label: furo.view.tablecolumn.sortable.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    groupable:
        type: bool
        description: set this to true if the field is groupable
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.tablecolumn.groupable.placeholder
            hint: ""
            label: furo.view.tablecolumn.groupable.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    label:
        type: string
        description: set this to true if the field is groupable
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.tablecolumn.label.placeholder
            hint: ""
            label: furo.view.tablecolumn.label.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
