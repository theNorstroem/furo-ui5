---
title: furo-ui5-date-time-picker-labeled
description: labeled input field
weight: 50
---

# furo-ui5-date-time-picker-labeled
**@furo/ui5** <small>v1.13.0</small>
<br>`import '@furo/ui5/src/furo-ui5-date-time-picker-labeled.js';`<small>
<br>exports *FuroUi5DateTimePickerLabeled* js
<br>exports `<furo-ui5-date-time-picker-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled input field

## Description

The furo-ui5-date-time-picker-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

```html
<furo-ui5-date-time-picker-labeled fn-bind-data="--dao(FIELDNODE)"></furo-ui5-date-time-picker-labeled>
```

{{% api "_furo-ui5-date-time-picker-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-date-time-picker-labeled-properties.md" %}}






### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-date-picker
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

### **formatPattern**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">format-pattern</span>
</small>

Determines the format, displayed in the input field.
<br><br>
## Events
{{% api "_furo-ui5-date-time-picker-labeled-events.md" %}}

### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes in ISO 8601 format.
<br><br>

## Methods
{{% api "_furo-ui5-date-time-picker-labeled-methods.md" %}}



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

Binds a FieldNode to the component.

Supported types: `string`, `google.protobuf.Timestamp`, `int32`, `int64`

- <small>fieldNode of type : `string`, `google.protobuf.Timestamp`, `int32`, `int64`</small>
<br><br>










{{% api "_furo-ui5-date-time-picker-labeled-footer.md" %}}
{{% api "_furo-ui5-date-time-picker-labeled-scripts.md" %}}
