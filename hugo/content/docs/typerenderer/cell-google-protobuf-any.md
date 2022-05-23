---
title: cell-google-protobuf-any
description: cell display renderer for `google.protobuf.Any`
weight: 50
---

# cell-google-protobuf-any
**@furo/ui5** <small>v1.4.3</small>
<br>`import '@furo/ui5/src/typerenderer/cell-google-protobuf-any.js';`<small>
<br>exports `<cell-google-protobuf-any>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** cell display renderer for `google.protobuf.Any`

## Description

`cell-google-protobuf-any`
The cell-google-protobuf-any component is a wrapper displays of type `google.protobuf.Any` in read only mode.

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-google-protobuf-any-head.md" %}}

## Attributes and Properties
{{% api "_cell-google-protobuf-any-properties.md" %}}







### **_typeResolved**
default: **false**</small>


<br><br>

## Methods
{{% api "_cell-google-protobuf-any-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component
the cell-google-protobuf-any is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>








{{% api "_cell-google-protobuf-any-footer.md" %}}
{{% api "_cell-google-protobuf-any-scripts.md" %}}
