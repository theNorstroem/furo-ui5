---
title: furo-ui5-select-labeled
description: labeled select
weight: 50
---

# furo-ui5-select-labeled
**@furo/components** <small>v1.0.0-rc.13</small>
<br>`import '@furo/components/src/furo-ui5-select-labeled.js';`<small>
<br>exports *FuroUi5SelectLabeled* js
<br>exports `<furo-ui5-select-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** labeled select

## Description

`furo-ui5-select-labeled`
The furo-ui5-select-labeled is a composition to easily use a complete data select with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-select-labeled-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-select-labeled-properties.md" %}}







### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-number-input
<br><br>

### **idFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">id-field-path</span>
<small>`string` default: **&#39;id&#39;**</small>

Defines the field path that is used from the injected RepeaterNode to identify the option items.
Point-separated path to the field
E.g. data.partner.ulid
<br><br>

### **valueFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">value-field-path</span>
<small>`string` default: **&#39;id&#39;**</small>

Defines the field path that is used to update the bound component if the user has selected an option.
Point-separated path to the field
Must be set if a data binding is specified.
<br><br>

### **displayFieldPath**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">display-field-path</span>
<small>`string` default: **&#39;display_name&#39;**</small>

Defines the field path that is used from the injected RepeaterNode to display the option items.
Point-separated path to the field
E.g. data.partner.display_name
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
</small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
</small>

A Boolean attribute which, if present, means this field cannot be edited by the user and
appears in disabled state.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
</small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>
## Events
{{% api "_furo-ui5-select-labeled-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`String`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-select-labeled-methods.md" %}}


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

### **bindOptions**
<small>**bindOptions**(*repeaterNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-options</span>

Binds a repeaterNode to the furo-ui5-select component

- <small>repeaterNode </small>
<br><br>










## Slots
{{% api "_furo-ui5-select-labeled-slots.md" %}}

### **valueStateMessage**
Type: `HTMLElement`

defines the value state message that will be displayed as pop up under the input element.
<br><br>

{{% api "_furo-ui5-select-labeled-footer.md" %}}
{{% api "_furo-ui5-select-labeled-scripts.md" %}}
