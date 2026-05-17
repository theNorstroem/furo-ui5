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
<furo-ui5-number-input-labeled
    fn-bind-data="--doExp(*.furo_data_number_input)"
 ></furo-ui5-number-input-labeled>
<furo-ui5-number-input-labeled
    label="readonly"
    readonly
    fn-bind-data="--doExp(*.furo_data_number_input)"
 ></furo-ui5-number-input-labeled>
<furo-ui5-number-input-labeled
    label="disabled"
    disabled
    fn-bind-data="--doExp(*.furo_data_number_input)"
 ></furo-ui5-number-input-labeled>  
<furo-ui5-number-input-labeled
    required
    fn-bind-data="--doExp(*.furo_data_number_input)"
  ></furo-ui5-number-input-labeled>
<furo-ui5-number-input-labeled
    value-state="Success"
    placeholder="Placeholder"
    fn-bind-data="--doExp(*.furo_data_number_input)"
 ></furo-ui5-number-input-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-number-input-labeled
    fn-bind-data="--doExp(*.furo_data_number_input)"
  ></furo-ui5-number-input-labeled>
  <furo-ui5-number-input-labeled
    readonly
    fn-bind-data="--doExp(*.furo_data_number_input)"
  ></furo-ui5-number-input-labeled>
  <furo-ui5-number-input-labeled
    disabled
    fn-bind-data="--doExp(*.furo_data_number_input)"
  ></furo-ui5-number-input-labeled>  
  <furo-ui5-number-input-labeled
    required
    fn-bind-data="--doExp(*.furo_data_number_input)"
  ></furo-ui5-number-input-labeled>
  <furo-ui5-number-input-labeled
    value-state="Success"
    placeholder="Placeholder"
    fn-bind-data="--doExp(*.furo_data_number_input)"
  ></furo-ui5-number-input-labeled>
</furo-form-layouter>
```

