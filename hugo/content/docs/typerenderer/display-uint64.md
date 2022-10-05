---
title: display-uint64
description: display renderer for `uint64`
weight: 50
---

# display-uint64
**@furo/ui5** <small>v1.12.3</small>
<br>`import '@furo/ui5/src/typerenderer/display-uint64.js';`<small>
<br>exports *DisplayUint64* js
<br>exports `<display-uint64>` custom-element-definition
<br>extends */src/typerenderer/display-int32.js*
<br>superclass *DisplayInt32*</small>

> **Summary:** display renderer for `uint64`

## Description

`display-uint64`
The display-uint64 component displays a FieldNode of type `uint64` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-uint64-head.md" %}}

## Attributes and Properties
{{% api "_display-uint64-properties.md" %}}






## Methods
{{% api "_display-uint64-methods.md" %}}


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





{{% api "_display-uint64-footer.md" %}}
{{% api "_display-uint64-scripts.md" %}}
