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
<furo-ui5-multi-input-labeled
    full
    fn-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    required=""
    fn-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    disabled=""
    fn-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    label="Label"
    fn-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    show-value-help-icon
    fn-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--data"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-multi-input-labeled
  full
  fn-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  required=""
  fn-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  disabled=""
  fn-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  label="Label"
  fn-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  show-value-help-icon
  fn-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
```


