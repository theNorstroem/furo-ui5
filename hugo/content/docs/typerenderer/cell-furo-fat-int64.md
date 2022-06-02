---
title: cell-furo-fat-int64
description: cell display renderer for `furo.fat.Int64`
weight: 50
---

# cell-furo-fat-int64
**@furo/ui5** <small>v1.5.1</small>
<br>`import '@furo/ui5/src/typerenderer/cell-furo-fat-int64.js';`<small>
<br>exports *CellFuroFatInt64* js
<br>exports `<cell-furo-fat-int64>` custom-element-definition
<br>extends */src/typerenderer/cell-furo-fat-int32.js*
<br>superclass *CellFuroFatInt32*</small>

> **Summary:** cell display renderer for `furo.fat.Int64`

## Description

`cell-furo-fat-int64`
The cell-furo-fat-int64 component displays a FieldNode of type `furo.fat.int64` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-furo-fat-int64-head.md" %}}

## Attributes and Properties
{{% api "_cell-furo-fat-int64-properties.md" %}}






## Methods
{{% api "_cell-furo-fat-int64-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>





{{% api "_cell-furo-fat-int64-footer.md" %}}
{{% api "_cell-furo-fat-int64-scripts.md" %}}
