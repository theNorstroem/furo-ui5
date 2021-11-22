---
title: furo-ui5-table
description: Display repeated fields in a table
weight: 50
---

# furo-ui5-table
**@furo/components** <small>v1.0.0-rc.2</small>
<br>`import '@furo/components/src/furo-ui5-table.js';`<small>
<br>exports *FuroUi5Table* js
<br>exports `<furo-ui5-table>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-table-head.md" %}}

**Display repeated fields in a table**

`furo-ui5-table` display entities in a ui5-table

```html
<furo-ui5-table
 ƒ-bind-data="--data(*.entities)"
>
 <!-- The column label is evaluated from the specs -->
  <ui5-table-column
    slot="columns"
    field="*.data.fieldname"
  ></ui5-table-column>

  <ui5-table-column
    slot="columns"
    field="*.data.display_name"
  ><span>Custom Title</span></ui5-table-column>

</furo-ui5-table>
```

## Attributes which are taken from `ui5-table-column`

### **field**
Define the field you want to bind. `*` is the root of the repeated field.

### **context**
Set a context for the type renderer. The default value is `cell`.

**renderer**
Set a specific renderer component for the column. If not set, the renderer is evaluated from the type of the bound field.

{{% api "_furo-ui5-table-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-table-properties.md" %}}













### **cols**
default: **[]**</small>


<br><br>

### **_specs**
</small>


<br><br>

### **data**
default: **[]**</small>


<br><br>

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
</small>

the text which can be showed when there is no data in table.
string
<br><br>

### **stickyColumnHeader**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">sticky-column-header</span>
</small>

define the header is sticky or not
<br><br>

### **busy**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">busy</span>
</small>

Busy state
<br><br>
## Events
{{% api "_furo-ui5-table-events.md" %}}

### **data-loaded**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-data-loaded</span>
→ <small>`HTMLElement`</small>

Fired when the data is loaded into data table. The event detail contains the data table self.
<br><br>
### **arrow-down-on-last-row**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-arrow-down-on-last-row</span>
→ <small>`entity`</small>

Fired when the ArrowDown is pressed on the last row. The event detail is the original entity of the row
<br><br>
### **tablerow-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-tablerow-selected</span>
→ <small>`entity`</small>

Fired when the row is selected. The event detail is the original entity of the row.
<br><br>
### **arrow-up-on-first-row**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-arrow-up-on-first-row</span>
→ <small>`entity`</small>

Fired when the ArrowUp is pressed on the first row. The event detail is the original entity of the row
<br><br>
### **rows-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-rows-selected</span>
→ <small>`Array with the selected items`</small>

Fired when the row selection in MultiSelect mode was changed
<br><br>

## Methods
{{% api "_furo-ui5-table-methods.md" %}}


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--fbp-ready</span>



<br><br>

### **bindData**
<small>**bindData**(*data* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

bind a repeated data

- <small>data </small>
<br><br>

### **focus**
<small>**focus**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus</span>

focus on the header of the table

<br><br>

### **focusLast**
<small>**focusLast**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-last</span>

focus the first row

<br><br>

### **focusFirst**
<small>**focusFirst**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-first</span>

focus the first row

<br><br>




### **setBusy**
<small>**setBusy**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-busy</span>

setBusy Sets the busy state

<br><br>

### **unsetBusy**
<small>**unsetBusy**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-unset-busy</span>

unsetBusy Unsets the busy state

<br><br>











{{% api "_furo-ui5-table-footer.md" %}}
{{% api "_furo-ui5-table-scripts.md" %}}
