---
title: cell-google-type-money
description: cell display renderer for `google.type.Money`
weight: 50
---

# cell-google-type-money
**@furo/ui5** <small>v1.0.0-rc.18</small>
<br>`import '@furo/ui5/src/typerenderer/cell-google-type-money.js';`<small>
<br>exports *CellGoogleTypeMoney* js
<br>exports `<cell-google-type-money>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** cell display renderer for `google.type.Money`

## Description

`cell-google-type-money`
The cell-google-type-money component displays a FieldNode of type `google.type.Money` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-google-type-money-head.md" %}}

## Attributes and Properties
{{% api "_cell-google-type-money-properties.md" %}}








## Methods
{{% api "_cell-google-type-money-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>








{{% api "_cell-google-type-money-footer.md" %}}
{{% api "_cell-google-type-money-scripts.md" %}}
