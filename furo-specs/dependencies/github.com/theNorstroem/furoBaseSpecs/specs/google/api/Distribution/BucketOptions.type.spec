name: BucketOptions
type: BucketOptions
description: ""
lifecycle: null
__proto:
    package: google.api.Distribution
    targetfile: distribution.proto
    imports:
        - google/api/Distribution/BucketOptions/distribution.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Distribution;Distributionpb
        java_multiple_files: "true"
        java_outer_classname: DistributionProto
        java_package: google.api.Distribution
fields:
    linear_buckets:
        type: google.api.Distribution.BucketOptions.Linear
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.bucketoptions.linearbuckets.placeholder
            hint: ""
            label: google.api.distribution.bucketoptions.linearbuckets.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    exponential_buckets:
        type: google.api.Distribution.BucketOptions.Exponential
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.bucketoptions.exponentialbuckets.placeholder
            hint: ""
            label: google.api.distribution.bucketoptions.exponentialbuckets.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    explicit_buckets:
        type: google.api.Distribution.BucketOptions.Explicit
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.bucketoptions.explicitbuckets.placeholder
            hint: ""
            label: google.api.distribution.bucketoptions.explicitbuckets.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
