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
<furo-ui5-money-input  
ƒ-bind-data="--doExp(*.furo_data_money_input)" 
currencies="CHF,EUR,USD"></furo-ui5-money-input>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--doExp"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  
  <furo-ui5-money-input
    ƒ-bind-data="--doExp(*.furo_data_money_input)"
  ></furo-ui5-money-input>
  <furo-ui5-money-input
      value-state="Success"
      text="Override"
      ƒ-bind-data="--doExp(*.furo_data_money_input)"
   ></furo-ui5-money-input>
</furo-form-layouter>
```

