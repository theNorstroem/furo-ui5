---
title: furo-ui5-views-filter-settings
description: filter dialog
weight: 50
---

# furo-ui5-views-filter-settings
**@furo/ui5** <small>v1.12.3</small>
<br>`import '@furo/ui5/src/furo-ui5-views/furo-ui5-views-filter-settings.js';`<small>
<br>exports `<furo-ui5-views-filter-settings>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** filter dialog

## Description

`furo-ui5-views-filter-settings` contains the dialog for the filter settings for a `furo-ui5-views`.

{{% api "_furo-ui5-views-filter-settings-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-views-filter-settings-properties.md" %}}







### **colheaderField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-field</span>
<small>`string` default: **&#39;Field&#39;**</small>

Title for the field column.
<br><br>

### **colheaderPosition**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-position</span>
<small>`string` default: **&#39;Position&#39;**</small>

Title for the position column.
<br><br>

### **colheaderValue**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-value</span>
<small>`string` default: **&#39;Value&#39;**</small>

Title for the value column.
<br><br>

### **placeholderSearch**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder-search</span>
<small>`string` default: **&#39;Search&#39;**</small>

Placeholder text for the searcher.
<br><br>

### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">filtersettings-header-text</span>
<small>`string` default: **&#39;Adapt Filter&#39;**</small>

Title for the dialog.
<br><br>

## Methods
{{% api "_furo-ui5-views-filter-settings-methods.md" %}}


### **bindFilter**
<small>**bindFilter**(*fieldnode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-filter</span>

Bind the filter DO.

- <small>fieldnode </small>
<br><br>

### **bindSettings**
<small>**bindSettings**(*fieldnode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-settings</span>

Bind the settings DO from `furo-ui5-views`.

- <small>fieldnode </small>
<br><br>

### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-show</span>

Opens the filter dialog.

<br><br>

### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>









{{% api "_furo-ui5-views-filter-settings-footer.md" %}}
{{% api "_furo-ui5-views-filter-settings-scripts.md" %}}
