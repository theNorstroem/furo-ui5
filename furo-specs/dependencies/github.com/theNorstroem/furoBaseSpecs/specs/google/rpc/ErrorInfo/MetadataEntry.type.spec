name: MetadataEntry
type: MetadataEntry
description: ""
lifecycle: null
__proto:
    package: google.rpc.ErrorInfo
    targetfile: error_details.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/rpc/ErrorInfo;ErrorInfopb
        java_multiple_files: "true"
        java_outer_classname: Error_detailsProto
        java_package: google.rpc.ErrorInfo
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.errorinfo.metadataentry.key.placeholder
            hint: ""
            label: google.rpc.errorinfo.metadataentry.key.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    value:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.errorinfo.metadataentry.value.placeholder
            hint: ""
            label: google.rpc.errorinfo.metadataentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
