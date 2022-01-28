name: CreateAuth
type: CreateAuth
description: request message for CreateAuth
lifecycle: null
__proto:
    package: authservice
    targetfile: reqmsgs.proto
    imports:
        - auth/auth.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/authservice;authservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.authservice
fields:
    body:
        type: .auth.Auth
        description: Body with auth.Auth
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: authservice.createauth.body.placeholder
            hint: ""
            label: authservice.createauth.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
