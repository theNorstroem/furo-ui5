---
title: FuroUi5MultiInput
description: data ui5 data multi input
weight: 100
---

# FuroUi5MultiInput

**@furo/components** <small>v1.0.0-rc.5</small>
<br>`import '@furo/components/src/src/furo-ui5-multi-input.js';`<small>
<br>exports *FuroUi5MultiInput* js
<br>extends *src/furo-ui5-multi-input.js*
<br> mixes *FieldNodeAdapter*</small>


**data ui5 data multi input**

`furo-ui5-multi-input`

The furo-ui5-multi-input component represents the repeated strings. e.g. ["aaa","bbb","ccc"]

## Attributes and Properties
{{% api "_-properties.md" %}}

















### **metadata**
</small>


<br><br>

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
{{% api "_-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>










### **_updateItems**
<small>**_updateItems**(*val* `` ) ⟹ `void`</small>



- <small>val </small>
<br><br>

### **_createUi5Token**
<small>**_createUi5Token**(*text* `` ) ⟹ `void`</small>



- <small>text </small>
<br><br>

### **_triggerValueChangedEvent**
<small>**_triggerValueChangedEvent**(*val* `` ) ⟹ `void`</small>



- <small>val </small>
<br><br>

### **_removeAllItems**
<small>**_removeAllItems**() ⟹ `void`</small>



<br><br>








