#### Example

<furo-demo-snippet>
<template>
<ui5-button @-click="--btnListClicked"> load data</ui5-button>
<ui5-button @-click="--changeDataClicked"> change loaded data</ui5-button>
<furo-deep-link
  ƒ-trigger="--btnListClicked"
  service="ProjectService"
  @-hts-out="--hts"
></furo-deep-link>
<furo-collection-agent
  service="ProjectService"
  ƒ-hts-in="--hts"
  ƒ-list="--changeDataClicked"
  list-on-hts-in
  @-response-hts-updated="--responseHts"
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
