---
title: furo-ui5-date-time-picker-labeled
description: labeled input field
weight: 50
---

# furo-ui5-date-time-picker-labeled
**@furo/components** <small>v1.0.0-rc.7</small>
<br>`import '@furo/components/src/furo-ui5-date-time-picker-labeled.js';`<small>
<br>exports *FuroUi5DateTimePickerLabeled* js
<br>exports `<furo-ui5-date-time-picker-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled input field

## Description

The furo-ui5-date-time-picker-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

```html
<furo-ui5-date-time-picker-labeled ƒ-bind-data="--dao(FIELDNODE)"></furo-ui5-date-time-picker-labeled>
```

{{% api "_furo-ui5-date-time-picker-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-date-time-picker-labeled-properties.md" %}}





### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-date-picker
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
</small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
</small>

A Boolean attribute which, if present, means this field cannot be edited by the user.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
</small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>
## Events
{{% api "_furo-ui5-date-time-picker-labeled-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes in ISO 8601 format.
<br><br>

## Methods
{{% api "_furo-ui5-date-time-picker-labeled-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Orchestrates the data field connection to the inner components.
Supported types: string, google.protobuf.Timestamp, int32, int64

- <small>fieldNode </small>
<br><br>








{{% api "_furo-ui5-date-time-picker-labeled-footer.md" %}}
{{% api "_furo-ui5-date-time-picker-labeled-scripts.md" %}}
