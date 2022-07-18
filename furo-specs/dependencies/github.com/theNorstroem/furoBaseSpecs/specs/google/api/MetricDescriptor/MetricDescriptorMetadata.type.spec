name: MetricDescriptorMetadata
type: MetricDescriptorMetadata
description: ""
lifecycle: null
__proto:
    package: google.api.MetricDescriptor
    targetfile: metric.proto
    imports:
        - google/api/ENUM_launch_stage.proto
        - google/protobuf/duration.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/MetricDescriptor;MetricDescriptorpb
        java_multiple_files: "true"
        java_outer_classname: MetricProto
        java_package: google.api.MetricDescriptor
fields:
    launch_stage:
        type: google.api.LaunchStage
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.metricdescriptor.metricdescriptormetadata.launchstage.placeholder
            hint: ""
            label: google.api.metricdescriptor.metricdescriptormetadata.launchstage.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    sample_period:
        type: google.protobuf.Duration
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.metricdescriptor.metricdescriptormetadata.sampleperiod.placeholder
            hint: ""
            label: google.api.metricdescriptor.metricdescriptormetadata.sampleperiod.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    ingest_delay:
        type: google.protobuf.Duration
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.api.metricdescriptor.metricdescriptormetadata.ingestdelay.placeholder
            hint: ""
            label: google.api.metricdescriptor.metricdescriptormetadata.ingestdelay.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
