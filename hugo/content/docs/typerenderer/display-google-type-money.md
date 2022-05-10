---
title: display-google-type-money
description: display renderer for `google.type.Money`
weight: 50
---

# display-google-type-money
**@furo/ui5** <small>v1.4.1</small>
<br>`import '@furo/ui5/src/typerenderer/display-google-type-money.js';`<small>
<br>exports *DisplayGoogleTypeMoney* js
<br>exports `<display-google-type-money>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** display renderer for `google.type.Money`

## Description

`display-google-type-money`
The display-google-type-money component displays a FieldNode of type `google.type.Money` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-google-type-money-head.md" %}}

## Attributes and Properties
{{% api "_display-google-type-money-properties.md" %}}








## Methods
{{% api "_display-google-type-money-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>


### **_formatDisplay**
<small>**_formatDisplay**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--format-display</span>



<br><br>






{{% api "_display-google-type-money-footer.md" %}}
{{% api "_display-google-type-money-scripts.md" %}}
