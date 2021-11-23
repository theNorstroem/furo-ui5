---
title: FuroUi5DatePicker
description: furo data datepicker field
weight: 100
---

# FuroUi5DatePicker

**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/src/furo-ui5-date-picker.js';`<small>
<br>exports *FuroUi5DatePicker* js
<br>extends *src/furo-ui5-date-picker.js*
<br> mixes *FieldNodeAdapter*</small>


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

## Attributes and Properties
{{% api "_-properties.md" %}}













### **metadata**
</small>


<br><br>

### **formatPattern**
default: **&#39;&#39;**</small>

The format pattern for the date.
<br><br>







## Methods
{{% api "_-methods.md" %}}




### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

Reads the attributes which are set on the component dom.
Attributes that can be se are  `value-state`,  `placeholder`, `required`,`readonly`,`disabled` `max-date`,  `min-date`,  `format-pattern`,
Use this after manual or scripted update of the attributes.

<br><br>













