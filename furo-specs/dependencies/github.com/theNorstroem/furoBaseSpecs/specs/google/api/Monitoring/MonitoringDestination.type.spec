name: MonitoringDestination
type: MonitoringDestination
description: ""
lifecycle: null
__proto:
    package: google.api.Monitoring
    targetfile: monitoring.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Monitoring;Monitoringpb
        java_multiple_files: "true"
        java_outer_classname: MonitoringProto
        java_package: google.api.Monitoring
fields:
    monitored_resource:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.monitoring.monitoringdestination.monitoredresource.placeholder
            hint: ""
            label: google.api.monitoring.monitoringdestination.monitoredresource.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    metrics:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.monitoring.monitoringdestination.metrics.placeholder
            hint: ""
            label: google.api.monitoring.monitoringdestination.metrics.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
