---
title: furo-ui5-rating-indicator
description: data rating input field
weight: 50
---

# furo-ui5-rating-indicator
**@furo/ui5** <small>v1.1.0</small>
<br>`import '@furo/ui5/src/furo-ui5-rating-indicator.js';`<small>
<br>exports *FuroUi5RatingIndicator* js
<br>extends *src/furo-ui5-rating-indicator.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data rating input field

## Description

The furo-ui5-rating-indicator  is used to display a specific number of icons that are used to rate an item.
Additionally, it is also used to display the average and overall ratings.
https://sap.github.io/ui5-webcomponents/playground/components/RatingIndicator/

You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types.

```html
 <furo-ui5-rating-indicator
    ƒ-bind-data="--dao(FIELDNODE)"
 ></furo-ui5-rating-indicator>
```

### Specificity
1. Attributes which are set in the html source will have the highest specificity and will never get overwritten by metas or fat.
2. Attributes set in meta will have the lowest specificity and will be overwritten by attributes from fat.

| meta  | fat  | html  |
|------  |-----  |------  |
| 1      | 10    | 100    |


## supported FAT attributes
 - **"readonly":"true"** set the element to readonly
 - **"disabled":"true"** set the element to disabled

## supported meta and constraints
- **readonly: true** , set the element to readonly

## Methods
**bind-data(fieldNode)**
Bind aa entity field. You can use the entity even when no data was received.

When you use @-object-ready from a furo-data-object which emits a EntityNode, just bind the field with --entity(*.fields.fieldname)

{{% api "_furo-ui5-rating-indicator-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-rating-indicator-properties.md" %}}











## Events
{{% api "_furo-ui5-rating-indicator-events.md" %}}

### **change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-change</span>
→ <small>``number``</small>

 Fired when the values changes.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>``number``</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-rating-indicator-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>


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










{{% api "_furo-ui5-rating-indicator-footer.md" %}}
{{% api "_furo-ui5-rating-indicator-scripts.md" %}}
