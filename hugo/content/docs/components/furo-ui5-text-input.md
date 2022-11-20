---
title: furo-ui5-text-input
description: data text input field
weight: 50
---

# furo-ui5-text-input
**@furo/ui5** <small>v1.14.4</small>
<br>`import '@furo/ui5/src/furo-ui5-text-input.js';`<small>
<br>exports *FuroUi5TextInput* js
<br>extends *src/furo-ui5-text-input.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data text input field

## Description

The 'furo-ui5-text-input' component allows the user to enter and edit texts with data binding.

It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).

You can bind any `string` type, like `furo.fat.String` type or the `google.protobuf.StringValue` type.

```html
 <furo-ui5-text-input
    fn-bind-data="--daoCountry(*.data.name)"
 ></furo-ui5-text-input>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

** meta  <  fat  < html  **

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
**bindData(fieldNode)**
Bind an entity field. You can use the entity even when no data was received.

When you use at-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

{{% api "_furo-ui5-text-input-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-text-input-properties.md" %}}





### **nativeInputAttributes**
</small>


<br><br>


























### **type**
default: **&#39;Text&#39;**</small>


<br><br>


### **displayFieldPath**
default: **&#39;display_name&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the text of the
option items.
Point-separated path to the field
E.g. data.partner.display_name
default: display_name
This attribute is related to the option list
<br><br>

### **descFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional
description of the option items.
Point-separated path to the field
E.g. data.partner.id
default: id
This attribute is related to the option list
<br><br>

### **wait**
default: **250**</small>

Debounce time in milliseconds
Default value: 250
<br><br>







## Events
{{% api "_furo-ui5-text-input-events.md" %}}

### **search-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-search-requested</span>
→ <small>`value`</small>

Fired when typing in input (debounced, default 250ms)
<br><br>
### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-change</span>
→ <small>`String`</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **input**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-input</span>
→ <small>`String`</small>

 Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-furo-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-text-input-methods.md" %}}





### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`

Use this after manual or scripted update of the attributes.

<br><br>













### **onFnaFieldStateChanged**
<small>**onFnaFieldStateChanged**(*state* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-on-fna-field-state-changed</span>

set the value state

- <small>state </small>
<br><br>









### **bindOptions**
<small>**bindOptions**(*repeaterNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-options</span>

Here a RepeaterNode can be connected to the component as an option list.
The items are displayed as suggestion items.

- <small>repeaterNode </small>
<br><br>


















{{% api "_furo-ui5-text-input-footer.md" %}}
{{% api "_furo-ui5-text-input-scripts.md" %}}
