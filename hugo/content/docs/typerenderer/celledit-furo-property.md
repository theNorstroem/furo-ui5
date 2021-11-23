---
title: celledit-furo-property
description: 
weight: 50
---

# celledit-furo-property
**@furo/typerenderer** <small>v1.0.0-rc.6</small>
<br>`import '@furo/typerenderer/src/celledit-furo-property.js';`<small>
<br>exports *CelleditFuroProperty* js
<br>exports `<celledit-furo-property>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** 

{{% api "_celledit-furo-property-head.md" %}}

## Description

`celledit-furo-property`
The celledit-furo-property component displays a FieldNode of type `furo.Property` in read only mode.

Every celledit-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_celledit-furo-property-description.md" %}}


## Attributes and Properties
{{% api "_celledit-furo-property-properties.md" %}}







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
{{% api "_celledit-furo-property-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component
the celledit-furo-property is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>



### **_warning**
<small>**_warning**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--warning</span>



<br><br>






{{% api "_celledit-furo-property-footer.md" %}}
{{% api "_celledit-furo-property-scripts.md" %}}
