---
title: display-furo-type-money
description: display renderer for `furo.type.Money`
weight: 50
---

# display-furo-type-money
**@furo/ui5** <small>v1.16.2</small>
<br>`import '@furo/ui5/src/typerenderer/display-furo-type-money.js';`<small>
<br>exports *DisplayFuroTypeMoney* js
<br>exports `<display-furo-type-money>` custom-element-definition
<br>extends */src/typerenderer/display-google-type-money.js*
<br>superclass *DisplayGoogleTypeMoney*</small>

> **Summary:** display renderer for `furo.type.Money`

## Description

`display-furo-type-money`
The display-furo-type-money component displays a FieldNode of type `furo.type.Money` in read only mode.

if the field `display_name` is set, the component will use that value for the display.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-furo-type-money-head.md" %}}

## Attributes and Properties
{{% api "_display-furo-type-money-properties.md" %}}








## Methods
{{% api "_display-furo-type-money-methods.md" %}}


### **_formatDisplay**
<small>**_formatDisplay**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--format-display</span>



<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>







{{% api "_display-furo-type-money-footer.md" %}}
{{% api "_display-furo-type-money-scripts.md" %}}
