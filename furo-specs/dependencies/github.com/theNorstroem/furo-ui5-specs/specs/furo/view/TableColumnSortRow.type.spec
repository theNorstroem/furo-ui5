name: TableColumnSortRow
type: TableColumnSortRow
description: TableColumn
lifecycle: null
__proto:
    package: furo.view
    targetfile: view.proto
    imports:
        - furo/furo.proto
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
            placeholder: furo.view.tablecolumnsortrow.id.placeholder
            hint: ""
            label: furo.view.tablecolumnsortrow.id.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    display_name:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.tablecolumnsortrow.displayname.placeholder
            hint: ""
            label: furo.view.tablecolumnsortrow.displayname.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    descending:
        type: bool
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.tablecolumnsortrow.descending.placeholder
            hint: ""
            label: furo.view.tablecolumnsortrow.descending.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    options:
        type: furo.Optionitem
        description: no description
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.tablecolumnsortrow.options.placeholder
            hint: ""
            label: furo.view.tablecolumnsortrow.options.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
