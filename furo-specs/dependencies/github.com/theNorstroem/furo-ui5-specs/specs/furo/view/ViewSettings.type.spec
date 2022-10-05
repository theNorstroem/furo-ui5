name: ViewSettings
type: ViewSettings
description: ""
lifecycle: null
__proto:
    package: furo.view
    targetfile: view.proto
    imports:
        - google/protobuf/any.proto
    options:
        go_package: github.com/theNorstroem/furo-ui5-specs/dist/pb/furo/view;viewpb
        java_multiple_files: "true"
        java_outer_classname: ViewProto
        java_package: pro.furo.ui5.furo.view
fields:
    id:
        type: string
        description: id
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.id.placeholder
            hint: ""
            label: furo.view.viewsettings.id.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    name:
        type: string
        description: Textual identifier
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.name.placeholder
            hint: ""
            label: furo.view.viewsettings.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    is_favorite:
        type: bool
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.isfavorite.placeholder
            hint: ""
            label: furo.view.viewsettings.isfavorite.label
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
            placeholder: furo.view.viewsettings.isstandard.placeholder
            hint: ""
            label: furo.view.viewsettings.isstandard.label
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
            placeholder: furo.view.viewsettings.autoapply.placeholder
            hint: ""
            label: furo.view.viewsettings.autoapply.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    created_by:
        type: string
        description: no description
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.createdby.placeholder
            hint: ""
            label: furo.view.viewsettings.createdby.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    editable:
        type: bool
        description: no description
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.editable.placeholder
            hint: ""
            label: furo.view.viewsettings.editable.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    filter_settings:
        type: furo.view.FilterItem
        description: no description
        __proto:
            number: 8
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.filtersettings.placeholder
            hint: ""
            label: furo.view.viewsettings.filtersettings.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    filter_object:
        type: google.protobuf.Any
        description: Contains the filter Object
        __proto:
            number: 9
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.filterobject.placeholder
            hint: ""
            label: furo.view.viewsettings.filterobject.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    table_settings:
        type: furo.view.TableColumn
        description: no description
        __proto:
            number: 10
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.tablesettings.placeholder
            hint: ""
            label: furo.view.viewsettings.tablesettings.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    order_by:
        type: string
        description: sort order, comma separated list of field names
        __proto:
            number: 11
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.orderby.placeholder
            hint: ""
            label: furo.view.viewsettings.orderby.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    group_by:
        type: string
        description: group by
        __proto:
            number: 11
        __ui: null
        meta:
            default: ""
            placeholder: furo.view.viewsettings.groupby.placeholder
            hint: ""
            label: furo.view.viewsettings.groupby.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
