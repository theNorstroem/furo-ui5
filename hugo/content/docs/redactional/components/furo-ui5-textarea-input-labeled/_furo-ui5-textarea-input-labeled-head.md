---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-form-layouter four>
<furo-ui5-textarea-input-labeled
    ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input-labeled>
<furo-ui5-textarea-input-labeled
    value-state="Information" 
    rows="9"
    ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-textarea-input-labeled
  ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"
></furo-ui5-textarea-input-labeled>
<furo-ui5-textarea-input-labeled
  rows="9"
  value-state="Information"
  ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"
></furo-ui5-textarea-input-labeled>
```

