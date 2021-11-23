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
<furo-ui5-date-time-picker
    ƒ-bind-data="--dataObjectDebounced(*.google_timestamp)"
 ></furo-ui5-date-time-picker>
<furo-ui5-date-time-picker
    value-state="Information" 
    ƒ-bind-data="--dataObjectDebounced(*.google_timestamp)"
 ></furo-ui5-date-time-picker>
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
<furo-form-layouter four>
  <furo-ui5-date-time-picker
    ƒ-bind-data="--dataObject(*.google_timestamp)"
  ></furo-ui5-date-time-picker>
  <furo-ui5-date-time-picker
    value-state="Information"
    ƒ-bind-data="--dataObject(*.google_timestamp)"
  ></furo-ui5-date-time-picker>
</furo-form-layouter>
```

