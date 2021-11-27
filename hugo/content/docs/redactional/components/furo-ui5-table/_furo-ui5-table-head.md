---
booksearchexclude: false
bookToc: false
bookHidden: true
---

### Example 

The default typerenderer context for the cells is **cell**. You can set the context on the `ui5-table-column`.  

<script type="module" src="/init.js"></script>


<furo-demo-snippet>
<template>
<button @-click="--read">load data</button><br><br>
<furo-ui5-table
 ƒ-bind-data="--collection(*.entities)"
>
 <!-- The column label is evaluated from the specs -->
  <ui5-table-column
    slot="columns"
    field="*.data.phone_nr"
  ></ui5-table-column>  <ui5-table-column
    slot="columns"
    field="*.data.first_name"
  ></ui5-table-column> <ui5-table-column
    slot="columns"
    context="celledit"
    field="*.data.first_name"
  ></ui5-table-column>
<ui5-table-column
  slot="columns"
  field="*.data.name"
><span>Custom Title</span></ui5-table-column>
</furo-ui5-table>
<furo-data-object
  type="person.PersonCollection"
  @-object-ready="--collection"
  ƒ-inject-raw="--response"></furo-data-object>
  <furo-fetch-json
    ƒ-fetch="--read"
    src="/mockdata/persons/list.json"
    @-data="--response"
    ></furo-fetch-json>
</template>
</furo-demo-snippet>

#### Markup
```html
<furo-ui5-table
  ƒ-bind-data="--collection(*.entities)">
  <!-- The column label is evaluated from the specs -->
  <ui5-table-column
    slot="columns"
    field="*.data.phone_nr"
  ></ui5-table-column> 
  <ui5-table-column
    slot="columns"
    field="*.data.first_name"
  ></ui5-table-column>
  <!-- set a context for the typerenderer -->
  <ui5-table-column
    slot="columns"
    context="celledit"
    field="*.data.first_name"
  ></ui5-table-column>
  <!-- Setting a custom label -->
  <ui5-table-column
    slot="columns"
    field="*.data.name"
  ><span>Custom Title</span></ui5-table-column>
</furo-ui5-table>

<furo-data-object
  type="person.PersonCollection"
  @-object-ready="--collection"
  ƒ-inject-raw="--response"></furo-data-object>

```
