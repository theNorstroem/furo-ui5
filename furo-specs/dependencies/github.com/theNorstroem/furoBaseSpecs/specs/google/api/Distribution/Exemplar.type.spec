name: Exemplar
type: Exemplar
description: ""
lifecycle: null
__proto:
    package: google.api.Distribution
    targetfile: distribution.proto
    imports:
        - google/protobuf/any.proto
        - google/protobuf/timestamp.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Distribution;Distributionpb
        java_multiple_files: "true"
        java_outer_classname: DistributionProto
        java_package: google.api.Distribution
fields:
    value:
        type: double
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.exemplar.value.placeholder
            hint: ""
            label: google.api.distribution.exemplar.value.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    timestamp:
        type: google.protobuf.Timestamp
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.exemplar.timestamp.placeholder
            hint: ""
            label: google.api.distribution.exemplar.timestamp.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    attachments:
        type: google.protobuf.Any
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.api.distribution.exemplar.attachments.placeholder
            hint: ""
            label: google.api.distribution.exemplar.attachments.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
