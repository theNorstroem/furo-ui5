name: MetricCostsEntry
type: MetricCostsEntry
description: ""
lifecycle: null
__proto:
    package: google.api.MetricRule
    targetfile: quota.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/MetricRule;MetricRulepb
        java_multiple_files: "true"
        java_outer_classname: QuotaProto
        java_package: google.api.MetricRule
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.metricrule.metriccostsentry.key.placeholder
            hint: ""
            label: google.api.metricrule.metriccostsentry.key.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    value:
        type: int64
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.metricrule.metriccostsentry.value.placeholder
            hint: ""
            label: google.api.metricrule.metriccostsentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
