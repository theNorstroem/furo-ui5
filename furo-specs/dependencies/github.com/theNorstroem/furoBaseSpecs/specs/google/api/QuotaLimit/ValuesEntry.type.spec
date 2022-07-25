name: ValuesEntry
type: ValuesEntry
description: ""
lifecycle: null
__proto:
    package: google.api.QuotaLimit
    targetfile: quota.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/QuotaLimit;QuotaLimitpb
        java_multiple_files: "true"
        java_outer_classname: QuotaProto
        java_package: google.api.QuotaLimit
fields:
    key:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.quotalimit.valuesentry.key.placeholder
            hint: ""
            label: google.api.quotalimit.valuesentry.key.label
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
            placeholder: google.api.quotalimit.valuesentry.value.placeholder
            hint: ""
            label: google.api.quotalimit.valuesentry.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
