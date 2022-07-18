name: LabelDescriptor
type: LabelDescriptor
description: A description of a label.
lifecycle: null
__proto:
    package: google.api
    targetfile: label.proto
    imports: []
    options:
        cc_enable_arenas: "true"
        go_package: google.golang.org/genproto/googleapis/api/label;label
        java_multiple_files: "true"
        java_outer_classname: LabelProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    key:
        type: string
        description: The label key.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.LabelDescriptor.key
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    value_type:
        type: unknown
        description: The type of data that can be assigned to the label.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.LabelDescriptor.value_type
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: A human-readable description for the label.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.LabelDescriptor.description
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
