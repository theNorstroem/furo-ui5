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
<furo-ui5-time-picker
    ƒ-bind-data="--dataObject(*.furo_data_time_input)"
 ></furo-ui5-time-picker>
<furo-ui5-time-picker
    value-state="Information" 
    ƒ-bind-data="--dataObject(*.furo_data_time_input)"
 ></furo-ui5-time-picker>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-time-picker
  ƒ-bind-data="--dataObject(*.furo_data_time_input)"
></furo-ui5-time-picker>
<furo-ui5-time-picker
  value-state="Information"
  ƒ-bind-data="--dataObject(*.furo_data_time_input)"
></furo-ui5-time-picker>
</furo-form-layouter>
```

