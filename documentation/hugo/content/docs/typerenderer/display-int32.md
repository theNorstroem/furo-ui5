---
title: display-int32
description: display renderer for `int32`
weight: 50
---

# display-int32
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/typerenderer/display-int32.js';`<small>
<br>exports *DisplayInt32* js
<br>exports `<display-int32>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** display renderer for `int32`

## Description

`display-int32`
The display-int32 component displays a FieldNode of type `int32` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-int32-head.md" %}}

## Attributes and Properties
{{% api "_display-int32-properties.md" %}}






## Methods
{{% api "_display-int32-methods.md" %}}


### **onFnaFieldValueChanged**
<small>**onFnaFieldValueChanged**(*value* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-on-fna-field-value-changed</span>



- <small>value </small>
<br><br>

### **_formatDisplay**
<small>**_formatDisplay**(*number* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--format-display</span>



- <small>number </small>
<br><br>





{{% api "_display-int32-footer.md" %}}
{{% api "_display-int32-scripts.md" %}}
