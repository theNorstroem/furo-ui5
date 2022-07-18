name: Violation
type: Violation
description: ""
lifecycle: null
__proto:
    package: google.rpc.PreconditionFailure
    targetfile: error_details.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/rpc/PreconditionFailure;PreconditionFailurepb
        java_multiple_files: "true"
        java_outer_classname: Error_detailsProto
        java_package: google.rpc.PreconditionFailure
fields:
    type:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.preconditionfailure.violation.type.placeholder
            hint: ""
            label: google.rpc.preconditionfailure.violation.type.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    subject:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.preconditionfailure.violation.subject.placeholder
            hint: ""
            label: google.rpc.preconditionfailure.violation.subject.label
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
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.preconditionfailure.violation.description.placeholder
            hint: ""
            label: google.rpc.preconditionfailure.violation.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
