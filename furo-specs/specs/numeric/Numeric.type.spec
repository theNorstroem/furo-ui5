name: Numeric
type: Numeric
description: Numeric data description
lifecycle: null
__proto:
    package: numeric
    targetfile: numeric.proto
    imports:
        - furo/bigdecimal.proto
        - furo/fat/fat.proto
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
    bigdecimalmax:
        type: furo.BigDecimal
        description: with max
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.bigdecimalmax.placeholder
            hint: ""
            label: numeric.numeric.bigdecimalmax.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "100"
                message: not more then 100
            min:
                is: "10"
                message: at least 10
            step:
                is: "5"
                message: incrase by 5 only
    float:
        type: float64
        description: Float value
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.float.placeholder
            hint: ""
            label: numeric.numeric.float.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    int:
        type: int64
        description: Int value
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.int.placeholder
            hint: ""
            label: numeric.numeric.int.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    fatint:
        type: furo.fat.Int64
        description: fat Int value
        __proto:
            number: 5
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.fatint.placeholder
            hint: ""
            label: numeric.numeric.fatint.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    bigdecimal_req:
        type: furo.BigDecimal
        description: no description
        __proto:
            number: 6
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.bigdecimalreq.placeholder
            hint: ""
            label: numeric.numeric.bigdecimalreq.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            required:
                is: "true"
                message: numeric.numeric.bigdecimalreq.constraint.required.message
    bigdecimal_min:
        type: furo.BigDecimal
        description: no description
        __proto:
            number: 7
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.bigdecimalmin.placeholder
            hint: ""
            label: numeric.numeric.bigdecimalmin.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            min:
                is: "5"
                message: numeric.numeric.bigdecimalreq.constraint.min.message
    bigdecimal_max:
        type: furo.BigDecimal
        description: no description
        __proto:
            number: 8
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.bigdecimalmax.placeholder
            hint: ""
            label: numeric.numeric.bigdecimalmax.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            max:
                is: "5"
                message: numeric.numeric.bigdecimalreq.constraint.max.message
    bigdecimal_step:
        type: furo.BigDecimal
        description: no description
        __proto:
            number: 9
        __ui: null
        meta:
            default: ""
            placeholder: numeric.numeric.bigdecimalstep.placeholder
            hint: ""
            label: numeric.numeric.bigdecimalstep.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints:
            step:
                is: "0.005"
                message: numeric.numeric.bigdecimalreq.constraint.step.message
