name: BillingDestination
type: BillingDestination
description: ""
lifecycle: null
__proto:
    package: google.api.Billing
    targetfile: billing.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/api/Billing;Billingpb
        java_multiple_files: "true"
        java_outer_classname: BillingProto
        java_package: google.api.Billing
fields:
    monitored_resource:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.api.billing.billingdestination.monitoredresource.placeholder
            hint: ""
            label: google.api.billing.billingdestination.monitoredresource.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    metrics:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.api.billing.billingdestination.metrics.placeholder
            hint: ""
            label: google.api.billing.billingdestination.metrics.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
