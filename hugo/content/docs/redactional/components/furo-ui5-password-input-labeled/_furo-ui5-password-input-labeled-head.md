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
<furo-ui5-password-input-labeled
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input-labeled>
<furo-ui5-password-input-labeled
    label="readonly"
    readonly
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input-labeled>
<furo-ui5-password-input-labeled
    label="disabled"
    disabled
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input-labeled>  
<furo-ui5-password-input-labeled
    required
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input-labeled>
<furo-ui5-password-input-labeled
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
 ></furo-ui5-password-input-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-password-input-labeled
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input-labeled>
  <furo-ui5-password-input-labeled
    readonly
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input-labeled>
  <furo-ui5-password-input-labeled
    disabled
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input-labeled>  
  <furo-ui5-password-input-labeled
    required
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input-labeled>
  <furo-ui5-password-input-labeled
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_password_input)"
  ></furo-ui5-password-input-labeled>
</furo-form-layouter>
```

