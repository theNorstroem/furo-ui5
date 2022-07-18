name: LabelsEntry
type: LabelsEntry
description: ""
lifecycle: null
__proto:
    package: google.api.Metric
    targetfile: metric.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Metric;Metricpb
        java_multiple_files: "true"
        java_outer_classname: MetricProto
        java_package: google.api.Metric
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.metric.labelsentry.key.placeholder
            hint: ""
            label: google.api.metric.labelsentry.key.label
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
            placeholder: google.api.metric.labelsentry.value.placeholder
            hint: ""
            label: google.api.metric.labelsentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
