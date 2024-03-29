name: ListProjects
type: ListProjects
description: request message for ListProjects
lifecycle: null
__proto:
    package: projectservice
    targetfile: reqmsgs.proto
    imports:
        - projectfilter/projectfilter.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/projectservice;projectservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.projectservice
fields:
    body:
        type: .projectfilter.Projectfilter
        description: Body with projectfilter.Projectfilter
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: projectservice.listprojects.body.placeholder
            hint: ""
            label: projectservice.listprojects.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
