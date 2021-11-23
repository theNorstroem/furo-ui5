---
title: furo-ui5-select
description: data select field
weight: 50
---

# furo-ui5-select
**@furo/components** <small>v1.0.0-rc.3</small>
<br>`import '@furo/components/src/furo-ui5-select.js';`<small>
<br>exports *FuroUi5Select* js
<br>exports `<furo-ui5-select>` custom-element-definition
<br>extends *src/furo-ui5-select.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-select-head.md" %}}

**data select field**

The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define
the available options by using the ui5-option component. Use the function bindOptions to bind a RepeaterNode as a option list.

```
<furo-ui5-select
   ƒ-bind-data="--entity(*.data.description)"
   ƒ-bind-options="--collection(*.entities)">
</furo-ui5-select>
```

{{% api "_furo-ui5-select-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-select-properties.md" %}}




















### **activeFieldBinding**
default: **false**</small>

Flag to indicate if a field is attached
Default: false
<br><br>

### **idFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used from the injected RepeaterNode to identify the option items.
Point-separated path to the field
E.g. data.partner.ulid
default: id
<br><br>

### **displayFieldPath**
default: **&#39;display_name&#39;**</small>

Defines the field path that is used from the injected RepeaterNode to display the option items.
Point-separated path to the field
E.g. data.partner.display_name
default: display_name
<br><br>

### **valueFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used to update the bound component if the user has selected an option.
Point-separated path to the field
Must be set if a data binding is specified.
default: id
<br><br>


### **_previousValueState**
default: **{ state: &#39;None&#39;, message: &#39;&#39; }**</small>


<br><br>

### **_attributesFromFNA**
default: **{
      readonly: undefined,
    }**</small>


<br><br>

### **_constraintsFromFNA**
default: **{
      required: undefined,
    }**</small>


<br><br>

### **_labelsFromFAT**
default: **{
      readonly: undefined,
      disabled: undefined,
      required: undefined,
    }**</small>


<br><br>

### **_attributesFromFAT**
default: **{}**</small>


<br><br>

### **_privilegedAttributes**
default: **{
      readonly: null,
      required: null,
      disabled: null,
      &#39;id-field-path&#39;: &#39;id&#39;,
      &#39;value-field-path&#39;: &#39;id&#39;,
      &#39;display-field-path&#39;: &#39;display_name&#39;,
    }**</small>

a list of privileged attributes. when those attributes are set in furo-ui5-select components initially.
they can not be modified later via response or spec
null is used because getAttribute returns null or value
<br><br>
## Events
{{% api "_furo-ui5-select-events.md" %}}

### **options-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-options-updated</span>
→ <small>`optionNodeList`</small>

Fired  after the option list was rebuilt.
<br><br>
### **item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-item-selected</span>
→ <small>`selectedOption`</small>

Fired when the item of the dropdown list is selected.
<br><br>
### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`selectedOption`</small>

Fires the field value when it changes.
<br><br>

## Methods
{{% api "_furo-ui5-select-methods.md" %}}


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
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `boolean`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

overwrite bindData of FieldNodeAdapter

- <small>fieldNode </small>
<br><br>







### **selectOptionById**
<small>**selectOptionById**(*id* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-option-by-id</span>

Selects an option by id

- <small>id </small>
<br><br>






















{{% api "_furo-ui5-select-footer.md" %}}
{{% api "_furo-ui5-select-scripts.md" %}}
