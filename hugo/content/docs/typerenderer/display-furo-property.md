---
title: display-furo-property
description: display renderer for `furo.Property`
weight: 50
---

# display-furo-property
**@furo/ui5** <small>v1.14.4</small>
<br>`import '@furo/ui5/src/typerenderer/display-furo-property.js';`<small>
<br>exports *DisplayFuroProperty* js
<br>exports `<display-furo-property>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** display renderer for `furo.Property`

## Description

`display-furo-property`
The display-furo-property component displays a FieldNode of type `furo.Property` in read only mode.

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-furo-property-head.md" %}}

## Attributes and Properties
{{% api "_display-furo-property-properties.md" %}}






### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">noDataText</span>
<small>`string` default: **&#39;&#39;**</small>

Defines the empty state display
With a furo.Property type, the effective type is only known when the data is transmitted.
Default: ''
<br><br>

### **_typeResolved**
default: **false**</small>


<br><br>

## Methods
{{% api "_display-furo-property-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component
the display-furo-property is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>








{{% api "_display-furo-property-footer.md" %}}
{{% api "_display-furo-property-scripts.md" %}}
