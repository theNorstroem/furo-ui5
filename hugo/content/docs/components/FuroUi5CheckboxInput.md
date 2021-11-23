---
title: FuroUi5CheckboxInput
description: data checkbox input field
weight: 100
---

# FuroUi5CheckboxInput

**@furo/components** <small>v1.0.0-rc.5</small>
<br>`import '@furo/components/src/src/furo-ui5-checkbox-input.js';`<small>
<br>exports *FuroUi5CheckboxInput* js
<br>extends *src/furo-ui5-checkbox-input.js*
<br> mixes *FieldNodeAdapter*</small>


**data checkbox input field**

The 'furo-ui5-checkbox-input' component allows the user to switch true and false for Bool with data binding.

It supports all features from the [SAP ui5 checkbox element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).

You can bind  `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

```html
 <furo-ui5-checkbox-input
    ƒ-bind-data="--daoCountry(*.data.classified_as_risk_area)"
 ></furo-ui5-checkbox-input>
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

## supported meta and constraints
- **readonly: true** , set the element to readonly

The constraint **required** will mark the element as required.

## Attributes and Properties
{{% api "_-properties.md" %}}














### **metadata**
</small>


<br><br>









## Methods
{{% api "_-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

Reads the attributes which are set on the component dom.

<br><br>

















