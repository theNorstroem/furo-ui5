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
<furo-ui5-date-picker
    fn-bind-data="--dataObject(*.furo_data_date_input_google)"
 ></furo-ui5-date-picker>
<furo-ui5-date-picker
    value-state="Information" 
    fn-bind-data="--dataObject(*.furo_data_date_input_google)"
 ></furo-ui5-date-picker>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-date-picker
  fn-bind-data="--dataObject(*.furo_data_date_input_google)"
></furo-ui5-date-picker>
<furo-ui5-date-picker
  value-state="Information"
  fn-bind-data="--dataObject(*.furo_data_date_input_google)"
></furo-ui5-date-picker>
</furo-form-layouter>
```

