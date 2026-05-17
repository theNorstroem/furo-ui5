---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-ui5-textarea-input
    fn-bind-data="--dataObject(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input>
<hr>
<furo-ui5-typerenderer-labeled fn-bind-data="--dataObject(*.furo_data_textarea_input)"></furo-ui5-typerenderer-labeled>
<furo-ui5-typerenderer-labeled disabled fn-bind-data="--dataObject(*.furo_data_textarea_input)"></furo-ui5-typerenderer-labeled>
<furo-ui5-typerenderer-labeled disabled context="form" fn-bind-data="--dataObject(*.furo_data_textarea_input)"></furo-ui5-typerenderer-labeled>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>
