---
title: display-furo-type-date
description: display renderer for `furo.type.Date`
weight: 50
---

# display-furo-type-date
**@furo/ui5** <small>v1.4.1</small>
<br>`import '@furo/ui5/src/typerenderer/display-furo-type-date.js';`<small>
<br>exports `<display-furo-type-date>` custom-element-definition
<br>extends */src/typerenderer/display-google-type-date.js*
<br>superclass *DisplayGoogleTypeDate*</small>

> **Summary:** display renderer for `furo.type.Date`

## Description

`display-furo-type-date`
The display-furo-type-date component displays a FieldNode of type `furo.type.Date` in read only mode.

if the field `display_name` is set, the component will use that value for the display.

The component uses locale from the environment to display the date value accordingly.
https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-furo-type-date-head.md" %}}

## Attributes and Properties
{{% api "_display-furo-type-date-properties.md" %}}







## Methods
{{% api "_display-furo-type-date-methods.md" %}}


### **_formatDisplay**
<small>**_formatDisplay**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--format-display</span>



<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>






{{% api "_display-furo-type-date-footer.md" %}}
{{% api "_display-furo-type-date-scripts.md" %}}
