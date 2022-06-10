---
title: display-furo-fat-uint64
description: display renderer for `furo.fat.Uint64`
weight: 50
---

# display-furo-fat-uint64
**@furo/ui5** <small>v1.6.0</small>
<br>`import '@furo/ui5/src/typerenderer/display-furo-fat-uint64.js';`<small>
<br>exports `<display-furo-fat-uint64>` custom-element-definition
<br>extends */src/typerenderer/display-furo-fat-int64.js*
<br>superclass *DisplayFuroFatInt64*</small>

> **Summary:** display renderer for `furo.fat.Uint64`

## Description

`display-furo-fat-uint64`
The display-furo-fat-uint64 component displays a FieldNode of type `furo.fat.uint64` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-furo-fat-uint64-head.md" %}}

## Attributes and Properties
{{% api "_display-furo-fat-uint64-properties.md" %}}






## Methods
{{% api "_display-furo-fat-uint64-methods.md" %}}


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





{{% api "_display-furo-fat-uint64-footer.md" %}}
{{% api "_display-furo-fat-uint64-scripts.md" %}}
