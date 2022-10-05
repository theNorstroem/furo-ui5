name: TimeZone
type: TimeZone
description: |-
    Represents a time zone from the
     [IANA Time Zone Database](https://www.iana.org/time-zones).
lifecycle: null
__proto:
    package: google.type
    targetfile: datetime.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: DatetimeProto
        java_package: pro.furo.google.type
fields:
    id:
        type: string
        description: IANA Time Zone Database time zone, e.g. "America/New_York".
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.timezone.id.placeholder
            hint: ""
            label: google.type.timezone.id.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    version:
        type: string
        description: Optional. IANA Time Zone Database version number, e.g. "2019a".
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.timezone.version.placeholder
            hint: ""
            label: google.type.timezone.version.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
