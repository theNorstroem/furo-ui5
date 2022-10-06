name: LocalizedText
type: LocalizedText
description: Localized variant of a text in a particular language.
lifecycle: null
__proto:
    package: google.type
    targetfile: localized_text.proto
    imports: []
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: Localized_textProto
        java_package: pro.furo.google.type
fields:
    text:
        type: string
        description: Localized string in the language corresponding to `language_code' below.
        __proto:
            number: 1
        __ui: null
        meta:
            default: ""
            placeholder: google.type.localizedtext.text.placeholder
            hint: ""
            label: google.type.localizedtext.text.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    language_code:
        type: string
        description: |-
            The text's BCP-47 language code, such as "en-US" or "sr-Latn".

             For more information, see
             http://www.unicode.org/reports/tr35/#Unicode_locale_identifier.
        __proto:
            number: 2
        __ui: null
        meta:
            default: ""
            placeholder: google.type.localizedtext.languagecode.placeholder
            hint: ""
            label: google.type.localizedtext.languagecode.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
