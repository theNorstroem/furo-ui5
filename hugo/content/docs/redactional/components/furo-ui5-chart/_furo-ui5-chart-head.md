---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Simple line chart

<script type="module" src="/init.js"></script>
<furo-demo-snippet style="height: 360px">
<template>
<furo-vertical-flex>
<div><furo-ui5-button @-click="--btnListClicked" ƒ-hide="--btnListClicked"> load data</furo-ui5-button>
<furo-ui5-button hidden ƒ-show="--btnListClicked" @-click="--changeDataClicked"> change  data</furo-ui5-button>
</div>
<furo-ui5-chart-display
    flex scroll
    chart-type="line"
    title-align="center"
    no-data-text="Press load data"
    fixed-height="250"
    tooltip
    grid
    legend
  >
    <furo-ui5-chart
       ƒ-bind-data="--projectDAO(*.entities)"
       data-field="data.cost_limit.units"
       category-field="data.description"
   ></furo-ui5-chart>
  </furo-ui5-chart-display>
</furo-vertical-flex>
<furo-deep-link
  ƒ-trigger="--btnListClicked"
  service="projectservice.ProjectService"
  @-hts-out="--hts"
></furo-deep-link>
<furo-collection-agent
  service="projectservice.ProjectService"
  ƒ-hts-in="--hts"
  ƒ-list="--changeDataClicked"
  list-on-hts-in
  @-response="--collectionResponse"
>
</furo-collection-agent>
<furo-data-object
  type="project.ProjectCollection"
  ƒ-inject-raw="--collectionResponse"
  @-object-ready="--projectDAO"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-chart-display
    flex scroll
    chart-type="line"
    no-data-text="Press load data"
    fixed-height="250"
    tooltip
    grid
    legend>
    <furo-ui5-chart
       ƒ-bind-data="--projectDAO(*.entities)"
       data-field="data.cost_limit.units"
       category-field="data.description"
   ></furo-ui5-chart>
</furo-ui5-chart-display>
```


#### Bubble charts

<script type="module" src="/init.js"></script>
<furo-demo-snippet style="height: 430px">
<template>
<furo-vertical-flex>
<div><furo-ui5-button @-click="--btnListClicked" ƒ-hide="--btnListClicked"> load data</furo-ui5-button>
<furo-ui5-button hidden ƒ-show="--btnListClicked" @-click="--changeDataClicked"> change  data</furo-ui5-button>
</div>
    <furo-ui5-chart-display flex scroll chart-type="bubble" data-labels="" tooltip=""  legend="" fixed-height="300">
      <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.start.day, data.end.day, data.start.day" category-field="data.description" axis-label="End" legend-label="Group A"></furo-ui5-chart>
      <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.end.day,data.start.day, data.start.day" category-field="data.description" legend-label="Group B"></furo-ui5-chart>
    </furo-ui5-chart-display>
</furo-vertical-flex>
<furo-deep-link
  ƒ-trigger="--btnListClicked"
  service="projectservice.ProjectService"
  @-hts-out="--hts"
></furo-deep-link>
<furo-collection-agent
  service="projectservice.ProjectService"
  ƒ-hts-in="--hts"
  ƒ-list="--changeDataClicked"
  list-on-hts-in
  @-response="--collectionResponse"
>
</furo-collection-agent>
<furo-data-object
  type="project.ProjectCollection"
  ƒ-inject-raw="--collectionResponse"
  @-object-ready="--projectDAO"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<furo-ui5-chart-display 
  chart-type="bubble" 
  data-labels="" 
  tooltip=""  
  legend="" 
  fixed-height="300">   
      <furo-ui5-chart 
        ƒ-bind-data="--projectDAO(*.entities)" 
        data-field="data.start.day, data.end.day, data.start.day" 
        category-field="data.description" 
        axis-label="End" 
        legend-label="Group A"></furo-ui5-chart>
      <furo-ui5-chart 
        ƒ-bind-data="--projectDAO(*.entities)" 
        data-field="data.end.day,data.start.day, data.start.day" 
        category-field="data.description" 
        legend-label="Group B"></furo-ui5-chart>
    
</furo-ui5-chart-display>
```


#### Sparkline

<script type="module" src="/init.js"></script>
<furo-demo-snippet style="height: 430px">
<template>
<furo-vertical-flex>
<div><furo-ui5-button @-click="--btnListClicked" ƒ-hide="--btnListClicked"> load data</furo-ui5-button>
<furo-ui5-button hidden ƒ-show="--btnListClicked" @-click="--changeDataClicked"> change  data</furo-ui5-button>
</div>
<div flex scroll>
<style>furo-ui5-chart-display{width: 145px; float: left; margin: 8px; box-sizing: border-box}</style>
<furo-ui5-chart-display chart-type="radar" sparkline="" fixed-height="145">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
<furo-ui5-chart-display chart-type="line" fixed-height="145" sparkline="">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
<furo-ui5-chart-display chart-type="radialBar" fixed-height="145" sparkline="">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" chart-stroke-width="6" data-field="data.end.day"
                  category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
<furo-ui5-chart-display chart-type="bar" fixed-height="145" plot-horizontal="" sparkline="">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
<furo-ui5-chart-display chart-type="pie" tooltip="" fixed-height="145" sparkline="">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
<furo-ui5-chart-display chart-type="donut" tooltip="" fixed-height="145" sparkline="">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
<furo-ui5-chart-display chart-type="bar" fixed-height="145" sparkline="">
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description" legend-label="Cost"></furo-ui5-chart>
  <furo-ui5-chart ƒ-bind-data="--projectDAO(*.entities)" data-field="data.cost_limit.units"
                  category-field="data.description" legend-label="Secondary"></furo-ui5-chart>
</furo-ui5-chart-display>
</div> 
</furo-vertical-flex>
<furo-deep-link
  ƒ-trigger="--btnListClicked"
  service="projectservice.ProjectService"
  @-hts-out="--hts"
></furo-deep-link>
<furo-collection-agent
  service="projectservice.ProjectService"
  ƒ-hts-in="--hts"
  ƒ-list="--changeDataClicked"
  list-on-hts-in
  @-response="--collectionResponse"
>
</furo-collection-agent>
<furo-data-object
  type="project.ProjectCollection"
  ƒ-inject-raw="--collectionResponse"
  @-object-ready="--projectDAO"
></furo-data-object>
</template>
</furo-demo-snippet>


```html
<furo-ui5-chart-display chart-type="radar" sparkline="" fixed-height="145">
  <furo-ui5-chart 
    ƒ-bind-data="--projectDAO(*.entities)" 
    data-field="data.cost_limit.units"
    category-field="data.description"></furo-ui5-chart>
</furo-ui5-chart-display>
```
