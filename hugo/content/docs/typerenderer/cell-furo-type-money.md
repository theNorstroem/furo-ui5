---
title: cell-furo-type-money
description: cell display renderer for `furo.type.Money`
weight: 50
---

# cell-furo-type-money
**@furo/ui5** <small>v1.4.3</small>
<br>`import '@furo/ui5/src/typerenderer/cell-furo-type-money.js';`<small>
<br>exports `<cell-furo-type-money>` custom-element-definition
<br>extends */src/typerenderer/cell-google-type-money.js*
<br>superclass *CellGoogleTypeMoney*</small>

> **Summary:** cell display renderer for `furo.type.Money`

## Description

`cell-furo-type-money`
The cell-furo-type-money component displays a FieldNode of type `furo.type.Money` in read only mode.

if the field `display_name` is set, the component will use that value for the display.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-furo-type-money-head.md" %}}

## Attributes and Properties
{{% api "_cell-furo-type-money-properties.md" %}}








## Methods
{{% api "_cell-furo-type-money-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>







{{% api "_cell-furo-type-money-footer.md" %}}
{{% api "_cell-furo-type-money-scripts.md" %}}
