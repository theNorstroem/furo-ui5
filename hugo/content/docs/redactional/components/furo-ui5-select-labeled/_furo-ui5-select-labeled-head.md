---
booksearchexclude: false
bookToc: false
bookHidden: true
---

### Example with options from specs
A simple way to use the segmented button is, uising it with specified options for a string type.

Defining a type with the options may look like a big overhead, but it let you switch the UI implementation by just changing
the tag name.

*The labels in the demo are not translated for better readability.*

<script type="module" src="/init.js"></script>

<furo-demo-snippet>
<template>
<furo-form-layouter four>
<furo-ui5-select-labeled
  label="Use with select"
  value-state="Success" 
  ƒ-bind-data="--daoPerson(*.sex)"></furo-ui5-select-labeled>
<furo-ui5-select-labeled
  label="Use with select"
  value-state="Success" 
  ƒ-bind-data="--daoPerson(*.sex)"></furo-ui5-select-labeled>
<furo-ui5-text-input-labeled
  label="use with text-input"
  value-state="Success" ƒ-bind-data="--daoPerson(*.sex)"></furo-ui5-text-input-labeled>
</furo-form-layouter>
<furo-data-object type="person.Person" @-object-ready="--daoPerson"></furo-data-object>
</template>
</furo-demo-snippet>

#### Markup
```html
<furo-ui5-select-labeled
  label="Use with select"
  value-state="Success"
  ƒ-bind-data="--daoPerson(*.sex)"></furo-ui5-select-labeled>
<furo-ui5-select-labeled
  label="Use with select"
  value-state="Success"
  ƒ-bind-data="--daoPerson(*.sex)"></furo-ui5-select-labeled>
<furo-ui5-text-input-labeled
  label="use with text-input"
  value-state="Success" ƒ-bind-data="--daoPerson(*.sex)"></furo-ui5-text-input-labeled>
```

#### Type definition
> look at `fields.sex.meta.options.list`
```yaml
name: Person
type: Person
description: Person message type
lifecycle: null
__proto:
  package: person
  targetfile: person.proto
  imports:
    - google/protobuf/field_mask.proto
  options:
    go_package: github.com/eclipse/eclipsefuro-web/furo-specs/dist/pb/person;personpb
    java_multiple_files: "true"
    java_outer_classname: PersonProto
    java_package: com.example.tutorial.person
fields:
  sex:
    type: string
    description: sex
    __proto:
      number: 8
    __ui: null
    meta:
      default: female
      placeholder: ""
      hint: ""
      label: sex
      options:
        flags: []
        list: # set the default options
          - '@type': type.googleapis.com/furo.Optionitem
            display_name: person.type.sex.unknown.label
            id: unknown
            selected: false
          - '@type': type.googleapis.com/furo.Optionitem
            display_name: person.type.sex.female.label
            id: female
            selected: true
          - '@type': type.googleapis.com/furo.Optionitem
            display_name: person.type.sex.male.label
            id: male
            selected: false
      readonly: false
      repeated: false
      typespecific: null
    constraints: {}
    
```



### Example with bindOptions
Set the id of the selected optioin to a value which is not in the list and press *load options* again. 

<furo-demo-snippet>
<template>
<button @-click="--read1">load options</button>
<furo-form-layouter one>
  <furo-ui5-select-labeled
    label="by display_name"
    value-field-path="data.id" 
    id-field-path="data.id" 
    display-field-path="data.display_name" 
    ƒ-bind-options="--collection(*.entities)" 
    ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-select-labeled>
  <furo-ui5-select-labeled
    label="by first_name"
    value-field-path="data.id"
    id-field-path="data.id" 
    display-field-path="data.first_name" 
    ƒ-bind-options="--collection(*.entities)" 
    ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-select-labeled>
  <furo-ui5-select-labeled 
    label="by phone_nr"
    value-field-path="data.id" 
    id-field-path="data.id" 
    display-field-path="data.phone_nr" 
    ƒ-bind-options="--collection(*.entities)" 
    ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-select-labeled>
  <furo-ui5-number-input-labeled 
    label="Selected option" 
    ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-number-input-labeled>
  </furo-form-layouter>
  <furo-data-object 
    type="person.PersonCollection"
    @-object-ready="--collection" 
    ƒ-inject-raw="--response"></furo-data-object>
  <furo-data-object 
    type="task.Task"
    @-object-ready="--entity"></furo-data-object>
  <furo-fetch-json
    ƒ-fetch="--read1"
    src="/mockdata/persons/list.json"
    @-data="--response"
    ></furo-fetch-json>
</template>
</furo-demo-snippet>

#### Markup
```html
<furo-ui5-select-labeled
  label="by display_name"
  value-field-path="data.id"
  id-field-path="data.id"
  display-field-path="data.display_name"
  ƒ-bind-options="--collection(*.entities)"
  ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-select-labeled>
<furo-ui5-select-labeled
  label="by first_name"
  value-field-path="data.id"
  id-field-path="data.id"
  display-field-path="data.first_name"
  ƒ-bind-options="--collection(*.entities)"
  ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-select-labeled>
<furo-ui5-select-labeled
  label="by phone_nr"
  value-field-path="data.id"
  id-field-path="data.id"
  display-field-path="data.phone_nr"
  ƒ-bind-options="--collection(*.entities)"
  ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-select-labeled>
<furo-ui5-number-input-labeled
  label="Selected option"
  ƒ-bind-data="--entity(*.owner.id)"></furo-ui5-number-input-labeled>
</furo-form-layouter>
<!-- this data object contains the list -->
<furo-data-object
  type="person.PersonCollection"
  @-object-ready="--collection"
  ƒ-inject-raw="--response"></furo-data-object>
<!-- this data object contains the field, you want to update -->
<furo-data-object
  type="task.Task"
  @-object-ready="--entity"></furo-data-object>
```
