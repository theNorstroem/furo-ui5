name: GetMessagecontainer
type: GetMessagecontainer
description: request message for GetMessagecontainer
lifecycle: null
__proto:
    package: messagecontainer
    targetfile: reqmsgs.proto
    imports:
        - google/protobuf/empty.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/messagecontainer;messagecontainerpb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.messagecontainer
fields:
    body:
        type: .google.protobuf.Empty
        description: Body with google.protobuf.Empty
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.getmessagecontainer.body.placeholder
            hint: ""
            label: messagecontainer.getmessagecontainer.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
