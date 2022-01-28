name: UpdateTree
type: UpdateTree
description: request message for UpdateTree
lifecycle: null
__proto:
    package: treeservice
    targetfile: reqmsgs.proto
    imports:
        - tree/tree.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/treeservice;treeservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.treeservice
fields:
    body:
        type: .tree.Tree
        description: Body with tree.Tree
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: treeservice.updatetree.body.placeholder
            hint: ""
            label: treeservice.updatetree.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
