name: ShortCode
type: ShortCode
description: ""
lifecycle: null
__proto:
    package: google.type.PhoneNumber
    targetfile: phone_number.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type/PhoneNumber;PhoneNumberpb
        java_multiple_files: "true"
        java_outer_classname: Phone_numberProto
        java_package: pro.furo.google.type.PhoneNumber
fields:
    region_code:
        type: string
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.phonenumber.shortcode.regioncode.placeholder
            hint: ""
            label: google.type.phonenumber.shortcode.regioncode.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    number:
        type: string
        description: no description
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.phonenumber.shortcode.number.placeholder
            hint: ""
            label: google.type.phonenumber.shortcode.number.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
