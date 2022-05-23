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
<furo-ui5-toggle-button
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
 ></furo-ui5-toggle-button>
<furo-ui5-toggle-button
    design="Positive"
    text
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
 >Override</furo-ui5-toggle-button>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-toggle-button
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-toggle-button>
  <furo-ui5-toggle-button
    design="Positive"
    text
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  >Override</furo-ui5-toggle-button>
</furo-form-layouter>
```

