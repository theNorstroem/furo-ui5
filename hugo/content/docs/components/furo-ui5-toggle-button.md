---
title: furo-ui5-toggle-button
description: boolean toggle button
weight: 50
---

# furo-ui5-toggle-button
**@furo/components** <small>v1.0.0-rc.3</small>
<br>`import '@furo/components/src/furo-ui5-toggle-button.js';`<small>
<br>exports *FuroUi5ToggleButton* js
<br>exports `<furo-ui5-toggle-button>` custom-element-definition
<br>extends *src/furo-ui5-toggle-button.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-toggle-button-head.md" %}}

**boolean toggle button**

The 'furo-ui5-toggle-button' component allows the user to switch true and false for Bool with data binding.

It supports all features from the [SAP ui5 toggleButton element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/).

You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

 * ```html
 <furo-ui5-toggle-button
    ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 ></furo-ui5-toggle-button>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

| meta 	| fat 	| html 	|
|------	|-----	|------	|
| 1    	| 10  	| 100  	|


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

{{% api "_furo-ui5-toggle-button-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-toggle-button-properties.md" %}}














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
## Events
{{% api "_furo-ui5-toggle-button-events.md" %}}

### **click**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-click</span>
→ <small>``</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **xxxx**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-xxxx</span>
→ <small>``</small>

 All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/ToggleButton/). When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)
<br><br>
### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`Boolean`</small>

Fires the value of pressed when value changed.
<br><br>

## Methods
{{% api "_furo-ui5-toggle-button-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.

<br><br>


### **onFnaFieldValueChanged**
<small>**onFnaFieldValueChanged**(*val* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-field-value-changed</span>

overwrite onFnaFieldValueChanged

- <small>val </small>
<br><br>



### **onFnaFieldNodeBecameInvalid**
<small>**onFnaFieldNodeBecameInvalid**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-field-node-became-invalid</span>

overwrite onFnaFieldNodeBecameInvalid function

<br><br>




### **onFnaLabelChanged**
<small>**onFnaLabelChanged**(*text* `` *placeholder* `` ) ⟹ `void`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-label-changed</span>

overwrite onFnaLabelChanged function
label is mapped to text

- <small>text </small>
- <small>placeholder </small>
<br><br>











{{% api "_furo-ui5-toggle-button-footer.md" %}}
{{% api "_furo-ui5-toggle-button-scripts.md" %}}
