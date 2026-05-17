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
<furo-ui5-date-time-picker-labeled
    fn-bind-data="--dataObject(*.google_timestamp)"
 ></furo-ui5-date-time-picker-labeled>
<furo-ui5-date-time-picker-labeled
    value-state="Information" 
    fn-bind-data="--dataObject(*.google_timestamp)"
 ></furo-ui5-date-time-picker-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-date-time-picker-labeled
    fn-bind-data="--dataObject(*.google_timestamp)"
  ></furo-ui5-date-time-picker-labeled>
  <furo-ui5-date-time-picker-labeled
      value-state="Success"
      text="Override"
      fn-bind-data="--dataObject(*.google_timestamp)"
   ></furo-ui5-date-time-picker-labeled>
</furo-form-layouter>
```

#### Inside a furo-form-layouter set to *two*

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-form-layouter two>
<furo-ui5-date-time-picker-labeled
    fn-bind-data="--dataObject(*.google_timestamp)"
 ></furo-ui5-date-time-picker-labeled>
<furo-ui5-date-time-picker-labeled
    value-state="Information" 
    fn-bind-data="--dataObject(*.google_timestamp)"
 ></furo-ui5-date-time-picker-labeled>
</furo-form-layouter>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter two>
  <furo-ui5-date-time-picker-labeled
    fn-bind-data="--dataObject(*.google_timestamp)"
  ></furo-ui5-date-time-picker-labeled>
  <furo-ui5-date-time-picker-labeled
      value-state="Success"
      text="Override"
      fn-bind-data="--dataObject(*.google_timestamp)"
   ></furo-ui5-date-time-picker-labeled>
</furo-form-layouter>
```

