---
title: cell-google-type-timeofday
description: cell display renderer for `google.type.TimeOfDay`
weight: 50
---

# cell-google-type-timeofday
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/typerenderer/cell-google-type-timeofday.js';`<small>
<br>exports *CellGoogleTypeTimeofday* js
<br>exports `<cell-google-type-timeofday>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** cell display renderer for `google.type.TimeOfDay`

## Description

`cell-google-type-timeofday`
The cell-google-type-timeofday component displays a FieldNode of type `google.type.TimeOfDay` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-google-type-timeofday-head.md" %}}

## Attributes and Properties
{{% api "_cell-google-type-timeofday-properties.md" %}}







## Methods
{{% api "_cell-google-type-timeofday-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>







{{% api "_cell-google-type-timeofday-footer.md" %}}
{{% api "_cell-google-type-timeofday-scripts.md" %}}
