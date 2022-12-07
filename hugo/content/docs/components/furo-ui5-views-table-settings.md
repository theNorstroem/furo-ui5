---
title: furo-ui5-views-table-settings
description: table settings dialog
weight: 50
---

# furo-ui5-views-table-settings
**@furo/ui5** <small>v1.15.0</small>
<br>`import '@furo/ui5/src/furo-ui5-views/furo-ui5-views-table-settings.js';`<small>
<br>exports `<furo-ui5-views-table-settings>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** table settings dialog

## Description

`furo-ui5-views-table-settings`  contains the dialog for the table settings for a `furo-ui5-views`.

{{% api "_furo-ui5-views-table-settings-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-views-table-settings-properties.md" %}}








### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tablesettings-header-text</span>
<small>`string` default: **&#39;View Settings&#39;**</small>

Title of the dialog.
<br><br>

### **tabColumnsLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tab-columns-label</span>
<small>`string` default: **&#39;Columns&#39;**</small>

Label for the column tab.
<br><br>

### **tabSortLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tab-sort-label</span>
<small>`string` default: **&#39;Sort&#39;**</small>

Label for the sorter tab.
<br><br>

### **okButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">ok-button-text</span>
<small>`string` default: **&#39;Ok&#39;**</small>

Label for the OK button.
<br><br>

### **cancelButtonText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">cancel-button-text</span>
<small>`string` default: **&#39;Cancel&#39;**</small>

Label for the cancel button.
<br><br>

### **colheaderField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-field</span>
<small>`string` default: **&#39;Field&#39;**</small>

Titel for the field column.
<br><br>

### **colheaderPosition**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">colheader-position</span>
<small>`string` default: **&#39;Position&#39;**</small>

Titel for the Position column.
<br><br>

### **labelEmptySelect**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label-empty-select</span>
<small>`string` default: **&#39;Sort By&#39;**</small>

Text for the "pleace select" dropdown entry.
<br><br>

### **placeholderSearch**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder-search</span>
<small>`string` default: **&#39;Search&#39;**</small>

Placeholder for the searcher field.
<br><br>

### **rowType**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">row-type</span>
</small>

Define the type for a row
<br><br>

### **requiredFields**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required-fields</span>
</small>

Define fields that are required for your business logic. Required fields are always requested from the server
even when they are not displayed.
<br><br>

### **sortable**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">sortable</span>
</small>

Set this to true to enable the sorting view in the dialog.
<br><br>

## Methods
{{% api "_furo-ui5-views-table-settings-methods.md" %}}


### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-show</span>

show

<br><br>

### **bindSettings**
<small>**bindSettings**(*e* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-settings</span>

Bind the settings component from `furo-ui5-views`.

- <small>e complete event</small>
<br><br>



### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>
















{{% api "_furo-ui5-views-table-settings-footer.md" %}}
{{% api "_furo-ui5-views-table-settings-scripts.md" %}}
