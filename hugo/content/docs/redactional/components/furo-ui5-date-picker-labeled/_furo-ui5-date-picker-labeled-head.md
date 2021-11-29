---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Inside a furo-form-layouter set to *four*

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-form-layouter four>
<furo-ui5-date-picker-labeled
    ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
 ></furo-ui5-date-picker-labeled>
<furo-ui5-date-picker-labeled
    value-state="Information" 
    ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
 ></furo-ui5-date-picker-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-date-picker-labeled
    ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
  ></furo-ui5-date-picker-labeled>
  <furo-ui5-date-picker-labeled
      value-state="Success"
      text="Override"
      ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
   ></furo-ui5-date-picker-labeled>
</furo-form-layouter>
```

#### Inside a furo-form-layouter set to *two*

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-form-layouter two>
<furo-ui5-date-picker-labeled
    ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
 ></furo-ui5-date-picker-labeled>
<furo-ui5-date-picker-labeled
    value-state="Information" 
    ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
 ></furo-ui5-date-picker-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter two>
  <furo-ui5-date-picker-labeled
    ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
  ></furo-ui5-date-picker-labeled>
  <furo-ui5-date-picker-labeled
      value-state="Success"
      text="Override"
      ƒ-bind-data="--dataObject(*.furo_data_date_input_google)"
   ></furo-ui5-date-picker-labeled>
</furo-form-layouter>
```

