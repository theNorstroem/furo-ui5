---
title: furo-ui5-data-multi-input
description: data ui5 data multi input
weight: 50
---

# furo-ui5-data-multi-input
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-data-multi-input.js';`<small>
<br>exports *FuroUi5DataMultiInput* js
<br>exports `<furo-ui5-data-multi-input>` custom-element-definition
<br>extends *src/furo-ui5-data-multi-input.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-data-multi-input-head.md" %}}

**data ui5 data multi input**

`furo-ui5-data-multi-input`

The furo-ui5-data-multi-input component represents the repeated strings. e.g. ["aaa","bbb","ccc"]

{{% api "_furo-ui5-data-multi-input-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-data-multi-input-properties.md" %}}

















### **tmpValue**
default: **[]**</small>


<br><br>

### **_previousValueState**
default: **{ state: &#39;None&#39;, message: &#39;&#39; }**</small>


<br><br>

### **_attributesFromFNA**
default: **{
 readonly: undefined,
 placeholder: undefined,
 }**</small>


<br><br>

### **_constraintsFromFNA**
default: **{
 required: undefined,
 max: undefined, // maps to maxlength
 }**</small>


<br><br>

### **_labelsFromFAT**
default: **{
 readonly: undefined,
 disabled: undefined,
 required: undefined,
 }**</small>


<br><br>

### **_attributesFromFAT**
default: **{
 placeholder: undefined,
 max: undefined, // maps to maxlength
 }**</small>


<br><br>

### **_privilegedAttributes**
default: **{
 readonly: null,
 placeholder: null,
 required: null,
 disabled: null,
 }**</small>


<br><br>

## Methods
{{% api "_furo-ui5-data-multi-input-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`, `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>










### **_updateItems**
<small>**_updateItems**(*val* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--update-items</span>



- <small>val </small>
<br><br>

### **_createUi5Token**
<small>**_createUi5Token**(*text* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--create-ui-5token</span>



- <small>text </small>
<br><br>

### **_triggerValueChangedEvent**
<small>**_triggerValueChangedEvent**(*val* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--trigger-value-changed-event</span>



- <small>val </small>
<br><br>

### **_removeAllItems**
<small>**_removeAllItems**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--remove-all-items</span>



<br><br>











{{% api "_furo-ui5-data-multi-input-footer.md" %}}
{{% api "_furo-ui5-data-multi-input-scripts.md" %}}
