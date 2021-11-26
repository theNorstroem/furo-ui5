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
<furo-ui5-text-input-labeled
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input-labeled>
<furo-ui5-text-input-labeled
    label="readonly"
    readonly
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input-labeled>
<furo-ui5-text-input-labeled
    label="disabled"
    disabled
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input-labeled>  
<furo-ui5-text-input-labeled
    required
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input-labeled>
<furo-ui5-text-input-labeled
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
 ></furo-ui5-text-input-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-text-input-labeled
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input-labeled>
  <furo-ui5-text-input-labeled
    readonly
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input-labeled>
  <furo-ui5-text-input-labeled
    disabled
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input-labeled>  
  <furo-ui5-text-input-labeled
    required
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input-labeled>
  <furo-ui5-text-input-labeled
    value-state="Success"
    placeholder="Placeholder"
    ƒ-bind-data="--doExp(*.furo_data_text_input)"
  ></furo-ui5-text-input-labeled>
</furo-form-layouter>
```

