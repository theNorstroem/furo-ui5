name: DebugInfo
type: DebugInfo
description: Describes additional debugging info.
lifecycle: null
__proto:
    package: google.rpc
    targetfile: error_details.proto
    imports: []
    options:
        go_package: google.golang.org/genproto/googleapis/rpc/errdetails;errdetails
        java_multiple_files: "true"
        java_outer_classname: ErrorDetailsProto
        java_package: com.google.rpc
        objc_class_prefix: RPC
fields:
    stack_entries:
        type: string
        description: The stack trace entries indicating where the error occurred.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.DebugInfo.stack_entries
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    detail:
        type: string
        description: Additional debugging information provided by the server.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: ""
            hint: ""
            label: label.DebugInfo.detail
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
