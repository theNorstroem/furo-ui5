---
title: furo-ui5-date-time-picker
description: furo data datetime picker field
weight: 50
---

# furo-ui5-date-time-picker
**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/furo-ui5-date-time-picker.js';`<small>
<br>exports *FuroUi5DateTimePicker* js
<br>extends *src/furo-ui5-date-time-picker.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** furo data datetime picker field

{{% api "_furo-ui5-date-time-picker-head.md" %}}

## Description

The furo-ui5-date-time-picker component allows the user to bind a date string
with IOS 8061 standard in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format likes "2017-01-15T01:30:15.01Z" to the ui5 date time picker and edit it.

you can define the formatPattern (e.g. 'dd.MM.yyyy hh:mm aa' ) to show the date according to format pattern. but the data in
the payload will still be in format [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt)  (2017-01-15T01:30:15.01Z)

The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
To visualize semantic states, such as "error" or "warning", the valueState property is provided.
When the user makes changes to the datetime, the change event is fired, which enables you to react on any date change.

You can bind a `string`, `google.protobuf.Timestamp`, `int32`, `int64`.

`int32`, `int64` will be handled as unix timestamps (seconds since epoc) and can not be *empty*.

```html
 <furo-ui5-date-time-picker
    ƒ-bind-data="--data(*.validity_to)">
 </furo-ui5-date-time-picker>
```

The field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
To visualize semantic states, such as "error" or "warning", the valueState property is provided.
When the user makes changes to the date, the change event is fired, which enables you to react on any date change.

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element
- **min:"1999-12-31"** set the minDate for the element (use iso date in the constraint)
- **max:"1999-12-31"** set the maxDate for the element (use iso date in the constraint)
- **pattern:"1999-12-31"** set the pattern for the element

The constraint **required** will mark the element as required

## Methods
**bind-data(fieldNode)**
Bind a entity field. You can use the entity even when no data was received.

When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

{{% api "_furo-ui5-date-time-picker-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-date-time-picker-properties.md" %}}














### **formatPattern**
default: **&#39;&#39;**</small>


<br><br>

### **_previousValueState**
default: **{ state: &#39;None&#39;, message: &#39;&#39; }**</small>


<br><br>

### **_attributesFromFNA**
default: **{
      readonly: undefined,
      placeholder: undefined,
      min: undefined,
      max: undefined,
      pattern: undefined,
    }**</small>


<br><br>

### **_constraintsFromFNA**
default: **{
      required: undefined,
    }**</small>


<br><br>

### **_privilegedAttributes**
default: **{
      readonly: null,
      placeholder: null,
      required: null,
      disabled: null,
      maxDate: null,
      minDate: null,
      formatPattern: null,
    }**</small>


<br><br>
## Events
{{% api "_furo-ui5-date-time-picker-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes in ISO 8601 format.
<br><br>
### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>``</small>

Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>

## Methods
{{% api "_furo-ui5-date-time-picker-methods.md" %}}



### **onFnaFieldValueChanged**
<small>**onFnaFieldValueChanged**(*value* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-field-value-changed</span>



- <small>value </small>
<br><br>

### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>



<br><br>

### **onFnaFieldNodeBecameInvalid**
<small>**onFnaFieldNodeBecameInvalid**(*validity* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-field-node-became-invalid</span>

overwrite onFnaFieldNodeBecameInvalid function

- <small>validity </small>
<br><br>
















{{% api "_furo-ui5-date-time-picker-footer.md" %}}
{{% api "_furo-ui5-date-time-picker-scripts.md" %}}
