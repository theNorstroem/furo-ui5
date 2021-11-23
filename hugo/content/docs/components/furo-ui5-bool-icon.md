---
title: furo-ui5-bool-icon
description: Displays a icon/symbol for a boolean value
weight: 50
---

# furo-ui5-bool-icon
**@furo/components** <small>v1.0.0-rc.5</small>
<br>`import '@furo/components/src/furo-ui5-bool-icon.js';`<small>
<br>exports `<furo-ui5-bool-icon>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-bool-icon-head.md" %}}

**Displays a icon/symbol for a boolean value**

`furo-ui5-bool-icon`
Displays a icon/symbol for a boolean value

This component uses utf-8 symbols for true and false at the moment.

```html
<furo-ui5-bool-icon ƒ-bind-data="--FieldNode"></furo-ui5-bool-icon>
```

Only `@ui5/webcomponents-icons/dist/navigation-down-arrow.js` and `@ui5/webcomponents-icons/dist/navigation-right-arrow.js` are imported.
If you set other icons, please do not forget to import them.

{{% api "_furo-ui5-bool-icon-description.md" %}}


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

Binds a field node to the component

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
