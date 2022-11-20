---
title: display-google-protobuf-
description: display renderer for `google.protobuf.`
weight: 50
---

# display-google-protobuf-
**@furo/ui5** <small>v1.14.4</small>
<br>`import '@furo/ui5/src/typerenderer/display-google-protobuf-any.js';`<small>
<br>exports `<display-google-protobuf-any>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** display renderer for `google.protobuf.`

## Description

`display-google-protobuf-any`
The display-google-protobuf-any component is a wrapper displays of type `google.protobuf.Any` in read only mode.

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-google-protobuf--head.md" %}}

## Attributes and Properties
{{% api "_display-google-protobuf--properties.md" %}}







### **_typeResolved**
default: **false**</small>


<br><br>

## Methods
{{% api "_display-google-protobuf--methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component
the display-google-protobuf-any is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>








{{% api "_display-google-protobuf--footer.md" %}}
{{% api "_display-google-protobuf--scripts.md" %}}
