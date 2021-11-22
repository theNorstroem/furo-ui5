---
title: display-uint32
description: 
weight: 50
---

# display-uint32
**@furo/typerenderer** <small>v1.0.0-rc.2</small>
<br>`import '@furo/typerenderer/src/display-uint32.js';`<small>
<br>exports *DisplayUint32* js
<br>exports `<display-uint32>` custom-element-definition
<br>extends */src/typerenderer/display-int32.js*
<br>superclass *DisplayInt32*</small>

{{% api "_display-uint32-head.md" %}}

****

`display-uint32`
The display-uint32 component displays a FieldNode of type `uint64` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-uint32-description.md" %}}


## Attributes and Properties
{{% api "_display-uint32-properties.md" %}}






## Methods
{{% api "_display-uint32-methods.md" %}}


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





{{% api "_display-uint32-footer.md" %}}
{{% api "_display-uint32-scripts.md" %}}
