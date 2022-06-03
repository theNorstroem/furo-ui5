---
title: furo-ui5-time-picker-labeled
description: labeled input field
weight: 50
---

# furo-ui5-time-picker-labeled
**@furo/ui5** <small>v1.5.1</small>
<br>`import '@furo/ui5/src/furo-ui5-time-picker-labeled.js';`<small>
<br>exports *FuroUi5TimePickerLabeled* js
<br>exports `<furo-ui5-time-picker-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled input field

## Description

`furo-ui5-time-picker-labeled`
The furo-ui5-time-picker-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-time-picker-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-time-picker-labeled-properties.md" %}}





### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`String` default: **&#39;&#39;**</small>

the label for the data-date-picker
<br><br>

### **formatPattern**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">format-pattern</span>
<small>`String` </small>

forwards the format-pattern to the furo-ui5-time-picker component.
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span> <small>**reflects**</small>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field cannot be edited by the user.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>
## Events
{{% api "_furo-ui5-time-picker-labeled-events.md" %}}

### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes in ISO 8601 format.
<br><br>

## Methods
{{% api "_furo-ui5-time-picker-labeled-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Orchestrates the data field connection to the inside

- <small>fieldNode </small>
<br><br>









{{% api "_furo-ui5-time-picker-labeled-footer.md" %}}
{{% api "_furo-ui5-time-picker-labeled-scripts.md" %}}
