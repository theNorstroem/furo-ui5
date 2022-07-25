name: TestObject
type: TestObject
description: MC test object
lifecycle: null
__proto:
    package: messagecontainer
    targetfile: mc.proto
    imports:
        - furo/furo.proto
        - google/type/date.proto
        - google/type/money.proto
        - person/person.proto
    options:
        go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/messagecontainer;messagecontainerpb
        java_multiple_files: "true"
        java_outer_classname: McProto
        java_package: com.example.tutorial.messagecontainer
fields:
    name:
        type: string
        description: Name field
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.name.placeholder
            hint: ""
            label: messagecontainer.testobject.name.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    _messagecontainer:
        type: furo.MessageContainer
        description: MessageContainer
        __proto:
            number: 9
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.messagecontainer.placeholder
            hint: ""
            label: messagecontainer.testobject.messagecontainer.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    _links:
        type: furo.Link
        description: Hateoas links
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.links.placeholder
            hint: ""
            label: messagecontainer.testobject.links.label
            options:
                flags: []
                list: []
            readonly: true
            repeated: true
            typespecific: null
        constraints: {}
    array:
        type: string
        description: repeated string
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.array.placeholder
            hint: ""
            label: messagecontainer.testobject.array.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: true
            typespecific: null
        constraints: {}
    person:
        type: person.Person
        description: deep value state
        __proto:
            number: 4
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.deep.placeholder
            hint: ""
            label: messagecontainer.testobject.deep.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    bool:
        type: bool
        description: Boolean value
        __proto:
            number: 10
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.bool.placeholder
            hint: ""
            label: messagecontainer.testobject.bool.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    numeric:
        type: int32
        description: Numeric value
        __proto:
            number: 11
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.numeric.placeholder
            hint: ""
            label: messagecontainer.testobject.numeric.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    date:
        type: google.type.Date
        description: field for furo-data-date-input for testing
        __proto:
            number: 18
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.date.placeholder
            hint: ""
            label: messagecontainer.testobject.date.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    money:
        type: google.type.Money
        description: furo Money
        __proto:
            number: 29
        __ui: null
        meta:
            default: ""
            placeholder: messagecontainer.testobject.money.placeholder
            hint: ""
            label: messagecontainer.testobject.money.label
            options:
                flags:
                    - currency_list
                list:
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: Swiss francs (CHF)
                      id: CHF
                      selected: false
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: Euro (EUR)
                      id: EUR
                      selected: false
                    - '@type': type.googleapis.com/furo.Optionitem
                      display_name: US Dollar (USD)
                      id: USD
                      selected: false
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    reference:
        type: furo.Reference
        description: Reference type'
        __proto:
            number: 5
        __ui: null
        meta:
            default: |-
                {"link" :
                    { "rel": "list",
                      "href": "/mockdata/persons/list.json",
                      "method": "GET",
                      "type": "person.Person",
                      "service": "personservice.PersonService"}}
            placeholder: messagecontainer.testobject.reference.placeholder
            hint: ""
            label: messagecontainer.testobject.reference.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
