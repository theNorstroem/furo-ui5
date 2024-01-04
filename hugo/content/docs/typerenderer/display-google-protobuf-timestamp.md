---
title: display-google-protobuf-timestamp
description: display renderer for `google.protobuf.Timestamp`
weight: 50
---

# display-google-protobuf-timestamp
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/typerenderer/display-google-protobuf-timestamp.js';`<small>
<br>exports *DisplayGoogleProtobufTimestamp* js
<br>exports `<display-google-protobuf-timestamp>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** display renderer for `google.protobuf.Timestamp`

## Description

`display-google-protobuf-timestamp`
The display-google-protobuf-timestamp component displays a FieldNode of type `google.prtobuf.Timestamp` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-google-protobuf-timestamp-head.md" %}}

## Attributes and Properties
{{% api "_display-google-protobuf-timestamp-properties.md" %}}







## Methods
{{% api "_display-google-protobuf-timestamp-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>


### **_formatDisplay**
<small>**_formatDisplay**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--format-display</span>



<br><br>





{{% api "_display-google-protobuf-timestamp-footer.md" %}}
{{% api "_display-google-protobuf-timestamp-scripts.md" %}}
