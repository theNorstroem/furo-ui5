---
title: furo-ui5-multi-combobox
description: data select field
weight: 50
---

# furo-ui5-multi-combobox
**@furo/ui5** <small>v1.0.0-rc.26</small>
<br>`import '@furo/ui5/src/furo-ui5-multi-combobox.js';`<small>
<br>exports *FuroUi5MultiCombobox* js
<br>extends *src/furo-ui5-multi-combobox.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** data select field

## Description

The furo-ui5-multi-combobox component is used to create a drop-down list. The items inside the furo-ui5-multi-combobox define
the available options by using the ui5-mcb-item component. Use the function bindOptions to bind a RepeaterNode as a option list.

```html
<furo-ui5-multi-combobox
   ƒ-bind-data="--entity(*.data.description)"
   ƒ-bind-options="--collection(*.entities)">
</furo-ui5-multi-combobox>
```

{{% api "_furo-ui5-multi-combobox-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-multi-combobox-properties.md" %}}























### **activeFieldBinding**
default: **false**</small>

Flag to indicate if a field is attached
Default: false
<br><br>

### **idFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (bindOptions) to identify the option items.
Point-separated path to the field
E.g. data.partner.ulid
default: id
This attribute is related to the option list
<br><br>

### **displayFieldPath**
default: **&#39;display_name&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (bindOptions) to display the option items.
Point-separated path to the field
E.g. data.partner.display_name
default: display_name
This attribute is related to the option list
<br><br>

### **valueFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used to update the bound component if the user has selected an option.
Point-separated path to the field
Must be set if a data binding is specified.
default: id
This attribute is related to the option list. optionList[selected].valueFieldPath ==> bound FieldNode
<br><br>

### **boundFieldIdPath**
default: **&#39;id&#39;**</small>

Defines the id field path of the bound FieldNode.
Point-separated path to the field
Must be set if a data binding is specified with a complex type.
default: id
This attribute is related to the bound FieldNode.
<br><br>







## Events
{{% api "_furo-ui5-multi-combobox-events.md" %}}

### **options-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-options-updated</span>
→ <small>`optionNodeList`</small>

Fired  after the option list was rebuilt.
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>`[string]`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-multi-combobox-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `required`,`readonly`,`disabled`, `value-field-path`, `display-field-path`
Use this after manual or scripted update of the attributes.

<br><br>

### **bindOptions**
<small>**bindOptions**(*repeaterNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-options</span>

Here a RepeaterNode can be connected to the component as an option list.

- <small>repeaterNode </small>
<br><br>

### **bindData**
<small>**bindData**(*repeaterNode* `RepeaterNode` ) ⟹ `boolean`</small>

<small>`RepeaterNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Overridden bindData of FieldNodeAdapter

- <small>repeaterNode </small>
<br><br>







### **selectOptionsByIds**
<small>**selectOptionsByIds**(*ids* `[]` ) ⟹ `void`</small>

<small>`[]` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-options-by-ids</span>

Selects an option by id.
The id field must be comparable.

- <small>ids string} must match the data</small>
<br><br>


























{{% api "_furo-ui5-multi-combobox-footer.md" %}}
{{% api "_furo-ui5-multi-combobox-scripts.md" %}}
