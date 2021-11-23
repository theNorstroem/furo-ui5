---
title: furo-ui5-date-picker
description: furo data datepicker field
weight: 50
---

# furo-ui5-date-picker
**@furo/components** <small>v1.0.0-rc.3</small>
<br>`import '@furo/components/src/furo-ui5-date-picker.js';`<small>
<br>exports *FuroUi5DatePicker* js
<br>exports `<furo-ui5-date-picker>` custom-element-definition
<br>extends *src/furo-ui5-date-picker.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-date-picker-head.md" %}}

**furo data datepicker field**

The furo-ui5-date-picker component allows the user to bind an date object like google.type.Date or a date string
with ISO 8061 format like "2020-12-31" to the ui5 datepicker and edit it.

It supports all features from the [SAP ui5 DatePicker element](https://sap.github.io/ui5-webcomponents/playground/components/DatePicker/).


you can define the formatPattern (e.g. 'dd.MM.yyyy' ) to show the date according to format pattern.

You can bind a `string`, `furo.type.Date` or `google.type.Date`.

```html
 <furo-ui5-date-picker
    ƒ-bind-data="--data(*.validity_to)">
 </furo-ui5-date-picker>
```

The text field can be editable or read-only (readonly property), and it can be enabled or disabled (enabled property).
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

{{% api "_furo-ui5-date-picker-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-date-picker-properties.md" %}}













### **formatPattern**
default: **&#39;&#39;**</small>

The format pattern for the date.
<br><br>




## Events
{{% api "_furo-ui5-date-picker-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`Date`</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>
### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>`Date`</small>

-Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>

## Methods
{{% api "_furo-ui5-date-picker-methods.md" %}}




### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
Attributes that can be se are  `value-state`,  `placeholder`, `required`,`readonly`,`disabled` `max-date`,  `min-date`,  `format-pattern`,
Use this after manual or scripted update of the attributes.

<br><br>
















{{% api "_furo-ui5-date-picker-footer.md" %}}
{{% api "_furo-ui5-date-picker-scripts.md" %}}
