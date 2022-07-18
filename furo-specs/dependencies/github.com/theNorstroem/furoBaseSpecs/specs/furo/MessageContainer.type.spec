name: MessageContainer
type: MessageContainer
description: The `MessageContainer` type defines a logical message model.
lifecycle: null
__proto:
    package: furo
    targetfile: furo.proto
    imports:
        - google/protobuf/any.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/furo;furopb
        java_multiple_files: "true"
        java_outer_classname: FuroProto
        java_package: furo
fields:
    details:
        type: google.protobuf.Any
        description: A list of messages that carry the message details. There is a common set of message types for APIs to use.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: furo.messagecontainer.details.placeholder
            hint: ""
            label: furo.messagecontainer.details.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    success:
        type: bool
        description: Use this field to notify a success. Even when a action was successful, it can have information and warning states.
        __proto:
            number: 15
        __ui: null
        meta:
            default: ""
            placeholder: furo.messagecontainer.success.placeholder
            hint: ""
            label: furo.messagecontainer.success.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
