---
title: display-int64
description: display renderer for `int64`
weight: 50
---

# display-int64
**@furo/ui5** <small>v1.0.0-rc.24</small>
<br>`import '@furo/ui5/src/typerenderer/display-int64.js';`<small>
<br>exports *DisplayInt64* js
<br>exports `<display-int64>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** display renderer for `int64`

## Description

`display-int64`
The display-int64 component displays a FieldNode of type `int64` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-int64-head.md" %}}

## Attributes and Properties
{{% api "_display-int64-properties.md" %}}






## Methods
{{% api "_display-int64-methods.md" %}}


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





{{% api "_display-int64-footer.md" %}}
{{% api "_display-int64-scripts.md" %}}
