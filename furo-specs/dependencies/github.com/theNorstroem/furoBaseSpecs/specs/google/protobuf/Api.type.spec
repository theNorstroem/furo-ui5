name: Api
type: Api
description: |-
    Api is a light-weight descriptor for an API Interface.

     Interfaces are also described as "protocol buffer services" in some contexts,
     such as by the "service" keyword in a .proto file, but they are different
     from API Services, which represent a concrete implementation of an interface
     as opposed to simply a description of methods and bindings. They are also
     sometimes simply referred to as "APIs" in other contexts, such as the name of
     this message itself. See https://cloud.google.com/apis/design/glossary for
     detailed terminology.
lifecycle: null
__proto:
    package: google.protobuf
    targetfile: api.proto
    imports:
        - google/protobuf/ENUM_type.proto
        - google/protobuf/source_context.proto
        - google/protobuf/type.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/protobuf;protobufpb
        java_multiple_files: "true"
        java_outer_classname: ApiProto
        java_package: google.protobuf
fields:
    name:
        type: string
        description: |-
            The fully qualified name of this interface, including package name
             followed by the interface's simple name.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.name.placeholder
            hint: ""
            label: google.protobuf.api.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    methods:
        type: google.protobuf.Method
        description: The methods of this interface, in unspecified order.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.methods.placeholder
            hint: ""
            label: google.protobuf.api.methods.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    options:
        type: google.protobuf.Option
        description: Any metadata attached to the interface.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.options.placeholder
            hint: ""
            label: google.protobuf.api.options.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    version:
        type: string
        description: |-
            A version string for this interface. If specified, must have the form
             `major-version.minor-version`, as in `1.10`. If the minor version is
             omitted, it defaults to zero. If the entire version field is empty, the
             major version is derived from the package name, as outlined below. If the
             field is not empty, the version in the package name will be verified to be
             consistent with what is provided here.

             The versioning schema uses [semantic
             versioning](http://semver.org) where the major version number
             indicates a breaking change and the minor version an additive,
             non-breaking change. Both version numbers are signals to users
             what to expect from different versions, and should be carefully
             chosen based on the product plan.

             The major version is also reflected in the package name of the
             interface, which must end in `v<major-version>`, as in
             `google.feature.v1`. For major versions 0 and 1, the suffix can
             be omitted. Zero major versions must only be used for
             experimental, non-GA interfaces.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.version.placeholder
            hint: ""
            label: google.protobuf.api.version.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    source_context:
        type: google.protobuf.SourceContext
        description: |-
            Source context for the protocol buffer service represented by this
             message.
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.sourcecontext.placeholder
            hint: ""
            label: google.protobuf.api.sourcecontext.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    mixins:
        type: google.protobuf.Mixin
        description: Included interfaces. See [Mixin][].
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.mixins.placeholder
            hint: ""
            label: google.protobuf.api.mixins.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    syntax:
        type: google.protobuf.Syntax
        description: The source syntax of the service.
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: google.protobuf.api.syntax.placeholder
            hint: ""
            label: google.protobuf.api.syntax.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
