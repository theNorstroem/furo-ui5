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
    ƒ-bind-data="--dataObjectDebounced(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input-labeled>
<furo-ui5-textarea-input-labeled
    value-state="Information" 
    rows="9"
    ƒ-bind-data="--dataObjectDebounced(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
<!-- Workaround, because data object is way faster ready -->
<furo-de-bounce wait="1" ƒ-trigger="--dataObject" @-debounced="--dataObjectDebounced"></furo-de-bounce>
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

