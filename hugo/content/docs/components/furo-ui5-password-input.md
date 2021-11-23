---
title: furo-ui5-password-input
description: data password input field
weight: 50
---

# furo-ui5-password-input
**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/furo-ui5-password-input.js';`<small>
<br>exports *FuroUi5PasswordInput* js
<br>extends *src/furo-ui5-password-input.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data password input field

{{% api "_furo-ui5-password-input-head.md" %}}

## Description

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

{{% api "_furo-ui5-password-input-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-password-input-properties.md" %}}



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
## Events
{{% api "_furo-ui5-password-input-events.md" %}}

### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>``text``</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **input**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-input</span>
→ <small>``</small>

 Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected.
<br><br>
### **xxxx**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-xxxx</span>
→ <small>``</small>

 All events from the [ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).
<br><br>
### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes.
<br><br>
### **icon-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-icon-clicked</span>
→ <small>`MouseEvent`</small>

Fired when icon is clicked
<br><br>
### **password-showed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-password-showed</span>
→ <small>`void`</small>

Fired when the password is showed, after calling the show method.
<br><br>
### **password-hidden**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-password-hidden</span>
→ <small>`void`</small>

Fired when the password is hidden, after calling the hide() method.
<br><br>

## Methods
{{% api "_furo-ui5-password-input-methods.md" %}}



### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>



















### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show</span>

show password

<br><br>

### **hide**
<small>**hide**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-hide</span>

hide password

<br><br>

### **toggleVisibility**
<small>**toggleVisibility**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-toggle-visibility</span>

toggle visibility of the password. (show/hide) password

<br><br>












{{% api "_furo-ui5-password-input-footer.md" %}}
{{% api "_furo-ui5-password-input-scripts.md" %}}
