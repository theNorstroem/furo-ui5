---
title: display-google-protobuf-timestamp
description: 
weight: 50
---

# display-google-protobuf-timestamp
**@furo/typerenderer** <small>v1.0.0-rc.5</small>
<br>`import '@furo/typerenderer/src/display-google-protobuf-timestamp.js';`<small>
<br>exports `<display-google-protobuf-timestamp>` custom-element-definition
<br>superclass *LitElement*</small>

{{% api "_display-google-protobuf-timestamp-head.md" %}}

****

`display-google-protobuf-timestamp`
The display-google-protobuf-timestamp component displays a FieldNode of type `google.prtobuf.Timestamp` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-google-protobuf-timestamp-description.md" %}}


## Attributes and Properties
{{% api "_display-google-protobuf-timestamp-properties.md" %}}







## Methods
{{% api "_display-google-protobuf-timestamp-methods.md" %}}


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





{{% api "_display-google-protobuf-timestamp-footer.md" %}}
{{% api "_display-google-protobuf-timestamp-scripts.md" %}}
