---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example
<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-ui5-button @-click="--btnListClicked">load collection</furo-ui5-button>
<furo-ui5-pagination-bar ƒ-inject="--responseHts" @-pagination-next="--next" @-pagination-last="--last"></furo-ui5-pagination-bar>
<furo-deep-link ƒ-trigger="--btnListClicked" service="projectservice.ProjectService" @-hts-out="--hts"></furo-deep-link>
<furo-collection-agent service="projectservice.ProjectService" ƒ-hts-in="--hts" ƒ-next="--next" ƒ-last="--last" list-on-hts-in="" @-response-hts-updated="--responseHts">
</furo-collection-agent>
</template>
</furo-demo-snippet>

```html
<furo-ui5-pagination-bar 
  ƒ-inject="--responseHts" 
  @-pagination-next="--next" 
  @-pagination-last="--last"></furo-ui5-pagination-bar>
<furo-collection-agent 
  service="projectservice.ProjectService" 
  ƒ-hts-in="--hts" 
  ƒ-next="--next" 
  ƒ-last="--last"
  @-response-hts-updated="--responseHts">
</furo-collection-agent>
```

