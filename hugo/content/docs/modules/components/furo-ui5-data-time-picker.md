---
title: furo-ui5-data-time-picker
description: furo data time picker field
weight: 50
---

# furo-ui5-data-time-picker
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-data-time-picker.js';`<small>
<br>exports *FuroUi5DataTimePicker* js
<br>exports `<furo-ui5-data-time-picker>` custom-element-definition
<br>extends *src/furo-ui5-data-time-picker.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-data-time-picker-head.md" %}}

**furo data time picker field**

The furo-ui5-data-time-picker component allows the user to bind a field of type google.type.TimeOfDay.
Represents a time of day. The date and time zone are either not significant
or are specified elsewhere.

https://sap.github.io/ui5-webcomponents/playground/components/TimePicker/

Supported format options are pattern-based on Unicode LDML Date Format notation. For more information, see
UTS #35: Unicode Locale Data Markup Language.

For example, if the format-pattern is "hh:mm:ss", a valid value string is "11:42:35" and the same is displayed in the input.

The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
To visualize semantic states, such as "error" or "warning", the valueState property is provided.
When the user makes changes to the time, the change event is fired, which enables you to react on any time change.

You can bind a `string` or `google.type.TimeOfDay` (https://github.com/googleapis/googleapis/blob/master/google/type/timeofday.proto).

```html
 <furo-ui5-data-time-picker
 ƒ-bind-data="--data(*.start_time)">
 </furo-ui5-data-time-picker>
```

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **placeholder:"some string"** set the placeholder for the element
- **min:"11:42:35"** set the minDate for the element (use iso date in the constraint)
- **max:"23:59:59"** set the maxDate for the element (use iso date in the constraint)
- **pattern:"HH:mm:ss"** set the pattern for the element

The constraint **required** will mark the element as required

## Methods
**bind-data(fieldNode)**
Bind a entity field. You can use the entity even when no data was received.

When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

{{% api "_furo-ui5-data-time-picker-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-data-time-picker-properties.md" %}}














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
{{% api "_furo-ui5-data-time-picker-events.md" %}}

### **field-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-field-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes in ISO 8601 format.
<br><br>
### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>``</small>

Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>

## Methods
{{% api "_furo-ui5-data-time-picker-methods.md" %}}




### **onFnaFieldValueChanged**
<small>**onFnaFieldValueChanged**(*value* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-field-value-changed</span>

FieldNodeAdapter callback function to
handle changes on the model.

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















{{% api "_furo-ui5-data-time-picker-footer.md" %}}
{{% api "_furo-ui5-data-time-picker-scripts.md" %}}