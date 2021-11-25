

#### Example with context="display"
<script type="module" src="/init.js"></script>


<furo-demo-snippet>
<template>
<furo-vertical-scroller> 
<furo-form-layouter four>
  <furo-ui5-propertylist-display  ƒ-bind-data="--entity(*.data.type_property)"></furo-ui5-propertylist-display>
</furo-form-layouter>
<button @-click="--read">load record 1</button>
<button @-click="--readless">load record 2</button>
<button @-click="--readmore">load record 3</button>
<furo-data-object type="experiment.ExperimentEntity" @-object-ready="--entity"  ƒ-inject-raw="--response"></furo-data-object>
<furo-fetch-json
  ƒ-fetch="--read1"
  src="/mockdata/experiments/1/get.json"
  @-data="--response"
></furo-fetch-json>
<furo-fetch-json
  ƒ-fetch="--readless"
  src="/mockdata/experiments/1/get-less-props.json"
  @-data="--response"
></furo-fetch-json>
<furo-fetch-json
  ƒ-fetch="--readmore"
  src="/mockdata/experiments/1/get-more-props.json"
  @-data="--response"
></furo-fetch-json>
</furo-vertical-scroller>
</template>
</furo-demo-snippet>

```html
<furo-form-layouter four>
  <furo-ui5-propertylist-display  
    ƒ-bind-data="--entity(*.data.type_property)"></furo-ui5-propertylist-display>
</furo-form-layouter>
<furo-data-object 
  type="experiment.ExperimentEntity" 
  @-object-ready="--entity"  
  ƒ-inject-raw="--response"></furo-data-object>
```

