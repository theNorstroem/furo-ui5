---
title: FuroUi5NumberInput
description: data number input field
weight: 100
---

# FuroUi5NumberInput

**@furo/components** <small>v1.0.0-rc.5</small>
<br>`import '@furo/components/src/src/furo-ui5-number-input.js';`<small>
<br>exports *FuroUi5NumberInput* js
<br>extends *src/furo-ui5-number-input.js*
<br> mixes *FieldNodeAdapter*</small>


**data number input field**

The 'furo-ui5-number-input' component allows the user to enter and edit numbers with data binding.

It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).

You can bind any `number` type, any `furo.fat.xxx` number type or the `google.wrapper.xxx` number types.

```html
 <furo-ui5-number-input
    ƒ-bind-data="--daoCountry(*.data.population)"
 ></furo-ui5-number-input>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

| meta 	| fat 	| html 	|
|------	|-----	|------	|
| 1    	| 10  	| 100  	|


## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"required":"true"** set the element to required
 - **"disabled":"true"** set the element to disabled
 - **"placeholder":"string"** set the placeholder for the element

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element

The constraint **required** will mark the element as required

## Methods
**bind-data(fieldNode)**
Bind a entity field. You can use the entity even when no data was received.

When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

## Attributes and Properties
{{% api "_-properties.md" %}}



### **nativeInputAttributes**
</small>


<br><br>




















### **metadata**
</small>


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
    }**</small>


<br><br>

### **_privilegedAttributes**
default: **{
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
      icon: null,
    }**</small>


<br><br>



## Methods
{{% api "_-methods.md" %}}



### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>

























