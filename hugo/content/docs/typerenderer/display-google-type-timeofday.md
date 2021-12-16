---
title: display-google-type-timeofday
description: display renderer for `google.type.TimeOfDay`
weight: 50
---

# display-google-type-timeofday
**@furo/typerenderer** <small>v1.0.0-rc.12</small>
<br>`import '@furo/typerenderer/src/display-google-type-timeofday.js';`<small>
<br>exports `<display-google-type-timeofday>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** display renderer for `google.type.TimeOfDay`

## Description

`display-google-type-timeofday`
The display-google-type-timeofday component displays a FieldNode of type `google.type.TimeOfDay` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-google-type-timeofday-head.md" %}}

## Attributes and Properties
{{% api "_display-google-type-timeofday-properties.md" %}}







## Methods
{{% api "_display-google-type-timeofday-methods.md" %}}


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





{{% api "_display-google-type-timeofday-footer.md" %}}
{{% api "_display-google-type-timeofday-scripts.md" %}}
