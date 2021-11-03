---
title: furo-ui5-data-multi-input-labeled
description: labeled textarea field
weight: 50
---

# furo-ui5-data-multi-input-labeled
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-data-multi-input-labeled.js';`<small>
<br>exports *FuroUi5DataMultiInputLabeled* js
<br>exports `<furo-ui5-data-multi-input-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-data-multi-input-labeled-head.md" %}}

**labeled textarea field**

`furo-ui5-data-multi-input-labeled`
The furo-ui5-data-multi-input-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-data-multi-input-labeled-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-data-multi-input-labeled-properties.md" %}}





### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-multi-input
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
</small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
</small>

A Boolean attribute which, if present, means this field cannot be edited by the user.
<br><br>

### **readonly**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">readonly</span>
</small>

A Boolean attribute which, if present, means this field is readonly.
<br><br>

### **showValueHelpIcon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-value-help-icon</span>
</small>

Determines whether a value help icon will be should in the end of the input. Pressing the icon will fire `value-help-trigger` event.
<br><br>
## Events
{{% api "_furo-ui5-data-multi-input-labeled-events.md" %}}

### **field-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-field-value-changed</span>
→ <small>``</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-data-multi-input-labeled-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Orchestrates the data field connection to the inside

- <small>fieldNode </small>
<br><br>









{{% api "_furo-ui5-data-multi-input-labeled-footer.md" %}}
{{% api "_furo-ui5-data-multi-input-labeled-scripts.md" %}}
