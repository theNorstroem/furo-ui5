name: TestObject
type: TestObject
description: MC test object
lifecycle: null
__proto:
    package: messagecontainer
    targetfile: mc.proto
    imports:
        - furo/furo.proto
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
