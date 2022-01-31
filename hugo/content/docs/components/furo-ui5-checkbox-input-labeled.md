---
title: furo-ui5-checkbox-input-labeled
description: labeled input field
weight: 50
---

# furo-ui5-checkbox-input-labeled
**@furo/ui5** <small>v1.0.0-rc.17</small>
<br>`import '@furo/ui5/src/furo-ui5-checkbox-input-labeled.js';`<small>
<br>exports *FuroUi5CheckboxInputLabeled* js
<br>exports `<furo-ui5-checkbox-input-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled input field

## Description

The furo-ui5-checkbox-input-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

```html
<furo-ui5-checkbox-input-labeled ƒ-bind-data="--dao(FIELDNODE)"></furo-ui5-checkbox-labeled>
```

{{% api "_furo-ui5-checkbox-input-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-checkbox-input-labeled-properties.md" %}}





### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-checkbox-input
<br><br>

### **placeholder**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">placeholder</span>
</small>

the placeholder is the additional information beside the label. it will be showed on the right side of the checkbox.
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

## Methods
{{% api "_furo-ui5-checkbox-input-labeled-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a FieldNode to the component.

Supported types: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`

- <small>fieldNode Supported types: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`</small>
<br><br>









{{% api "_furo-ui5-checkbox-input-labeled-footer.md" %}}
{{% api "_furo-ui5-checkbox-input-labeled-scripts.md" %}}
