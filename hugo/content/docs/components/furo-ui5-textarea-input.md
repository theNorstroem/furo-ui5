---
title: furo-ui5-textarea-input
description: data textarea input field
weight: 50
---

# furo-ui5-textarea-input
**@furo/ui5** <small>v1.1.4</small>
<br>`import '@furo/ui5/src/furo-ui5-textarea-input.js';`<small>
<br>exports *FuroUi5TextareaInput* js
<br>extends *src/furo-ui5-textarea-input.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data textarea input field

## Description

The 'furo-ui5-textarea-input' component allows the user to enter and edit texts with data binding.

It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).

You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.

```html
 <furo-ui5-textarea-input
    ƒ-bind-data="--daoCountry(*.data.name)"
 ></furo-ui5-textarea-input>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

** meta 	<  fat 	< html 	**

## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"required":"true"** set the element to required
 - **"disabled":"true"** set the element to disabled
 - **"placeholder":"string"** set the placeholder for the element
 - **"rows":"number"** set the number of rows.
 - **"growing":"true"** Enables the ui5-textarea to automatically grow and shrink dynamically with its content.
 - **"show-exceeded-text":"true"** if set to true. the characters exceeding the maxlength value are selected on paste and the counter below the ui5-textarea displays their number. If set to false, the user is not allowed to enter more characters than what is set in the maxlength property.
 - **"growing-max-lines":"number"** Defines the maximum number of lines that the Web Component can grow.
 - **"max":"number"** set the maximum number of characters available in the input field.

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element
- **max:"number"** set the maximum number of characters available in the input field.

The constraint **required** will mark the element as required

## Methods
**bind-data(fieldNode)**
Bind a entity field. You can use the entity even when no data was received.

When you use @-object-ready from a furo-ui5-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

{{% api "_furo-ui5-textarea-input-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-textarea-input-properties.md" %}}





### **nativeInputAttributes**
</small>


<br><br>















### **value**
default: **&#39;&#39;**</small>


<br><br>






## Events
{{% api "_furo-ui5-textarea-input-events.md" %}}

### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>``text``</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **input**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-input</span>
→ <small>``</small>

 Fired when the value of the ui5-input changes at each keystroke.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-textarea-input-methods.md" %}}





### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>
























{{% api "_furo-ui5-textarea-input-footer.md" %}}
{{% api "_furo-ui5-textarea-input-scripts.md" %}}
