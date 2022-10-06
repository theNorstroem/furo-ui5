name: Expr
type: Expr
description: |-
    Represents a textual expression in the Common Expression Language (CEL)
     syntax. CEL is a C-like expression language. The syntax and semantics of CEL
     are documented at https://github.com/google/cel-spec.

     Example (Comparison):

         title: "Summary size limit"
         description: "Determines if a summary is less than 100 chars"
         expression: "document.summary.size() < 100"

     Example (Equality):

         title: "Requestor is owner"
         description: "Determines if requestor is the document owner"
         expression: "document.owner == request.auth.claims.email"

     Example (Logic):

         title: "Public documents"
         description: "Determine whether the document should be publicly visible"
         expression: "document.type != 'private' && document.type != 'internal'"

     Example (Data Manipulation):

         title: "Notification string"
         description: "Create a notification string with a timestamp."
         expression: "'New message received at ' + string(document.create_time)"

     The exact variables and functions that may be referenced within an expression
     are determined by the service that evaluates it. See the service
     documentation for additional information.
lifecycle: null
__proto:
    package: google.type
    targetfile: expr.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: ExprProto
        java_package: pro.furo.google.type
fields:
    expression:
        type: string
        description: |-
            Textual representation of an expression in Common Expression Language
             syntax.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.expr.expression.placeholder
            hint: ""
            label: google.type.expr.expression.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    title:
        type: string
        description: |-
            Optional. Title for the expression, i.e. a short string describing
             its purpose. This can be used e.g. in UIs which allow to enter the
             expression.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.expr.title.placeholder
            hint: ""
            label: google.type.expr.title.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    description:
        type: string
        description: |-
            Optional. Description of the expression. This is a longer text which
             describes the expression, e.g. when hovered over it in a UI.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.type.expr.description.placeholder
            hint: ""
            label: google.type.expr.description.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    location:
        type: string
        description: |-
            Optional. String indicating the location of the expression for error
             reporting, e.g. a file name and a position in the file.
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: google.type.expr.location.placeholder
            hint: ""
            label: google.type.expr.location.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
