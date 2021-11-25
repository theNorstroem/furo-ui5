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
  <furo-ui5-property ƒ-bind-data="--entity(*.data.type_property)"></furo-ui5-property>
</furo-form-layouter>
<button @-click="--read1">load record 1</button>
<button @-click="--read2">load record 2</button>
<button @-click="--read3">load record 3</button>
<furo-pretty-json ƒ-inject-data="--dataChanged(*.data.type_property._value)"></furo-pretty-json>
<furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity" @-data-changed-after-inject="--dataChanged" ƒ-inject-raw="--response"></furo-data-object>
<furo-fetch-json
  ƒ-fetch="--read1"
  src="/mockdata/experiments/1/get.json"
  @-data="--response"
></furo-fetch-json>
<furo-fetch-json
  ƒ-fetch="--read2"
  src="/mockdata/experiments/1/get-less-props.json"
  @-data="--response"
></furo-fetch-json>
<furo-fetch-json
  ƒ-fetch="--read3"
  src="/mockdata/experiments/1/get-more-props.json"
  @-data="--response"
></furo-fetch-json>
            </furo-vertical-scroller>
</template>
</furo-demo-snippet>

```html

<furo-form-layouter four>
  <furo-ui5-property 
    ƒ-bind-data="--entity(*.data.type_property)"></furo-ui5-property>
</furo-form-layouter>
<furo-data-object 
  type="experiment.ExperimentEntity" 
  @-object-ready="--entity"
  @-data-changed-after-inject="--dataChanged" 
  ƒ-inject-raw="--response"></furo-data-object>
```

