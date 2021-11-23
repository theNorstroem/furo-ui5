---
title: FuroUi5PasswordInput
description: data password input field
weight: 100
---

# FuroUi5PasswordInput

**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/src/furo-ui5-password-input.js';`<small>
<br>exports *FuroUi5PasswordInput* js
<br>extends *src/furo-ui5-password-input.js*
<br> mixes *FieldNodeAdapter*</small>


**data password input field**

The 'furo-ui5-password-input' component allows the user to enter and edit password with data binding.

It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).

You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.

```html
 <furo-ui5-password-input
    ƒ-bind-data="--daoCountry(*.data.name)"
 ></furo-ui5-password-input>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

** meta 	<  fat 	< html 	**

## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"required":"true"** set the element to required
 - **"disabled":"true"** set the element to disabled
 - **"icon":"home"** set the icon
 - **"placeholder":"string"** set the placeholder for the element
 - **"max":"number"** set the maximum number of characters available in the input field.

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element
- **max:"number"** set the maximum number of characters available in the input field.

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

### **type**
default: **&#39;Password&#39;**</small>


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
      icon: undefined, // updates the icon
    }**</small>


<br><br>

### **_privilegedAttributes**
default: **{
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
      icon: null,
      maxlength: null,
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



















### **show**
<small>**show**() ⟹ `void`</small>

show password

<br><br>

### **hide**
<small>**hide**() ⟹ `void`</small>

hide password

<br><br>

### **toggleVisibility**
<small>**toggleVisibility**() ⟹ `void`</small>

toggle visibility of the password. (show/hide) password

<br><br>








