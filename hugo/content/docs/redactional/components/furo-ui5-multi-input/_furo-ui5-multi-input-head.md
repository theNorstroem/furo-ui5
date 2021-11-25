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
<furo-ui5-multi-input
    ƒ-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input>
<furo-ui5-multi-input
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--data(*.repstring)"
 ></furo-ui5-multi-input>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--data"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-multi-input
  ƒ-bind-data="--data(*.repeated_sring)"
></furo-ui5-multi-input>
<furo-ui5-multi-input
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--data(*.repeated_sring)"
 ></furo-ui5-multi-input>
```

