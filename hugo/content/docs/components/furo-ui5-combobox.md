---
title: furo-ui5-combobox
description: data combobox field
weight: 50
---

# furo-ui5-combobox
**@furo/components** <small>v1.0.0-rc.12</small>
<br>`import '@furo/components/src/furo-ui5-combobox.js';`<small>
<br>exports *FuroUi5Combobox* js
<br>extends *src/furo-ui5-combobox.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data combobox field

## Description

The furo-ui5-combobox component represents a drop-down menu with a list of the available options and a text input field
to narrow down the options. It is commonly used to enable users to select an option from a predefined list.
Use the function bindOptions to bind a RepeaterNode as an option list.

```html
<furo-ui5-combobox
   ƒ-bind-data="--entity(*.data.description)"
   ƒ-bind-options="--collection(*.entities)">
</furo-ui5-combobox>
```

{{% api "_furo-ui5-combobox-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-combobox-properties.md" %}}



















### **activeFieldBinding**
default: **false**</small>

Flag to indicate if a field is attached
Default: false
<br><br>

### **displayFieldPath**
default: **&#39;display_name&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the option items.
Point-separated path to the field
E.g. data.partner.display_name
default: display_name
This attribute is related to the option list
<br><br>

### **descFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the additional
description of the option items.
Point-separated path to the field
E.g. data.partner.id
default: id
This attribute is related to the option list
<br><br>


### **wait**
default: **250**</small>

Debounce time in milliseconds
Default value: 250
<br><br>







## Events
{{% api "_furo-ui5-combobox-events.md" %}}

### **search-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-search-requested</span>
→ <small>`value`</small>

Fired when typing in input (debounced, default 250ms)
<br><br>
### **options-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-options-updated</span>
→ <small>`optionNodeList`</small>

Fired after the option list was rebuilt.
<br><br>
### **selection-change**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-selection-change</span>
→ <small>`selectedOption`</small>

Fired when selection is changed by user interaction
<br><br>
### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`selectedOption`</small>

Fired after the field value was changed.
<br><br>

## Methods
{{% api "_furo-ui5-combobox-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `required`,`readonly`,`disabled`, `value-field-path`, `display-field-path`
Use this after manual or scripted update of the attributes.

<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `boolean`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Overridden bindData of FieldNodeAdapter

- <small>fieldNode </small>
<br><br>

### **bindOptions**
<small>**bindOptions**(*repeaterNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-options</span>

Here a RepeaterNode can be connected to the component as an option list.

- <small>repeaterNode </small>
<br><br>





























{{% api "_furo-ui5-combobox-footer.md" %}}
{{% api "_furo-ui5-combobox-scripts.md" %}}
