name: Numeric
type: Numeric
description: Numeric data description
lifecycle: null
__proto:
    package: numeric
    targetfile: numeric.proto
    imports:
        - furo/bigdecimal.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/numeric;numericpb
        java_multiple_files: "true"
        java_outer_classname: NumericProto
        java_package: com.example.tutorial.numeric
fields:
    bigdecimal:
        type: furo.BigDecimal
        description: no description
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.bigdecimal.placeholder
            hint: ""
            label: numeric.numeric.bigdecimal.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
