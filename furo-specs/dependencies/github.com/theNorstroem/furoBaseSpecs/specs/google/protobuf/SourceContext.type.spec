name: SourceContext
type: SourceContext
description: |-
    `SourceContext` represents information about the source of a
     protobuf element, like the file in which it is defined.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: source_context.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: Source_contextProto
        java_package: google.protobuf
fields:
    file_name:
        type: string
        description: |-
            The path-qualified name of the .proto file that contained the associated
             protobuf element.  For example: `"google/protobuf/source_context.proto"`.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.sourcecontext.filename.placeholder
            hint: ""
            label: google.protobuf.sourcecontext.filename.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
