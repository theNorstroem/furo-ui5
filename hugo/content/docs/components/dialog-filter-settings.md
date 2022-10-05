---
title: dialog-filter-settings
description: Helper component
weight: 50
---

# dialog-filter-settings
**@furo/ui5** <small>v1.12.3</small>
<br>`import '@furo/ui5/src/furo-ui5-views/filter/dialog-filter-settings.js';`<small>
<br>exports `<dialog-filter-settings>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Helper component

## Description

`DialogFilterSettings`
is a helper component for `FuroUi5ViewsFilterSettings`

{{% api "_dialog-filter-settings-head.md" %}}

## Attributes and Properties
{{% api "_dialog-filter-settings-properties.md" %}}









### **colheaderField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-field</span>
<small>`string` default: **&#39;Field&#39;**</small>


<br><br>

### **colheaderPosition**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-position</span>
<small>`string` default: **&#39;Position&#39;**</small>


<br><br>

### **colheaderValue**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-value</span>
<small>`string` default: **&#39;Value&#39;**</small>


<br><br>

### **placeholderSearch**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder-search</span>
<small>`string` default: **&#39;Search&#39;**</small>


<br><br>

### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">filtersettings-header-text</span>
<small>`string` default: **&#39;Adapt Filter&#39;**</small>


<br><br>

## Methods
{{% api "_dialog-filter-settings-methods.md" %}}


### **bindFilter**
<small>**bindFilter**(*fieldnode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-filter</span>

bindFilter

- <small>fieldnode </small>
<br><br>

### **dialogOpened**
<small>**dialogOpened**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-dialog-opened</span>

Trigger this method after the dialog (parent) is opened.

<br><br>

### **bindSettings**
<small>**bindSettings**(*e* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-settings</span>

bindSettings

- <small>e complete event</small>
<br><br>

### **moveNode**
<small>**moveNode**(*fromIndex* `` *toIndex* `` ) ⟹ `void`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-move-node</span>



- <small>fromIndex </small>
- <small>toIndex </small>
<br><br>

### **_updateSettings**
<small>**_updateSettings**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--update-settings</span>



<br><br>

### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>









{{% api "_dialog-filter-settings-footer.md" %}}
{{% api "_dialog-filter-settings-scripts.md" %}}
