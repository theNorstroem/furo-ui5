name: Method
type: Method
description: Method represents a method of an API interface.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: api.proto
    imports:
        - google/protobuf/ENUM_type.proto
        - google/protobuf/type.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: ApiProto
        java_package: google.protobuf
fields:
    name:
        type: string
        description: The simple name of this method.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.name.placeholder
            hint: ""
            label: google.protobuf.method.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    request_type_url:
        type: string
        description: A URL of the input message type.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.requesttypeurl.placeholder
            hint: ""
            label: google.protobuf.method.requesttypeurl.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    request_streaming:
        type: bool
        description: If true, the request is streamed.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.requeststreaming.placeholder
            hint: ""
            label: google.protobuf.method.requeststreaming.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    response_type_url:
        type: string
        description: The URL of the output message type.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.responsetypeurl.placeholder
            hint: ""
            label: google.protobuf.method.responsetypeurl.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    response_streaming:
        type: bool
        description: If true, the response is streamed.
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.responsestreaming.placeholder
            hint: ""
            label: google.protobuf.method.responsestreaming.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    options:
        type: google.protobuf.Option
        description: Any metadata attached to the method.
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.options.placeholder
            hint: ""
            label: google.protobuf.method.options.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    syntax:
        type: google.protobuf.Syntax
        description: The source syntax of this method.
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.method.syntax.placeholder
            hint: ""
            label: google.protobuf.method.syntax.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
