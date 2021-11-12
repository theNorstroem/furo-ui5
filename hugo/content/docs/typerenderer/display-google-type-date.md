---
title: display-google-type-date
description: 
weight: 50
---

# display-google-type-date
**@furo/typerenderer** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/typerenderer/src/display-google-type-date.js';`<small>
<br>exports *DisplayGoogleTypeDate* js
<br>exports `<display-google-type-date>` custom-element-definition
<br>superclass *LitElement*</small>

{{% api "_display-google-type-date-head.md" %}}

****

`display-google-type-date`
The display-google-type-date component displays a FieldNode of type `google.type.Date` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-google-type-date-description.md" %}}


## Attributes and Properties
{{% api "_display-google-type-date-properties.md" %}}







## Methods
{{% api "_display-google-type-date-methods.md" %}}


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






{{% api "_display-google-type-date-footer.md" %}}
{{% api "_display-google-type-date-scripts.md" %}}