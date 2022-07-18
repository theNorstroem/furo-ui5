name: Link
type: Link
description: ""
lifecycle: null
__proto:
    package: google.rpc.Help
    targetfile: error_details.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/rpc/Help;Helppb
        java_multiple_files: "true"
        java_outer_classname: Error_detailsProto
        java_package: google.rpc.Help
fields:
    description:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.help.link.description.placeholder
            hint: ""
            label: google.rpc.help.link.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    url:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.help.link.url.placeholder
            hint: ""
            label: google.rpc.help.link.url.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
