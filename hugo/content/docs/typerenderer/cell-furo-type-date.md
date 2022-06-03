---
title: cell-furo-type-date
description: cell display renderer for `furo.type.Date`
weight: 50
---

# cell-furo-type-date
**@furo/ui5** <small>v1.5.1</small>
<br>`import '@furo/ui5/src/typerenderer/cell-furo-type-date.js';`<small>
<br>exports `<cell-furo-type-date>` custom-element-definition
<br>extends */src/typerenderer/cell-google-type-date.js*
<br>superclass *CellGoogleTypeDate*</small>

> **Summary:** cell display renderer for `furo.type.Date`

## Description

`cell-furo-type-date`
The cell-furo-type-date component displays a FieldNode of type `furo.type.Date` in read only mode.

if the field `display_name` is set, the component will use that value for the display.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-furo-type-date-head.md" %}}

## Attributes and Properties
{{% api "_cell-furo-type-date-properties.md" %}}







## Methods
{{% api "_cell-furo-type-date-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>






{{% api "_cell-furo-type-date-footer.md" %}}
{{% api "_cell-furo-type-date-scripts.md" %}}
