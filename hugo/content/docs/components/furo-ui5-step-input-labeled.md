---
title: furo-ui5-step-input-labeled
description: labeled input field
weight: 50
---

# furo-ui5-step-input-labeled
**@furo/ui5** <small>v1.0.0-rc.24</small>
<br>`import '@furo/ui5/src/furo-ui5-step-input-labeled.js';`<small>
<br>exports *FuroUi5StepInputLabeled* js
<br>exports `<furo-ui5-step-input-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled input field

## Description

The furo-ui5-step-input-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

```html
<furo-ui5-step-input ƒ-bind-data="--dao(FIELDNODE)"></furo-ui5-step-input>
```

{{% api "_furo-ui5-step-input-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-step-input-labeled-properties.md" %}}






### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-step-input
<br><br>

### **icon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon</span>
<small>`string` default: **&#39;&#39;**</small>


<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
</small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
</small>

A Boolean attribute which, if present, means this field cannot be edited by the user and
appears in disabled state.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
</small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>

### **step**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">step</span>
</small>


<br><br>

### **min**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">min</span>
</small>


<br><br>

### **max**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">max</span>
</small>


<br><br>
## Events
{{% api "_furo-ui5-step-input-labeled-events.md" %}}

### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>`Step`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-step-input-labeled-methods.md" %}}


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
Supported types:
double, float, int32, uint32, sint32, fixed32, sfixed32, int64, uint64, sint64, fixed64, sfixed64
google.protobuf.DoubleValue, google.protobuf.FloatValue, google.protobuf.Int32Value, etc.
furo.fat.Doube, furo.fat.Float, furo.fat.Int32, etc.

- <small>fieldNode </small>
<br><br>












{{% api "_furo-ui5-step-input-labeled-footer.md" %}}
{{% api "_furo-ui5-step-input-labeled-scripts.md" %}}