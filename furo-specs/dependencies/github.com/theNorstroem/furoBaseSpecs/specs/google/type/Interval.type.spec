name: Interval
type: Interval
description: |-
    Represents a time interval, encoded as a Timestamp start (inclusive) and a
     Timestamp end (exclusive).

     The start must be less than or equal to the end.
     When the start equals the end, the interval is empty (matches no time).
     When both start and end are unspecified, the interval matches any time.
lifecycle: null
__proto:
    package: google.type
    targetfile: interval.proto
    imports:
        - google/protobuf/timestamp.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: IntervalProto
        java_package: pro.furo.google.type
fields:
    start_time:
        type: google.protobuf.Timestamp
        description: |-
            Optional. Inclusive start of the interval.

             If specified, a Timestamp matching this interval will have to be the same
             or after the start.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.interval.starttime.placeholder
            hint: ""
            label: google.type.interval.starttime.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    end_time:
        type: google.protobuf.Timestamp
        description: |-
            Optional. Exclusive end of the interval.

             If specified, a Timestamp matching this interval will have to be before the
             end.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.interval.endtime.placeholder
            hint: ""
            label: google.type.interval.endtime.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
