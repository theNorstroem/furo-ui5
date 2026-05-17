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
<furo-ui5-date-time-picker
    fn-bind-data="--dataObject(*.google_timestamp)"
 ></furo-ui5-date-time-picker>
<furo-ui5-date-time-picker
    value-state="Information" 
    fn-bind-data="--dataObject(*.google_timestamp)"
 ></furo-ui5-date-time-picker>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-date-time-picker
    fn-bind-data="--dataObject(*.google_timestamp)"
  ></furo-ui5-date-time-picker>
  <furo-ui5-date-time-picker
    value-state="Information"
    fn-bind-data="--dataObject(*.google_timestamp)"
  ></furo-ui5-date-time-picker>
</furo-form-layouter>
```

