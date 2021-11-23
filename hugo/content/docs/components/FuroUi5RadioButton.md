---
title: FuroUi5RadioButton
description: boolean toggle button
weight: 100
---

# FuroUi5RadioButton

**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/src/furo-ui5-radio-button.js';`<small>
<br>exports *FuroUi5RadioButton* js
<br>extends *src/furo-ui5-radio-button.js*
<br> mixes *FieldNodeAdapter*</small>


**boolean toggle button**

The 'furo-ui5-radio-button' component allows the user to switch true and false for Bool with data binding.

It supports all features from the [SAP ui5 toggleButton element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/).

You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

```html
 <furo-ui5-radio-button
    ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 ></furo-ui5-radio-button>
```
```html
 <furo-ui5-radio-group>
   <furo-ui5-radio-button name="group"
      ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
   ></furo-ui5-radio-button>
   <furo-ui5-radio-button name="group"
      ƒ-bind-data="--daoCountry(*.data.classified_as_high_risk_area)"
   ></furo-ui5-radio-button>
 </furo-ui5-radio-group>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

| meta  | fat  | html  |
|------  |-----  |------  |
| 1      | 10    | 100    |


## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"disabled":"true"** set the element to disabled
 - **"icon":""** set the icon
 - **"design":""** set the design

## supported meta and constraints
- **readonly: true** , set the element to readonly

The constraint **required** will mark the element as required

## Methods
**bind-data(fieldNode)**
Bind a entity field. You can use the entity even when no data was received.

When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

## Attributes and Properties
{{% api "_-properties.md" %}}














### **metadata**
</small>


<br><br>

### **_previousDesign**
default: **&#39;Default&#39;**</small>


<br><br>

### **_attributesFromFNA**
default: **{
      readonly: undefined,
      disabled: undefined,
      label: undefined,
    }**</small>


<br><br>

### **_constraintsFromFNA**
default: **{}**</small>


<br><br>

### **_attributesFromFAT**
default: **{
      label: undefined,
      icon: undefined,
      design: undefined,
    }**</small>


<br><br>

### **_labelsFromFAT**
default: **{
      readonly: undefined,
      disabled: undefined,
    }**</small>


<br><br>

### **_privilegedAttributes**
default: **{
      readonly: null,
      disabled: null,
      text: null,
      icon: null,
      design: null,
    }**</small>


<br><br>



## Methods
{{% api "_-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

Reads the attributes which are set on the component dom.

<br><br>


### **onFnaFieldValueChanged**
<small>**onFnaFieldValueChanged**(*val* `` ) ⟹ `void`</small>

overwrite onFnaFieldValueChanged

- <small>val </small>
<br><br>



### **onFnaFieldNodeBecameInvalid**
<small>**onFnaFieldNodeBecameInvalid**() ⟹ `void`</small>

overwrite onFnaFieldNodeBecameInvalid function

<br><br>




### **onFnaLabelChanged**
<small>**onFnaLabelChanged**(*text* `` *placeholder* `` ) ⟹ `void`</small>

overwrite onFnaLabelChanged function
label is mapped to text

- <small>text </small>
- <small>placeholder </small>
<br><br>








