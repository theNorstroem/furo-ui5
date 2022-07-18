name: FieldViolation
type: FieldViolation
description: ""
lifecycle: null
__proto:
    package: google.rpc.BadRequest
    targetfile: error_details.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/rpc/BadRequest;BadRequestpb
        java_multiple_files: "true"
        java_outer_classname: Error_detailsProto
        java_package: google.rpc.BadRequest
fields:
    field:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.rpc.badrequest.fieldviolation.field.placeholder
            hint: ""
            label: google.rpc.badrequest.fieldviolation.field.label
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
            placeholder: google.rpc.badrequest.fieldviolation.description.placeholder
            hint: ""
            label: google.rpc.badrequest.fieldviolation.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
