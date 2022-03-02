---
title: furo-ui5-form-field-container
description: responsive labels for your input elements
weight: 50
---

# furo-ui5-form-field-container
**@furo/ui5** <small>v1.1.0</small>
<br>`import '@furo/ui5/src/furo-ui5-form-field-container.js';`<small>
<br>exports *FuroUi5FormFieldContainer* js
<br>exports `<furo-ui5-form-field-container>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** responsive labels for your input elements

## Description

The furo-ui5-form-field-container gives the user a layout to manage
input field and labels according to the design specification of SAP Fiori.

Example

```html
<furo-ui5-form-field-container>
  <ui5-label label slot="label" for="Custom" show-colon>Currency / Units (custom)</ui5-label>
  <furo-horizontal-flex id="Custom" content space>
    <furo-ui5-text-input flex ƒ-bind-data="--entity(*.data.furo_data_money_input.currency_code)"></furo-ui5-text-input>
    <furo-ui5-number-input flex ƒ-bind-data="--entity(*.data.furo_data_money_input.units)"></furo-ui5-number-input>
 </furo-horizontal-flex>
</furo-ui5-form-field-container>
```

The form and simple form in size L use a two-column layout within the responsive grid layout by default.
That means that the form groups are placed next to each other to have all the information on one screen and to
avoid scrolling. In these columns, the labels are positioned in the same row as the corresponding input field or value.
So the form groups adopt the Z layout (reading direction in rows, not in columns).

The label-field ratio is 4:8:0 by default:

4 grid columns of the responsive grid layout are used by the labels.
8 grid columns of the responsive grid layout are used by fields.
0 grid columns of the responsive grid layout are used by empty columns.


Size M of the form and simple form also has a single-column layout within the responsive grid layout by default.
However, in size M the labels are positioned in the same row as the corresponding input field or value, and form
groups are positioned below each other.

The label-field ratio is 3:9:0 by default:

2 grid columns of the responsive grid layout are used by the labels.
10 grid columns of the responsive grid layout are used by the fields.
0 columns of the responsive grid layout are used by empty columns.


Size S (Smartphones and Dialogs)
The form and simple form use a single-column layout within the responsive grid layout in size S by default.
This means that the form groups are positioned below each other in a single column and the labels are positioned
`above` the fields to avoid truncation of the labels.

The label-field ratio is 12:12:0 by default:

12 grid columns of the responsive grid layout are used by the labels.
(A label handles the space of a whole row.)
12 grid columns of the responsive grid layout are used by the fields.
(A field handles the space of a whole row.)
0 grid columns of the responsive grid layout are used by empty columns.
(There is no empty space on the right of the field.)

{{% api "_furo-ui5-form-field-container-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-form-field-container-properties.md" %}}






## Methods
{{% api "_furo-ui5-form-field-container-methods.md" %}}







## Slots
{{% api "_furo-ui5-form-field-container-slots.md" %}}

### **label**
Type: `HTMLElement`

defines the label to be displayed.
<br><br>
### **default**
Type: `HTMLElement`

defines the form field to be displayed in the container element.
<br><br>
## Styling
{{% api "_furo-ui5-form-field-container-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-ui5-form-field-container-grid-row-gap` | grid row gap <hr> <small>default: `0`</small> <small>fallback: `N/A`</small>
`--furo-ui5-form-field-container-grid-column-gap` | grid column gap <hr> <small>default: `1em`</small> <small>fallback: `N/A`</small>
`--furo-ui5-form-field-container-label-justify-gap` | label alignment (start, end) <hr> <small>default: `end`</small> <small>fallback: `N/A`</small>

{{% api "_furo-ui5-form-field-container-footer.md" %}}
{{% api "_furo-ui5-form-field-container-scripts.md" %}}
