---
booksearchexclude: false 
bookToc: false 
bookHidden: true
---

#### Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-vertical-scroller> 
<furo-form-layouter four>
  <furo-ui5-property fn-bind-data="--entity(*.data.type_property)"></furo-ui5-property>
</furo-form-layouter>
<button @-click="--read">load record 1</button>
<button @-click="--readless">load record 2</button>
<button @-click="--readmore">load record 3</button>
<furo-pretty-json fn-inject-data="--dataChanged(*.data.type_property._value)"></furo-pretty-json>
<furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity" @-data-changed-after-inject="--dataChanged" fn-inject-raw="--response"></furo-data-object>
<furo-fetch-json
  fn-fetch="--read"
  src="/mockdata/experiments/1/get.json"
  @-data="--response"
></furo-fetch-json>
<furo-fetch-json
  fn-fetch="--readless"
  src="/mockdata/experiments/1/get-less-props.json"
  @-data="--response"
></furo-fetch-json>
<furo-fetch-json
  fn-fetch="--readmore"
  src="/mockdata/experiments/1/get-more-props.json"
  @-data="--response"
></furo-fetch-json>
            </furo-vertical-scroller>
</template>
</furo-demo-snippet>

```html

<furo-form-layouter four>
  <furo-ui5-property 
    fn-bind-data="--entity(*.data.type_property)"></furo-ui5-property>
</furo-form-layouter>
<furo-data-object 
  type="experiment.ExperimentEntity" 
  @-object-ready="--entity"
  @-data-changed-after-inject="--dataChanged" 
  fn-inject-raw="--response"></furo-data-object>
```

