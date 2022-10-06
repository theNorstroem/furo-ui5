---
title: furo-ui5-textarea-input-labeled
description: labeled textarea field
weight: 50
---

# furo-ui5-textarea-input-labeled
**@furo/ui5** <small>v1.13.0</small>
<br>`import '@furo/ui5/src/furo-ui5-textarea-input-labeled.js';`<small>
<br>exports *FuroUi5TextareaInputLabeled* js
<br>exports `<furo-ui5-textarea-input-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled textarea field

## Description

`furo-ui5-textarea-input-labeled`
The furo-ui5-textarea-input-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-textarea-input-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-textarea-input-labeled-properties.md" %}}






### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-textarea-input
<br><br>

### **rows**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">rows</span>
<small>`number` default: **0**</small>

Defines the number of visible text lines for the component.
<br><br>

### **growingMaxLines**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">growing-max-lines</span>
<small>`number` default: **0**</small>

Defines the maximum number of lines that the Web Component can grow.
<br><br>

### **full**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">full</span>
</small>

This is only used to forward the state to the form-field-container
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field cannot be edited by the user.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>

### **showExceededText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-exceeded-text</span>
<small>`Boolean` </small>

Determines whether the characters exceeding the maximum allowed character count are visible in the furo-ui5-textarea-input.

If set to false, the user is not allowed to enter more characters than what is set in the maxlength property.
If set to true the characters exceeding the maxlength value are selected on paste and the counter below
the furo-ui5-textarea-input displays their number.
<br><br>

### **growing**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">growing</span>
<small>`Boolean` </small>

Enables the furo-ui5-textarea to automatically grow and shrink dynamically with its content.
<br><br>

## Methods
{{% api "_furo-ui5-textarea-input-labeled-methods.md" %}}


### **focus**
<small>**focus**(*options* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus</span>

Focuses the underlying ui5 input element

- <small>options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus</small>
<br><br>


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Orchestrates the data field connection to the inside

- <small>fieldNode </small>
<br><br>













{{% api "_furo-ui5-textarea-input-labeled-footer.md" %}}
{{% api "_furo-ui5-textarea-input-labeled-scripts.md" %}}
