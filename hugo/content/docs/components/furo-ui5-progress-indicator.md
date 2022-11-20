---
title: furo-ui5-progress-indicator
description: repeated strings
weight: 50
---

# furo-ui5-progress-indicator
**@furo/ui5** <small>v1.14.4</small>
<br>`import '@furo/ui5/src/furo-ui5-progress-indicator.js';`<small>
<br>exports *FuroUi5ProgressIndicator* js
<br>extends *src/furo-ui5-progress-indicator.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** repeated strings

## Description

A furo-ui5-progress-indicator shows the progress of a process in a graphical way. To indicate the progress, the inside of the component is filled with a color..
https://sap.github.io/ui5-webcomponents/playground/components/ProgressIndicator/

Supported type: You can bind any `number` type, any `furo.fat.xxx` number type, `furo.BigDecimal` or the `google.wrapper.xxx` number types

```html
<furo-ui5-progress-indicator fn-bind-data="--dao(FIELDNODE)"></furo-ui5-progress-indicator>
```

{{% api "_furo-ui5-progress-indicator-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-progress-indicator-properties.md" %}}












## Methods
{{% api "_furo-ui5-progress-indicator-methods.md" %}}



### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `value-state-message`,  `icon`, `placeholder`, `required`,`readonly`,`disabled`
Use this after manual or scripted update of the attributes.

<br><br>











{{% api "_furo-ui5-progress-indicator-footer.md" %}}
{{% api "_furo-ui5-progress-indicator-scripts.md" %}}
