---
title: cell-furo-fat-uint32
description: cell display renderer for `furo.fat.Uint32`
weight: 50
---

# cell-furo-fat-uint32
**@furo/ui5** <small>v1.0.0</small>
<br>`import '@furo/ui5/src/typerenderer/cell-furo-fat-uint32.js';`<small>
<br>exports `<cell-furo-fat-uint32>` custom-element-definition
<br>extends */src/typerenderer/cell-furo-fat-int32.js*
<br>superclass *CellFuroFatInt32*</small>

> **Summary:** cell display renderer for `furo.fat.Uint32`

## Description

`cell-furo-fat-uint32`
The cell-furo-fat-uint32 component displays a FieldNode of type `furo.fat.Uint32` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-furo-fat-uint32-head.md" %}}

## Attributes and Properties
{{% api "_cell-furo-fat-uint32-properties.md" %}}






## Methods
{{% api "_cell-furo-fat-uint32-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>





{{% api "_cell-furo-fat-uint32-footer.md" %}}
{{% api "_cell-furo-fat-uint32-scripts.md" %}}
