---
title: cell-furo-bigdecimal
description: cell display renderer for type `furo.BigDecimal`
weight: 50
---

# cell-furo-bigdecimal
**@furo/ui5** <small>v1.0.0-rc.18</small>
<br>`import '@furo/ui5/src/typerenderer/cell-furo-bigdecimal.js';`<small>
<br>exports `<cell-furo-bigdecimal>` custom-element-definition
<br>extends */src/typerenderer/cell-float.js*
<br>superclass *CellFloat*</small>

> **Summary:** cell display renderer for type `furo.BigDecimal`

## Description

The `cell-furo-bigdecimal`  component displays a FieldNode of type `furo.BigDecimal` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

{{% api "_cell-furo-bigdecimal-head.md" %}}

## Attributes and Properties
{{% api "_cell-furo-bigdecimal-properties.md" %}}





### **_displayValue**
default: **&#39;&#39;**</small>


<br><br>

## Methods
{{% api "_cell-furo-bigdecimal-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>





{{% api "_cell-furo-bigdecimal-footer.md" %}}
{{% api "_cell-furo-bigdecimal-scripts.md" %}}
