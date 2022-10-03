---
title: furo-ui5-relative-time-badge
description: bindable relative time badge
weight: 50
---

# furo-ui5-relative-time-badge
**@furo/ui5** <small>v1.12.1</small>
<br>`import '@furo/ui5/src/furo-ui5-relative-time-badge.js';`<small>
<br>exports `<furo-ui5-relative-time-badge>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** bindable relative time badge

## Description

`furo-ui5-relative-time-badge`
The furo-ui5-relative-time-badge is a small non-interactive component which contains relative time
information (i.e. in 2 days, 5 days ago) and color chosen from a list of predefined color schemes.
It serves the purpose to attract the user attention to some piece of information.

You can bind a `string`, `google.protobuf.Timestamp`, `int32`, `int64`, `furo.type.Date` or `google.type.Date`.
`int32`, `int64` will be handled as unix timestamps (seconds since epoc) and can not be *empty*.

```html
 <furo-ui5-relative-time-badge
    fn-bind-data="--dao(FIELDNODE)">
 </furo-ui5-relative-time-badge>
```

{{% api "_furo-ui5-relative-time-badge-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-relative-time-badge-properties.md" %}}









### **colorSchemePositive**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">color-scheme-positive</span> <small>**reflects**</small>
<small>`string` default: **&#39;1&#39;**</small>

default values
<br><br>

### **colorSchemeNegative**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">color-scheme-negative</span> <small>**reflects**</small>
<small>`string` default: **&#39;2&#39;**</small>

Defines the color scheme of the component if the value is NEGATIVE. There are 10 predefined schemes.
Each scheme applies different values for the background-color and border-color. To use one you can set a
number from "1" to "10". The colorScheme "1" will be set by default.

Note: Color schemes have no visual representation in High Contrast Black (sap_belize_hcb) theme.
<br><br>

### **optionStyle**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">option-style</span>
<small>`string` default: **&#39;long&#39;**</small>

Defines the output style
long, short, narrow
Default: long
<br><br>

### **optionNumeric**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">option-numeric</span>
<small>`string` default: **&#39;auto&#39;**</small>

Defines the output format
always, auto
Default: auto
<br><br>

## Methods
{{% api "_furo-ui5-relative-time-badge-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a fieldNode to the component
Overridden bindData of FieldNodeAdapter

Supported types:
- string (ISO 8061)
- int32, int64 (unix timestamps (seconds since epoc))
- google.protobuf.Timestamp
- google.type.Date
- furo.type.Date

- <small>fieldNode </small>
<br><br>













{{% api "_furo-ui5-relative-time-badge-footer.md" %}}
{{% api "_furo-ui5-relative-time-badge-scripts.md" %}}
