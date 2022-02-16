---
title: cell-uint32
description: cell display renderer for `uint32`
weight: 50
---

# cell-uint32
**@furo/ui5** <small>v1.0.0-rc.26</small>
<br>`import '@furo/ui5/src/typerenderer/cell-uint32.js';`<small>
<br>exports *CellUint32* js
<br>exports `<cell-uint32>` custom-element-definition
<br>extends */src/typerenderer/cell-int32.js*
<br>superclass *CellInt32*</small>

> **Summary:** cell display renderer for `uint32`

## Description

`cell-uint32`
The cell-uint32 component displays a FieldNode of type `uint32` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-uint32-head.md" %}}

## Attributes and Properties
{{% api "_cell-uint32-properties.md" %}}






## Methods
{{% api "_cell-uint32-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>






{{% api "_cell-uint32-footer.md" %}}
{{% api "_cell-uint32-scripts.md" %}}
