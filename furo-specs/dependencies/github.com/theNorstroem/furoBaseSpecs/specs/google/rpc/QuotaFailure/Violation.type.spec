name: Violation
type: Violation
description: ""
lifecycle: null
__proto:
    package: google.rpc.QuotaFailure
    targetfile: error_details.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/rpc/QuotaFailure;QuotaFailurepb
        java_multiple_files: "true"
        java_outer_classname: Error_detailsProto
        java_package: google.rpc.QuotaFailure
fields:
    subject:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.quotafailure.violation.subject.placeholder
            hint: ""
            label: google.rpc.quotafailure.violation.subject.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.quotafailure.violation.description.placeholder
            hint: ""
            label: google.rpc.quotafailure.violation.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
