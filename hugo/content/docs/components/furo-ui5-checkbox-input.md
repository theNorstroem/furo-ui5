---
title: furo-ui5-checkbox-input
description: data checkbox input field
weight: 50
---

# furo-ui5-checkbox-input
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/furo-ui5-checkbox-input.js';`<small>
<br>exports *FuroUi5CheckboxInput* js
<br>extends *src/furo-ui5-checkbox-input.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data checkbox input field

## Description

The 'furo-ui5-checkbox-input' component allows the user to switch true and false for type Bool with data binding.

It supports all features from the [SAP ui5 checkbox element](https://sap.github.io/ui5-webcomponents/playground/components/CheckBox/).

Bindable FieldNodes: `bool` type, `furo.fat.Bool` type or the `google.wrapper.BoolValue`  type.

```html
 <furo-ui5-checkbox-input
    fn-bind-data="--dao(FIELDNODE)"
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

{{% api "_furo-ui5-checkbox-input-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-checkbox-input-properties.md" %}}
























## Events
{{% api "_furo-ui5-checkbox-input-events.md" %}}

### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-change</span>
→ <small>`Boolean`</small>

 Fired when the checkbox checked state changes.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-value-changed</span>
→ <small>`Boolean`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-checkbox-input-methods.md" %}}


### **check**
<small>**check**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-check</span>

Checks the checkbox and updates the value

<br><br>

### **uncheck**
<small>**uncheck**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-uncheck</span>

Unhecks the checkbox and updates the value

<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a FieldNode to the component.

Supported types: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`

- <small>fieldNode of type: `bool`, `google.protobuf.BoolValue`, `furo.fat.Bool`</small>
<br><br>

### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-read-attributes</span>

Reads the attributes which are set on the component dom.

<br><br>





### **onFnaFieldStateChanged**
<small>**onFnaFieldStateChanged**(*state* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-on-fna-field-state-changed</span>

set the value state

- <small>state </small>
<br><br>

















{{% api "_furo-ui5-checkbox-input-footer.md" %}}
{{% api "_furo-ui5-checkbox-input-scripts.md" %}}
