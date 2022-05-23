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
    ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input>
<hr>
<furo-ui5-typerenderer-labeled ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"></furo-ui5-typerenderer-labeled>
<furo-ui5-typerenderer-labeled disabled ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"></furo-ui5-typerenderer-labeled>
<furo-ui5-typerenderer-labeled disabled context="form" ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"></furo-ui5-typerenderer-labeled>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>
