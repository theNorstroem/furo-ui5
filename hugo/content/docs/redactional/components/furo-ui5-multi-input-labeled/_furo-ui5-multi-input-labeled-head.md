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
    ƒ-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    required=""
    ƒ-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    disabled=""
    ƒ-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    label="Label"
    ƒ-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
    show-value-help-icon
    ƒ-bind-data="--data(*.repstring)"
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
  ƒ-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  required=""
  ƒ-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  disabled=""
  ƒ-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  label="Label"
  ƒ-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
<furo-ui5-multi-input-labeled
  show-value-help-icon
  ƒ-bind-data="--data(*.repstring)"
></furo-ui5-multi-input-labeled>
```


