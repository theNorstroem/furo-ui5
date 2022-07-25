name: LabelsEntry
type: LabelsEntry
description: ""
lifecycle: null
__proto:
    package: google.api.MonitoredResource
    targetfile: monitored_resource.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/MonitoredResource;MonitoredResourcepb
        java_multiple_files: "true"
        java_outer_classname: Monitored_resourceProto
        java_package: google.api.MonitoredResource
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.monitoredresource.labelsentry.key.placeholder
            hint: ""
            label: google.api.monitoredresource.labelsentry.key.label
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
            placeholder: google.api.monitoredresource.labelsentry.value.placeholder
            hint: ""
            label: google.api.monitoredresource.labelsentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
