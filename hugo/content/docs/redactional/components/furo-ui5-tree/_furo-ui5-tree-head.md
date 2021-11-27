---
booksearchexclude: false
bookToc: false
bookHidden: true
---


#### Minimalistic Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet style="height: 525px">
<template>
          <furo-split-view>
            <furo-ui5-tree
              slot="master" 
              ƒ-bind-data="--entityObj(*.data)"
              @-node-selected="--nodeSelected" 
              ƒ-trigger-navigation="--navigation"
            >
              <!-- add the furo-navigation-pad for keyboard navigation -->
              <furo-navigation-pad @-navigated="--navigation"></furo-navigation-pad>
            </furo-ui5-tree>
            <furo-pretty-json scroll
                              ƒ-inject-data="--nodeSelected(*._value)"
            ></furo-pretty-json>
          </furo-split-view>
        <furo-data-object
            type="tree.TreeEntity"
            ƒ-inject-raw="--data"
            @-object-ready="--entityObj"
          ></furo-data-object>
          <furo-fetch-json
            ƒ-fetch="--entityObj"
            src="/mockdata/trees/1/testdata.json"
            @-data="--data"
          ></furo-fetch-json>
</template>
</furo-demo-snippet>

*Source for the tree part with keyboard navigation*
```html
  <furo-ui5-tree
    ƒ-bind-data="--entityObj(*.data)"
    @-node-selected="--nodeSelected" 
    ƒ-trigger-navigation="--navigation"
  >
    <!-- add the furo-navigation-pad for keyboard navigation -->
    <furo-navigation-pad @-navigated="--navigation"></furo-navigation-pad>
  </furo-ui5-tree>

<furo-data-object
  type="tree.TreeEntity"
  ƒ-inject-raw="--data"
  @-object-ready="--entityObj"
></furo-data-object>
```

#### Example with deep link and root node set as header

<script type="module" src="/init.js"></script>
<furo-demo-snippet style="height: 525px">
<template>
          <furo-split-view>
            <furo-ui5-tree
              slot="master"
              root-as-header
              ƒ-bind-data="--entityObj(*.data)"
              qp="panel"
              ƒ-location-in="--qp"
              @-node-selected="--nodeSelected"
              @-qp-change-requested="--qpchangerequest"
              ƒ-trigger-navigation="--navigation"
            >
              <!-- add the furo-navigation-pad for keyboard navigation -->
              <furo-navigation-pad @-navigated="--navigation"></furo-navigation-pad>
            </furo-ui5-tree>
            <furo-pretty-json scroll
                              ƒ-inject-data="--nodeSelected(*._value)"
            ></furo-pretty-json>
          </furo-split-view>
          <furo-location-updater ƒ-set-qp="--qpchangerequest"></furo-location-updater>
          <furo-location @-location-query-changed="--qp"></furo-location>
          <furo-data-object
            type="tree.TreeEntity"
            ƒ-inject-raw="--data"
            @-object-ready="--entityObj"
          ></furo-data-object>
          <furo-fetch-json
            ƒ-fetch="--entityObj"
            src="/mockdata/trees/1/testdata.json"
            @-data="--data"
          ></furo-fetch-json>
</template>
</furo-demo-snippet>

```html
<furo-ui5-tree
  slot="master"
  root-as-header
  ƒ-bind-data="--entityObj(*.data)"
  qp="panel"
  ƒ-location-in="--qp"
  @-node-selected="--nodeSelected"
  @-qp-change-requested="--qpchangerequest"
  ƒ-trigger-navigation="--navigation"
>
  <!-- add the furo-navigation-pad for keyboard navigation -->
  <furo-navigation-pad @-navigated="--navigation"></furo-navigation-pad>
</furo-ui5-tree>

<!-- update the location -->
<furo-location-updater ƒ-set-qp="--qpchangerequest"></furo-location-updater>
<!-- track location changes -->
<furo-location @-location-query-changed="--qp"></furo-location>

<furo-data-object
type="tree.TreeEntity"
ƒ-inject-raw="--data"
@-object-ready="--entityObj"
></furo-data-object>
<furo-fetch-json
ƒ-fetch="--entityObj"
src="/mockdata/trees/1/testdata.json"
@-data="--data"
></furo-fetch-json>
```
