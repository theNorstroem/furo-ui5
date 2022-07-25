name: MessagecontainerService
version: ""
description: service specs for the messagecontainer api
lifecycle: null
__proto:
    package: messagecontainer
    targetfile: mcservice.proto
    imports:
        - google/api/annotations.proto
        - messagecontainer/reqmsgs.proto
        - google/protobuf/empty.proto
        - messagecontainer/mc.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/messagecontainer;messagecontainerpb
        java_multiple_files: "true"
        java_outer_classname: McserviceProto
        java_package: com.example.tutorial.messagecontainer
services:
    Get:
        description: The Get method takes zero or more parameters, and returns a MessagecontainerEntity which contains a Messagecontainer
        data:
            request: google.protobuf.Empty
            response: messagecontainer.TestObject
            bodyfield: body
        deeplink:
            description: 'Get: GET /mockdata/messagecontainers/{mc}/get.json google.protobuf.Empty , messagecontainer.TestObject #The Get method takes zero or more parameters, and returns a MessagecontainerEntity which contains a Messagecontainer'
            href: /mockdata/messagecontainers/{mc}/get.json
            method: GET
            rel: self
        query: {}
        rpc_name: GetMessagecontainer
    Update:
        description: Updates a Messagecontainer, partial updates are supported
        data:
            request: messagecontainer.TestObject
            response: messagecontainer.TestObject
            bodyfield: body
        deeplink:
            description: 'Update: PATCH /mockdata/messagecontainers/{mc}/update.json messagecontainer.TestObject , messagecontainer.TestObject #Updates a Messagecontainer, partial updates are supported'
            href: /mockdata/messagecontainers/{mc}/update.json
            method: PATCH
            rel: update
        query: {}
        rpc_name: UpdateMessagecontainer
