name: UpdateMessagecontainer
type: UpdateMessagecontainer
description: request message for UpdateMessagecontainer
lifecycle: null
__proto:
    package: messagecontainer
    targetfile: reqmsgs.proto
    imports:
        - messagecontainer/mc.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/messagecontainer;messagecontainerpb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.messagecontainer
fields:
    body:
        type: .messagecontainer.TestObject
        description: Body with messagecontainer.TestObject
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.updatemessagecontainer.body.placeholder
            hint: ""
            label: messagecontainer.updatemessagecontainer.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
