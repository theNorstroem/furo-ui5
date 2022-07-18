name: UserLabelsEntry
type: UserLabelsEntry
description: ""
lifecycle: null
__proto:
    package: google.api.MonitoredResourceMetadata
    targetfile: monitored_resource.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/MonitoredResourceMetadata;MonitoredResourceMetadatapb
        java_multiple_files: "true"
        java_outer_classname: Monitored_resourceProto
        java_package: google.api.MonitoredResourceMetadata
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.monitoredresourcemetadata.userlabelsentry.key.placeholder
            hint: ""
            label: google.api.monitoredresourcemetadata.userlabelsentry.key.label
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
            placeholder: google.api.monitoredresourcemetadata.userlabelsentry.value.placeholder
            hint: ""
            label: google.api.monitoredresourcemetadata.userlabelsentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
