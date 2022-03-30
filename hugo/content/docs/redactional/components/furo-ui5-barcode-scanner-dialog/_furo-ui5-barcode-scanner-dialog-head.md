---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<ui5-button @-click="--openClicked" design="Default">Open</ui5-button>
<furo-ui5-barcode-scanner-dialog ƒ-bind-data="--dataObject(*.furo_data_textarea_input)" ƒ-show="--openClicked"></furo-ui5-barcode-scanner-dialog>
<furo-ui5-textarea-input
    ƒ-bind-data="--dataObject(*.furo_data_textarea_input)"
 ></furo-ui5-textarea-input>
<furo-data-object
  type="experiment.Experiment"
  @-object-ready="--dataObject"
></furo-data-object>
</template>
</furo-demo-snippet>

```html
<ui5-button @-click="--openClicked" design="Default">Open</ui5-button>
<furo-ui5-barcode-scanner-dialog ƒ-show="--openClicked"></furo-ui5-barcode-scanner-dialog>
```
