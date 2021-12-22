---
title: furo-ui5-bool-icon
description: Displays a icon for a boolean value
weight: 50
---

# furo-ui5-bool-icon
**@furo/components** <small>v1.0.0-rc.13</small>
<br>`import '@furo/components/src/furo-ui5-bool-icon.js';`<small>
<br>exports `<furo-ui5-bool-icon>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Displays a icon for a boolean value

## Description

Displays a icon/symbol for a boolean value

This component uses the SAP Ui5 icons.
https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html

```html
<furo-ui5-bool-icon ƒ-bind-data="--dao(FIELDNODE)"></furo-ui5-bool-icon>
```

Only `@ui5/webcomponents-icons/dist/navigation-down-arrow.js` and `@ui5/webcomponents-icons/dist/navigation-right-arrow.js` are imported.
If you set other icons, please do not forget to import them.

{{% api "_furo-ui5-bool-icon-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-bool-icon-properties.md" %}}





### **symboltrue**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">symboltrue</span>
<small>`string` default: **&#39;navigation-down-arrow&#39;**</small>

Defines the icon for the true state.
<br><br>

### **symbolfalse**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">symbolfalse</span>
<small>`string` default: **&#39;navigation-right-arrow&#39;**</small>

Defines the icon for the false state.
<br><br>

### **field**
default: **{}**</small>


<br><br>



## Methods
{{% api "_furo-ui5-bool-icon-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a FieldNode

Supported types: `bool`

- <small>fieldNode </small>
<br><br>

### **toggle**
<small>**toggle**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-toggle</span>

Toggles the icon.

<br><br>









{{% api "_furo-ui5-bool-icon-footer.md" %}}
{{% api "_furo-ui5-bool-icon-scripts.md" %}}
