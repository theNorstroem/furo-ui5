name: Linear
type: Linear
description: ""
lifecycle: null
__proto:
    package: google.api.Distribution.BucketOptions
    targetfile: distribution.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Distribution/BucketOptions;BucketOptionspb
        java_multiple_files: "true"
        java_outer_classname: DistributionProto
        java_package: google.api.Distribution.BucketOptions
fields:
    num_finite_buckets:
        type: int32
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.bucketoptions.linear.numfinitebuckets.placeholder
            hint: ""
            label: google.api.distribution.bucketoptions.linear.numfinitebuckets.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    width:
        type: double
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.bucketoptions.linear.width.placeholder
            hint: ""
            label: google.api.distribution.bucketoptions.linear.width.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    offset:
        type: double
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.bucketoptions.linear.offset.placeholder
            hint: ""
            label: google.api.distribution.bucketoptions.linear.offset.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
