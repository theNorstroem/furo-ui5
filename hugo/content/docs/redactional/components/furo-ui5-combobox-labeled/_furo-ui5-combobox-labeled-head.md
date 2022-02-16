---
booksearchexclude: false
bookToc: false
bookHidden: true
---

### Example

<script type="module" src="/init.js"></script>

<furo-demo-snippet>
<template>
<furo-ui5-combobox-labeled placeholder="Enter value" ƒ-bind-data="--dao(*.type_with_options)"></furo-ui5-combobox-labeled>
<furo-data-object type="experiment.Experiment" @-object-ready="--dao"></furo-data-object>
</template>
</furo-demo-snippet>

### Markup
```html

<furo-ui5-combobox-labeled placeholder="Enter value" 
                           ƒ-bind-data="--dao(*.type_with_options)"></furo-ui5-combobox-labeled>

<furo-data-object type="experiment.Experiment" 
                  @-object-ready="--dao"></furo-data-object>

```
