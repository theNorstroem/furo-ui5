name: Backend
type: Backend
description: '`Backend` defines the backend configuration for a service.'
lifecycle: null
__proto:
    package: google.api
    targetfile: backend.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig
        java_multiple_files: "true"
        java_outer_classname: BackendProto
        java_package: com.google.api
        objc_class_prefix: GAPI
fields:
    rules:
        type: google.api.BackendRule
        description: |-
            A list of API backend rules that apply to individual API methods.

             **NOTE:** All service configuration rules follow "last one wins" order.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.Backend.rules
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
