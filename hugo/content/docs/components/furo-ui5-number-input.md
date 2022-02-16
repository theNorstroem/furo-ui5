---
title: furo-ui5-number-input
description: data number input field
weight: 50
---

# furo-ui5-number-input
**@furo/ui5** <small>v1.0.0-rc.26</small>
<br>`import '@furo/ui5/src/furo-ui5-step-input.js';`<small>
<br>exports *FuroUi5StepInput* js
<br>extends *src/furo-ui5-step-input.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data number input field

## Description

The furo-ui5-number-input component allows the user to enter and edit numbers with data binding.
It supports all features from the [SAP ui5 Input element](https://sap.github.io/ui5-webcomponents/playground/components/Input/).

You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.

```html
 <furo-ui5-number-input
    ƒ-bind-data="--dao(FIELDNODE)"
 ></furo-ui5-number-input>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

| meta  | fat  | html  |
|------  |-----  |------  |
| 1      | 10    | 100    |


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

{{% api "_furo-ui5-number-input-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-number-input-properties.md" %}}





### **nativeInputAttributes**
</small>


<br><br>






















### **__previousValueState**
default: **{ state: &#39;None&#39;, message: &#39;&#39; }**</small>


<br><br>





## Events
{{% api "_furo-ui5-number-input-events.md" %}}

### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>``number``</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **input**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-input</span>
→ <small>``</small>

 Fired when the value of the ui5-input changes at each keystroke, and when a suggestion item has been selected.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>``string``</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-number-input-methods.md" %}}





### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a FieldNode to the component.

Supported types:
- `double`, `float`, `int32`, `uint32`, `sint32`, `fixed32`, `sfixed32`, `int64`, `uint64`, `sint64`, `fixed64`, `sfixed64`
- `google.protobuf.DoubleValue`, `google.protobuf.FloatValue`, `google.protobuf.Int32Value`, etc.
- `furo.fat.Doube`, `furo.fat.Float`, `furo.fat.Int32`, etc.
- `furo.BigDecimal`

- <small>fieldNode </small>
<br><br>

### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>





























{{% api "_furo-ui5-number-input-footer.md" %}}
{{% api "_furo-ui5-number-input-scripts.md" %}}
