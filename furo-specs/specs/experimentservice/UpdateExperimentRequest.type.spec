name: UpdateExperimentRequest
type: UpdateExperimentRequest
description: request message for UpdateExperiment
lifecycle: null
__proto:
    package: experimentservice
    targetfile: reqmsgs.proto
    imports:
        - experiment/experiment.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/experimentservice;experimentservicepb
        java_multiple_files: "true"
        java_outer_classname: ReqmsgsProto
        java_package: com.example.tutorial.experimentservice
fields:
    body:
        type: .experiment.Experiment
        description: Body with experiment.Experiment
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: experimentservice.updateexperimentrequest.body.placeholder
            hint: ""
            label: experimentservice.updateexperimentrequest.body.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
