name: DateTime
type: DateTime
description: |-
    Represents civil time (or occasionally physical time).

     This type can represent a civil time in one of a few possible ways:

      * When utc_offset is set and time_zone is unset: a civil time on a calendar
        day with a particular offset from UTC.
      * When time_zone is set and utc_offset is unset: a civil time on a calendar
        day in a particular time zone.
      * When neither time_zone nor utc_offset is set: a civil time on a calendar
        day in local time.

     The date is relative to the Proleptic Gregorian Calendar.

     If year is 0, the DateTime is considered not to have a specific year. month
     and day must have valid, non-zero values.

     This type may also be used to represent a physical time if all the date and
     time fields are set and either case of the `time_offset` oneof is set.
     Consider using `Timestamp` message for physical time instead. If your use
     case also would like to store the user's timezone, that can be done in
     another field.

     This type is more flexible than some applications may want. Make sure to
     document and validate your application's limitations.
lifecycle: null
__proto:
    package: google.type
    targetfile: datetime.proto
    imports:
        - google/protobuf/duration.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: DatetimeProto
        java_package: pro.furo.google.type
fields:
    year:
        type: int32
        description: |-
            Optional. Year of date. Must be from 1 to 9999, or 0 if specifying a
             datetime without a year.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.year.placeholder
            hint: ""
            label: google.type.datetime.year.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    month:
        type: int32
        description: Required. Month of year. Must be from 1 to 12.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.month.placeholder
            hint: ""
            label: google.type.datetime.month.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    day:
        type: int32
        description: |-
            Required. Day of month. Must be from 1 to 31 and valid for the year and
             month.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.day.placeholder
            hint: ""
            label: google.type.datetime.day.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    hours:
        type: int32
        description: |-
            Required. Hours of day in 24 hour format. Should be from 0 to 23. An API
             may choose to allow the value "24:00:00" for scenarios like business
             closing time.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.hours.placeholder
            hint: ""
            label: google.type.datetime.hours.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    minutes:
        type: int32
        description: Required. Minutes of hour of day. Must be from 0 to 59.
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.minutes.placeholder
            hint: ""
            label: google.type.datetime.minutes.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    seconds:
        type: int32
        description: |-
            Required. Seconds of minutes of the time. Must normally be from 0 to 59. An
             API may allow the value 60 if it allows leap-seconds.
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.seconds.placeholder
            hint: ""
            label: google.type.datetime.seconds.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    nanos:
        type: int32
        description: |-
            Required. Fractions of seconds in nanoseconds. Must be from 0 to
             999,999,999.
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.nanos.placeholder
            hint: ""
            label: google.type.datetime.nanos.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    utc_offset:
        type: google.protobuf.Duration
        description: |-
            UTC offset. Must be whole seconds, between -18 hours and +18 hours.
             For example, a UTC offset of -4:00 would be represented as
             { seconds: -14400 }.
        __proto:
            number: 8
            oneof: time_offset
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.utcoffset.placeholder
            hint: ""
            label: google.type.datetime.utcoffset.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    time_zone:
        type: google.type.TimeZone
        description: Time zone.
        __proto:
            number: 9
            oneof: time_offset
        __ui: null
        meta:
            default: ""
            placeholder: google.type.datetime.timezone.placeholder
            hint: ""
            label: google.type.datetime.timezone.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
