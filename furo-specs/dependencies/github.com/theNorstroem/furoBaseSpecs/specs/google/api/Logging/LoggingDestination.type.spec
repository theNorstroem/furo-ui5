name: LoggingDestination
type: LoggingDestination
description: ""
lifecycle: null
__proto:
    package: google.api.Logging
    targetfile: logging.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Logging;Loggingpb
        java_multiple_files: "true"
        java_outer_classname: LoggingProto
        java_package: google.api.Logging
fields:
    monitored_resource:
        type: string
        description: no description
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.api.logging.loggingdestination.monitoredresource.placeholder
            hint: ""
            label: google.api.logging.loggingdestination.monitoredresource.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    logs:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.logging.loggingdestination.logs.placeholder
            hint: ""
            label: google.api.logging.loggingdestination.logs.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
