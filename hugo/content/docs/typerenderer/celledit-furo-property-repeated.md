---
title: celledit-furo-property-repeated
description: celledit renderer for `[] furo.Property`
weight: 50
---

# celledit-furo-property-repeated
**@furo/typerenderer** <small>v1.0.0-rc.15</small>
<br>`import '@furo/typerenderer/src/celledit-furo-property-repeated.js';`<small>
<br>exports *CelleditFuroPropertyRepeated* js
<br>exports `<celledit-furo-property-repeated>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** celledit renderer for `[] furo.Property`

## Description

`celledit-furo-property-repeats`
The celledit-furo-property-repeats component displays a FieldNode of type `furo.Property` in read only mode.

Every celledit-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_celledit-furo-property-repeated-head.md" %}}

## Attributes and Properties
{{% api "_celledit-furo-property-repeated-properties.md" %}}





### **elementList**
default: **[]**</small>


<br><br>

### **_typeResolved**
default: **false**</small>


<br><br>

### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">noDataText</span>
</small>

Defines the empty state display
With a furo.Property type, the effective type is only known when the data is transmitted.
Default: ''
<br><br>

## Methods
{{% api "_celledit-furo-property-repeated-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component
the celledit-furo-property-repeats is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>

### **_updateFieldList**
<small>**_updateFieldList**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--update-field-list</span>



<br><br>







{{% api "_celledit-furo-property-repeated-footer.md" %}}
{{% api "_celledit-furo-property-repeated-scripts.md" %}}
