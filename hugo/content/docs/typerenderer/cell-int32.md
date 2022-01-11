---
title: cell-int32
description: cell display renderer for `int32`
weight: 50
---

# cell-int32
**@furo/typerenderer** <small>v1.0.0-rc.15</small>
<br>`import '@furo/typerenderer/src/cell-int32.js';`<small>
<br>exports *CellInt32* js
<br>exports `<cell-int32>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** cell display renderer for `int32`

## Description

`cell-int32`
The cell-int32 component displays a FieldNode of type `int32` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-int32-head.md" %}}

## Attributes and Properties
{{% api "_cell-int32-properties.md" %}}






## Methods
{{% api "_cell-int32-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>






{{% api "_cell-int32-footer.md" %}}
{{% api "_cell-int32-scripts.md" %}}
