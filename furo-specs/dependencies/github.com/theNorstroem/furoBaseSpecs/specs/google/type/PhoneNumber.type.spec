name: PhoneNumber
type: PhoneNumber
description: |-
    An object representing a phone number, suitable as an API wire format.

     This representation:

      - should not be used for locale-specific formatting of a phone number, such
        as "+1 (650) 253-0000 ext. 123"

      - is not designed for efficient storage
      - may not be suitable for dialing - specialized libraries (see references)
        should be used to parse the number for that purpose

     To do something meaningful with this number, such as format it for various
     use-cases, convert it to an `i18n.phonenumbers.PhoneNumber` object first.

     For instance, in Java this would be:

        com.google.type.PhoneNumber wireProto =
            com.google.type.PhoneNumber.newBuilder().build();
        com.google.i18n.phonenumbers.Phonenumber.PhoneNumber phoneNumber =
            PhoneNumberUtil.getInstance().parse(wireProto.getE164Number(), "ZZ");
        if (!wireProto.getExtension().isEmpty()) {
          phoneNumber.setExtension(wireProto.getExtension());
        }

      Reference(s):
       - https://github.com/google/libphonenumber
lifecycle: null
__proto:
    package: google.type
    targetfile: phone_number.proto
    imports:
        - google/type/PhoneNumber/phone_number.proto
    options:
        go_package: github.com/theNorstroem/FuroBaseSpecs/dist/pb/google/type;typepb
        java_multiple_files: "true"
        java_outer_classname: Phone_numberProto
        java_package: pro.furo.google.type
fields:
    e164_number:
        type: string
        description: |-
            The phone number, represented as a leading plus sign ('+'), followed by a
             phone number that uses a relaxed ITU E.164 format consisting of the
             country calling code (1 to 3 digits) and the subscriber number, with no
             additional spaces or formatting, e.g.:
              - correct: "+15552220123"
              - incorrect: "+1 (555) 222-01234 x123".

             The ITU E.164 format limits the latter to 12 digits, but in practice not
             all countries respect that, so we relax that restriction here.
             National-only numbers are not allowed.

             References:
              - https://www.itu.int/rec/T-REC-E.164-201011-I
              - https://en.wikipedia.org/wiki/E.164.
              - https://en.wikipedia.org/wiki/List_of_country_calling_codes
        __proto:
            number: 1
            oneof: kind
        __ui: null
        meta:
            default: ""
            placeholder: google.type.phonenumber.e164number.placeholder
            hint: ""
            label: google.type.phonenumber.e164number.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    short_code:
        type: google.type.PhoneNumber.ShortCode
        description: |-
            A short code.

             Reference(s):
              - https://en.wikipedia.org/wiki/Short_code
        __proto:
            number: 2
            oneof: kind
        __ui: null
        meta:
            default: ""
            placeholder: google.type.phonenumber.shortcode.placeholder
            hint: ""
            label: google.type.phonenumber.shortcode.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
    extension:
        type: string
        description: |-
            The phone number's extension. The extension is not standardized in ITU
             recommendations, except for being defined as a series of numbers with a
             maximum length of 40 digits. Other than digits, some other dialing
             characters such as ',' (indicating a wait) or '#' may be stored here.

             Note that no regions currently use extensions with short codes, so this
             field is normally only set in conjunction with an E.164 number. It is held
             separately from the E.164 number to allow for short code extensions in the
             future.
        __proto:
            number: 3
        __ui: null
        meta:
            default: ""
            placeholder: google.type.phonenumber.extension.placeholder
            hint: ""
            label: google.type.phonenumber.extension.label
            options:
                flags: []
                list: []
            readonly: false
            repeated: false
            typespecific: null
        constraints: {}
