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
              <furo-ui5-radio-button
                fn-bind-data="--doExp(*.furo_data_checkbox_input)"
              ></furo-ui5-radio-button>
              <furo-ui5-radio-button
                readonly
                text="Override"
                fn-bind-data="--doExp(*.furo_data_checkbox_input)"
              ></furo-ui5-radio-button>
              <furo-ui5-radio-button
                disabled
                fn-bind-data="--doExp(*.furo_data_checkbox_input)"
              ></furo-ui5-radio-button>
              <furo-ui5-radio-button
                value-state="Warning"
                placeholder="Placeholder"
                fn-bind-data="--doExp(*.furo_data_checkbox_input)"
              ></furo-ui5-radio-button>
              <furo-ui5-checkbox-input
                value-state="Success"
                text="Toggle"
                fn-bind-data="--doExp(*.furo_data_checkbox_input)"
              ></furo-ui5-checkbox-input>
            </furo-form-layouter>
            <furo-data-object
              type="experiment.Experiment"
              @-object-ready="--doExp"
            ></furo-data-object>
          </template>
</furo-demo-snippet>

```html
 <furo-form-layouter four>
  <furo-ui5-radio-button
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <furo-ui5-radio-button
    readonly
    text="Override"
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <furo-ui5-radio-button
    disabled
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <furo-ui5-radio-button
    value-state="Warning"
    placeholder="Placeholder"
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <!-- just to be able to disable the radio again -->
  <furo-ui5-checkbox-input
    value-state="Success"
    text="Toggle"
    fn-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-checkbox-input>
</furo-form-layouter>
```

