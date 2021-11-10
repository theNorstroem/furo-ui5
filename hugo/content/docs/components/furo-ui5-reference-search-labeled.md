---
title: furo-ui5-reference-search-labeled
description: labeled input field
weight: 50
---

# furo-ui5-reference-search-labeled
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-reference-search-labeled.js';`<small>
<br>exports *FuroUi5ReferenceSearchLabeled* js
<br>exports `<furo-ui5-reference-search-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-reference-search-labeled-head.md" %}}

**labeled input field**

`furo-ui5-reference-search-labeled`
The furo-ui5-reference-search-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-reference-search-labeled-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-reference-search-labeled-properties.md" %}}







### **service**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">service</span>
<small>`string` default: **&#39;&#39;**</small>

the service name
<br><br>

### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-reference-search
<br><br>

### **extendedSearcher**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">extended-searcher</span>
<small>`string` default: **&#39;&#39;**</small>

Define the extended searcher. Do not forget to import the searcher you want to use.
<br><br>

### **disableSearchList**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disable-search-list</span>
<small>`boolean` default: **false**</small>

A Boolean attribute which, if present, means this field can not be searched.

This is very useful when you want enforce the usage of the extended search
<br><br>

### **icon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon</span>
<small>`string` default: **&#39;search&#39;**</small>

Use this attribute to set a custom icon for your searcher
<br><br>

### **searchResponsePath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">search-response-path</span>
<small>`string` default: **&#39;entities&#39;**</small>

Path to the node in the response value which contains the array with the selection items.
By default this goes to *entitites*
<br><br>

### **valueFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">value-field-path</span>
<small>`string` default: **&#39;data.id&#39;**</small>

Path to response value item which is used for the id.
By default this goes to *data.id*
<br><br>

### **displayFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">display-field-path</span>
<small>`string` default: **&#39;data.display_name&#39;**</small>

Path to selection value node which is used for the display.
By default this goes to *data.display_name*
<br><br>

### **extendedValueFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">extended-value-field-path</span>
<small>`string` default: **&#39;data.id&#39;**</small>

Path to response value item of the exteded search which is used for the id.
By default this goes to *data.id*.
Only needed when your extended searcher does not have the id, display_name signature in the response.
<br><br>

### **extendedDisplayFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">extended-display-field-path</span>
<small>`string` default: **&#39;data.display_name&#39;**</small>

Path to response value item of the exteded search which is used for the display.
By default this goes to *data.display_name*.
Only needed when your extended searcher does not have the id, display_name signature in the response.
<br><br>

### **placeholder**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder</span>
</small>

Overrides the hint text from the **specs**.
Use with caution, normally the specs defines this value.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
</small>

A Boolean attribute which, if present, means this field cannot be edited by the user.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
</small>


<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
</small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

## Methods
{{% api "_furo-ui5-reference-search-labeled-methods.md" %}}


### **focus**
<small>**focus**(*options* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus</span>

Focuses the underlying ui5 input element

- <small>options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus</small>
<br><br>


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Orchestrates the data field connection to the inside

- <small>fieldNode </small>
<br><br>

### **setFilter**
<small>**setFilter**(*filter* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-filter</span>

sets the filter to the inner furo-ui5-reference-search

- <small>filter </small>
<br><br>


















{{% api "_furo-ui5-reference-search-labeled-footer.md" %}}
{{% api "_furo-ui5-reference-search-labeled-scripts.md" %}}
