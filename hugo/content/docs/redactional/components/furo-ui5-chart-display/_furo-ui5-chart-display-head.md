---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example mixed charts

<script type="module" src="/init.js"></script>
<furo-demo-snippet style="height: 525px">
<template>
<furo-vertical-flex>
<div><furo-ui5-button @-click="--btnListClicked" ƒ-hide="--btnListClicked"> load data</furo-ui5-button>
<furo-ui5-button hidden ƒ-show="--btnListClicked" @-click="--changeDataClicked"> change  data</furo-ui5-button>
</div>
<furo-ui5-chart-display
    flex scroll
    chart-type="line"
    title-text="Title"
    title-align="center"
    no-data-text="Press load data"
    fixed-height="400"
    tooltip
    grid
    legend
    toolbar
    toolbar-download
  >
    <furo-ui5-chart
      ƒ-bind-data="--projectDAO(*.entities)"
      data-field="data.cost_limit.units"
      category-field="data.description"
      chart-type="line"
      legend-label="Unit"
      chart-stroke-width="4"
      chart-curve="straight"
      axis-label="data.Unit._value"
      axis-border
      axis-tooltip
    ></furo-ui5-chart>
    <furo-ui5-chart
      ƒ-bind-data="--projectDAO(*.entities)"
      data-field="data.cost_limit.units"
      category-field="data.description"
      legend-label="Cost"
      chart-type="column"
      chart-color="#FEA555"
      chart-stroke-width="0"
      axis
      axis-label="Cost"
      axis-label-opposite
      axis-ticks
      axis-ticks-color="#FEA555"
      axis-border
      axis-border-color="#FEA555"
      axis-label-color="#FEA232"
      axis-tooltip
    ></furo-ui5-chart>
    <furo-ui5-chart
      ƒ-bind-data="--projectDAO(*.entities)"
      data-field="data.start.day"
      category-field="data.description"
      chart-type="area"
      legend-label="Day"
      axis-label="Day"
      axis-ticks
      axis-border
      axis-tooltip
      chart-marker-size="1"
      chart-color="#cd00fb"
      chart-stroke-width="10"
      chart-curve="smooth"
      y-axis-ticks
      y-axis-border
      y-axis-border-color="#008FFB"
      y-axis-label-color="#008FFB"
      tooltip
      opposite
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
