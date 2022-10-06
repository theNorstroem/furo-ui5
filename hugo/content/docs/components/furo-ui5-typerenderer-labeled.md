---
title: furo-ui5-typerenderer-labeled
description: labeled input field
weight: 50
---

# furo-ui5-typerenderer-labeled
**@furo/ui5** <small>v1.12.3</small>
<br>`import '@furo/ui5/src/furo-ui5-typerenderer-labeled.js';`<small>
<br>exports *FuroUi5TyperendererLabeled* js
<br>exports `<furo-ui5-typerenderer-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled input field

## Description

`furo-ui5-typerenderer-labeled`
The furo-ui5-typerenderer-labeled is a composition to easily use a display field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-typerenderer-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-typerenderer-labeled-properties.md" %}}








### **context**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">context</span>
<small>`string` default: **&#39;display&#39;**</small>

Set the render context. Default is **display**, the type renderer set of @furo/ui5 supports
**cell**, **form**, **celledit**
<br><br>

### **full**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">full</span>
</small>

This is only used to forward the state to the form-field-container
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span> <small>**reflects**</small>
<small>`Boolean` </small>

Disabled State
<br><br>

## Methods
{{% api "_furo-ui5-typerenderer-labeled-methods.md" %}}


### **focus**
<small>**focus**(*null* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus</span>

focus Focuses the field

- <small>null </small>
<br><br>


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds the fieldNode to the component
binding set can be customised here otherwise the standard bindData in the ui5-data-input will be used

- <small>fieldNode </small>
<br><br>









{{% api "_furo-ui5-typerenderer-labeled-footer.md" %}}
{{% api "_furo-ui5-typerenderer-labeled-scripts.md" %}}
