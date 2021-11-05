---
title: furo-ui5-data-collection-dropdown-labeled
description: labeled input field
weight: 50
---

# furo-ui5-data-collection-dropdown-labeled
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-data-collection-dropdown-labeled.js';`<small>
<br>exports *FuroUi5DataCollectionDropdownLabeled* js
<br>exports `<furo-ui5-data-collection-dropdown-labeled>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-data-collection-dropdown-labeled-head.md" %}}

**labeled input field**

`furo-ui5-data-collection-dropdown-labeled`
The furo-ui5-data-collection-dropdown-labeled is a composition to easily use a complete input field with label according
to the design specification of SAP Fiori Design System.

{{% api "_furo-ui5-data-collection-dropdown-labeled-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-data-collection-dropdown-labeled-properties.md" %}}






### **label**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">label</span>
<small>`string` default: **&#39;&#39;**</small>

the label for the data-collection-dropdown
<br><br>

### **subField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">sub-field</span> <small>**reflects**</small>
<small>`string` default: **&#39;data&#39;**</small>

If you inject an array with complex objects, declare here the path where display_name and value_field are located.

This is only needed if display_name and value_field are not located in the root of the object.
<br><br>

### **displayField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">display-field</span> <small>**reflects**</small>
<small>`string` default: **&#39;display_name&#39;**</small>

The name of the field from the injected collection that contains the label for the dropdown array.
<br><br>

### **valueField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">value-field</span> <small>**reflects**</small>
<small>`string` default: **&#39;id&#39;**</small>

if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.
If you bind a scalar, you dont need this attribute.
<br><br>

### **valueSubField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">value-sub-field</span> <small>**reflects**</small>
<small>`null` default: **null**</small>

if you bind a complex type, declare here the field which gets updated of value by selecting an item.

If you bind a scalar, you dont need this attribute.
<br><br>

### **displaySubField**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">display-sub-field</span> <small>**reflects**</small>
<small>`string` default: **&#39;display_name&#39;**</small>

if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.

If you bind a scalar, you dont need this attribute.
<br><br>

### **autoSelectFirst**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">auto-select-first</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

set this attribute to autoSelectFirst the first item in the list, if no item is set in the bounded fieldNode
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span>
</small>

A Boolean attribute which, if present, means this field cannot be edited by the user.
<br><br>

### **required**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">required</span>
</small>

A Boolean attribute which, if present, means this field is required and marked with *.
<br><br>
## Events
{{% api "_furo-ui5-data-collection-dropdown-labeled-events.md" %}}

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`{*} the value from the value-field. By default the value field is &#34;id&#34;`</small>

 Fired when value has changed from the component inside. **bubbles**
<br><br>

## Methods
{{% api "_furo-ui5-data-collection-dropdown-labeled-methods.md" %}}



### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Orchestrates the data field connection to the inside

- <small>fieldNode </small>
<br><br>

### **injectEntities**
<small>**injectEntities**(*entities* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-entities</span>

Inject the array of a collection

- <small>entities </small>
<br><br>













{{% api "_furo-ui5-data-collection-dropdown-labeled-footer.md" %}}
{{% api "_furo-ui5-data-collection-dropdown-labeled-scripts.md" %}}
