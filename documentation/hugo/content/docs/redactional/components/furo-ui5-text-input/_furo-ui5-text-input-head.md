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
<furo-ui5-text-input
    fn-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input>
<furo-ui5-text-input
    readonly
    fn-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input>
<furo-ui5-text-input
    disabled
    fn-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input>
<furo-ui5-text-input
    value-state="Success"
    placeholder="Placeholder"
    fn-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-text-input
    fn-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input>
  <furo-ui5-text-input
    readonly
    fn-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input>
  <furo-ui5-text-input
    disabled
    fn-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input>
  <furo-ui5-text-input
    value-state="Success"
    placeholder="Placeholder"
    fn-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input>
</furo-form-layouter>
```

