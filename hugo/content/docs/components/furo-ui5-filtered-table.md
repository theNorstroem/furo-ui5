---
title: furo-ui5-filtered-table
description: table with flexible columns
weight: 50
---

# furo-ui5-filtered-table
**@furo/ui5** <small>v1.15.1</small>
<br>`import '@furo/ui5/src/furo-ui5-views/furo-ui5-filtered-table.js';`<small>
<br>exports `<furo-ui5-filtered-table>` custom-element-definition
<br>extends */src/furo-ui5-table.js*
<br>superclass *FuroUi5Table*</small>

> **Summary:** table with flexible columns

## Description

`furo-ui5-filtered-table` is a table which work with `furo-ui5-views`. It accepts field orders and a set of visible fields.

It works like a `furo-ui5-table` but has the ability to reorder the columns. The only action you have to take is to set
the `id` attribute on the `ui5-table-column`. The id must match to the `field_name` attribute on the table_settings.

```html
          <furo-ui5-filtered-table*
            fn-bind-data="--collectionDao(*.entities)"
            fn-set-columns="|--setColumns"
          >
            <ui5-table-column
              slot="columns"
              field="*.data.id"
              id="id"
              min-width="650"
              demand-popin
              popin-text="id"
              ><span>id</span></ui5-table-column
            >
            <ui5-table-column
              slot="columns"
              field="*.data.display_name"
              id="display_name"
              min-width="400"
              demand-popin
              popin-text="display_name"
              ><span>display_name</span></ui5-table-column
            >
```

{{% api "_furo-ui5-filtered-table-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-filtered-table-properties.md" %}}




















### **mode**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">mode</span>
<small>`string` default: **&#39;None&#39;**</small>

Defines the mode of the component.

Available options are:
- MultiSelect
- SingleSelect
- None
<br><br>

### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-data-text</span>
<small>`String` </small>

Defines the text that will be displayed when there is no data.
string
<br><br>

### **identityPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">identity-path</span>
<small>`*` </small>

string}
<br><br>

### **stickyColumnHeader**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">sticky-column-header</span>
<small>`Boolean` </small>

Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport.
<br><br>

### **busy**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">busy</span>
<small>`Boolean` </small>

Busy state
<br><br>
## Events
{{% api "_furo-ui5-filtered-table-events.md" %}}

### **data-loaded**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-data-loaded</span>
→ <small>`HTMLElement`</small>

Fired when the data is loaded into data table. The event detail contains the data table self.
<br><br>
### **arrow-down-on-last-row**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-arrow-down-on-last-row</span>
→ <small>`entity`</small>

Fired when the ArrowDown is pressed on the last row. The event detail is the original entity of the row
<br><br>
### **tablerow-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-tablerow-selected</span>
→ <small>`entity`</small>

Fired when the row is selected. The event detail is the original entity of the row.
<br><br>
### **arrow-up-on-first-row**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-arrow-up-on-first-row</span>
→ <small>`entity`</small>

Fired when the ArrowUp is pressed on the first row. The event detail is the original entity of the row
<br><br>
### **rows-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-rows-selected</span>
→ <small>`Array with the selected items`</small>

Fired when the row selection in MultiSelect mode was changed
<br><br>

## Methods
{{% api "_furo-ui5-filtered-table-methods.md" %}}




### **setOrderBy**
<small>**setOrderBy**(*sort* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-order-by</span>

This is only used to set the order icons on the table headers. You have to use a `furo-ui5-views-column-header` in the
header slot for this.

```html
<ui5-table-column
              slot="columns"
              field="*.nr"
              id="nr"
              popin-text="${i18n.t('activity_nr')}"
              ><furo-ui5-views-column-header><span>${i18n.t('activity_nr')}</span></furo-ui5-views-column-header>
              </ui5-table-column>
```

The value comes from the event `order-by-changed`, which is emited by the component `furo-ui5-views-table-settings`.

- <small>sort </small>
<br><br>

### **setColumns**
<small>**setColumns**(*sortedlist* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-columns</span>

setColumns sets the column order and the visible columns

- <small>sortedlist </small>
<br><br>



### **bindData**
<small>**bindData**(*data* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Bind a repeated data node.

- <small>data </small>
<br><br>

### **focus**
<small>**focus**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus</span>

Focuses the header of the table

<br><br>

### **focusLast**
<small>**focusLast**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus-last</span>

Focuses the last row.

<br><br>

### **focusFirst**
<small>**focusFirst**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus-first</span>

Focuses the first row.

<br><br>



### **setBusy**
<small>**setBusy**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-busy</span>

setBusy Sets the busy state

<br><br>

### **unsetBusy**
<small>**unsetBusy**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-unset-busy</span>

unsetBusy Unsets the busy state

<br><br>












{{% api "_furo-ui5-filtered-table-footer.md" %}}
{{% api "_furo-ui5-filtered-table-scripts.md" %}}
