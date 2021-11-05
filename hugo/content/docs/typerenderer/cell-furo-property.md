---
title: cell-furo-property
description: 
weight: 50
---

# cell-furo-property
**@furo/typerenderer** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/typerenderer/src/cell-furo-property.js';`<small>
<br>exports *CellFuroProperty* js
<br>exports `<cell-furo-property>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_cell-furo-property-head.md" %}}

****

`cell-furo-property`
The cell-furo-property component displays a FieldNode of type `furo.Property` in read only mode.

Every cell-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_cell-furo-property-description.md" %}}


## Attributes and Properties
{{% api "_cell-furo-property-properties.md" %}}






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
{{% api "_cell-furo-property-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component
the cell-furo-property is a simple proxy element to show
the initial state if no data is available.

- <small>fieldNode </small>
<br><br>








{{% api "_cell-furo-property-footer.md" %}}
{{% api "_cell-furo-property-scripts.md" %}}
