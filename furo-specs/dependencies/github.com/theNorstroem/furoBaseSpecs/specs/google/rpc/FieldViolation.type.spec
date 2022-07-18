name: FieldViolation
type: FieldViolation
description: |-
    Describes violations in a client request. This error type focuses on the
     syntactic aspects of the request.
lifecycle: null
__proto:
    package: google.rpc.BadRequest
    targetfile: error_details.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/rpc/errdetails;errdetails
        java_multiple_files: "true"
        java_outer_classname: ErrorDetailsProto
        java_package: com.google.rpc
        objc_class_prefix: RPC
fields:
    field:
        type: string
        description: |-
            A path leading to a field in the request body. The value will be a
            sequence of dot-separated identifiers that identify a protocol buffer
            field. E.g., "field_violations.field" would identify this field.
        __proto:
            number: 1
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: A description of why the request element is bad.
        __proto:
            number: 2
        __ui:
            component: ""
            flags: []
            noinit: false
            noskip: false
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: ""
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
