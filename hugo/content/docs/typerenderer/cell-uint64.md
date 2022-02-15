---
title: cell-uint64
description: cell display renderer for `uint64`
weight: 50
---

# cell-uint64
**@furo/ui5** <small>v1.0.0-rc.25</small>
<br>`import '@furo/ui5/src/typerenderer/cell-uint64.js';`<small>
<br>exports *CellUint64* js
<br>exports `<cell-uint64>` custom-element-definition
<br>extends */src/typerenderer/cell-int64.js*
<br>superclass *CellInt64*</small>

> **Summary:** cell display renderer for `uint64`

## Description

`cell-uint64`
The cell-uint64 component displays a FieldNode of type `uint64` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-uint64-head.md" %}}

## Attributes and Properties
{{% api "_cell-uint64-properties.md" %}}






## Methods
{{% api "_cell-uint64-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>






{{% api "_cell-uint64-footer.md" %}}
{{% api "_cell-uint64-scripts.md" %}}
