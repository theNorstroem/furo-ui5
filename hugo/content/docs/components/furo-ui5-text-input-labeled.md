---
title: furo-ui5-text-input-labeled
description: labeled input field
weight: 50
---

# furo-ui5-text-input-labeled
**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/furo-ui5-text-input-labeled.js';`<small>
<br>exports *FuroUi5TextInputLabeled* js
<br>exports `<furo-ui5-text-input-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-text-input-labeled-head.md" %}}

**labeled input field**

`furo-ui5-text-input-labeled`
The furo-ui5-text-input-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-text-input-labeled-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-text-input-labeled-properties.md" %}}






### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-text-input
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field cannot be edited by the user and
appears in disabled state.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
<small>`Boolean` </small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>
## Events
{{% api "_furo-ui5-text-input-labeled-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-text-input-labeled-methods.md" %}}


### **focus**
<small>**focus**(*options* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus</span>

Focuses the underlying ui5 input element

- <small>options https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus</small>
<br><br>


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Orchestrates the data field connection to the inside

- <small>fieldNode </small>
<br><br>







## Slots
{{% api "_furo-ui5-text-input-labeled-slots.md" %}}

### **icon**
Type: `HTMLElement`

defines the icon to be displayed in the input element.
<br><br>
### **icon**
Type: `HTMLElement`

Defines the icon to be displayed in the input.
<br><br>

{{% api "_furo-ui5-text-input-labeled-footer.md" %}}
{{% api "_furo-ui5-text-input-labeled-scripts.md" %}}
