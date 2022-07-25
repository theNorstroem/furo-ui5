name: Range
type: Range
description: ""
lifecycle: null
__proto:
    package: google.api.Distribution
    targetfile: distribution.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Distribution;Distributionpb
        java_multiple_files: "true"
        java_outer_classname: DistributionProto
        java_package: google.api.Distribution
fields:
    min:
        type: double
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.range.min.placeholder
            hint: ""
            label: google.api.distribution.range.min.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    max:
        type: double
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.range.max.placeholder
            hint: ""
            label: google.api.distribution.range.max.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
