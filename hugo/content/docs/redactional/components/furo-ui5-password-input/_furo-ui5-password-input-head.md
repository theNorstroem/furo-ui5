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
<furo-ui5-password-input
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input>
<furo-ui5-password-input
    readonly
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input>
<furo-ui5-password-input
    disabled
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input>
<furo-ui5-password-input
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-password-input
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input>
  <furo-ui5-password-input
    readonly
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input>
  <furo-ui5-password-input
    disabled
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input>
  <furo-ui5-password-input
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input>
</furo-form-layouter>
```

