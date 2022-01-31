---
title: cell-google-protobuf-timestamp
description: cell display renderer for `google.protobuf.Timestamp`
weight: 50
---

# cell-google-protobuf-timestamp
**@furo/ui5** <small>v1.0.0-rc.18</small>
<br>`import '@furo/ui5/src/typerenderer/cell-google-protobuf-timestamp.js';`<small>
<br>exports `<cell-google-protobuf-timestamp>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** cell display renderer for `google.protobuf.Timestamp`

## Description

`cell-google-protobuf-timestamp`
The cell-google-protobuf-timestamp component displays a FieldNode of type `google.prtobuf.Timestamp` in read only mode.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-google-protobuf-timestamp-head.md" %}}

## Attributes and Properties
{{% api "_cell-google-protobuf-timestamp-properties.md" %}}







## Methods
{{% api "_cell-google-protobuf-timestamp-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>







{{% api "_cell-google-protobuf-timestamp-footer.md" %}}
{{% api "_cell-google-protobuf-timestamp-scripts.md" %}}
