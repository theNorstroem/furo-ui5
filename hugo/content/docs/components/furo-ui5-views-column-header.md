---
title: furo-ui5-views-column-header
description: Shows a sort direction icon
weight: 50
---

# furo-ui5-views-column-header
**@furo/ui5** <small>v1.15.0</small>
<br>`import '@furo/ui5/src/furo-ui5-views/furo-ui5-views-column-header.js';`<small>
<br>exports `<furo-ui5-views-column-header>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Shows a sort direction icon

## Description

`furo-ui5-views-column-header`

 Displays a sort direction icon in the table header.

 ```html
<ui5-table-column
              slot="columns"
              field="*.nr"
              id="nr"
              popin-text="${i18n.t('activity_nr')}"
              ><furo-ui5-views-column-header><span>${i18n.t('activity_nr')}</span></furo-ui5-views-column-header>
              </ui5-table-column>
```

{{% api "_furo-ui5-views-column-header-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-views-column-header-properties.md" %}}






### **_icon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">_icon</span>
<small>`string` default: **&#39;sort-ascending&#39;**</small>


<br><br>

### **_hidesort**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">_hidesort</span>
</small>

Description
<br><br>

## Methods
{{% api "_furo-ui5-views-column-header-methods.md" %}}


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>

### **showSort**
<small>**showSort**(*descending* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-show-sort</span>

set the sort indicator

- <small>descending </small>
<br><br>

### **clear**
<small>**clear**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-clear</span>

remove the sorting

<br><br>






{{% api "_furo-ui5-views-column-header-footer.md" %}}
{{% api "_furo-ui5-views-column-header-scripts.md" %}}
