---
title: display-furo-property-labeled
description: display renderer for `[] furo.Property` with labels
weight: 50
---

# display-furo-property-labeled
**@furo/ui5** <small>v1.6.0</small>
<br>`import '@furo/ui5/src/typerenderer/display-furo-property-repeats-labeled.js';`<small>
<br>exports *DisplayFuroPropertyRepeatsLabeled* js
<br>exports `<display-furo-property-repeats-labeled>` custom-element-definition
<br>extends */src/typerenderer/display-furo-property-repeated.js*
<br>superclass *DisplayFuroPropertyRepeated*</small>

> **Summary:** display renderer for `[] furo.Property` with labels

## Description

`display-furo-property-repeats-labeled`
The display-furo-property-repeats-labeled component displays a RepeaterNode of type `furo.Property` in read only mode.

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-furo-property-labeled-head.md" %}}

## Attributes and Properties
{{% api "_display-furo-property-labeled-properties.md" %}}






### **elementList**
default: **[]**</small>


<br><br>

### **_typeResolved**
default: **false**</small>


<br><br>

### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">noDataText</span>
<small>`String` </small>

Defines the empty state display
With a furo.Property type, the effective type is only known when the data is transmitted.
Default: ''
<br><br>

## Methods
{{% api "_display-furo-property-labeled-methods.md" %}}




### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component
the display-furo-property-repeats is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>







{{% api "_display-furo-property-labeled-footer.md" %}}
{{% api "_display-furo-property-labeled-scripts.md" %}}
