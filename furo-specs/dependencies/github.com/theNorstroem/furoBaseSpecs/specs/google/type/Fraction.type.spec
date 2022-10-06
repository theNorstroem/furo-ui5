name: Fraction
type: Fraction
description: Represents a fraction in terms of a numerator divided by a denominator.
lifecycle: null
__proto:
    package: google.type
    targetfile: fraction.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: FractionProto
        java_package: pro.furo.google.type
fields:
    numerator:
        type: int64
        description: The numerator in the fraction, e.g. 2 in 2/3.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.fraction.numerator.placeholder
            hint: ""
            label: google.type.fraction.numerator.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    denominator:
        type: int64
        description: |-
            The value by which the numerator is divided, e.g. 3 in 2/3. Must be
             positive.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.fraction.denominator.placeholder
            hint: ""
            label: google.type.fraction.denominator.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
