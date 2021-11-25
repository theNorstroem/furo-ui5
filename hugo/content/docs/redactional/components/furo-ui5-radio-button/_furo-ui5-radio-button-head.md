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
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
 ></furo-ui5-radio-button>
<furo-ui5-radio-button
    readonly
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
 ></furo-ui5-radio-button>
<furo-ui5-radio-button
    disabled
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
 ></furo-ui5-radio-button>
<furo-ui5-radio-button
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
 ></furo-ui5-radio-button>
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
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <furo-ui5-radio-button
    readonly
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <furo-ui5-radio-button
    disabled
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
  <furo-ui5-radio-button
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_checkbox_input)"
  ></furo-ui5-radio-button>
</furo-form-layouter>
```

