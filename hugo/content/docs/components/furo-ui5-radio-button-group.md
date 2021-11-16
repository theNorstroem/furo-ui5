---
title: furo-ui5-radio-button-group
description: 
weight: 50
---

# furo-ui5-radio-button-group
**@furo/components** <small>v1.0.0-alpha.4</small>
<br>`import '@furo/components/src/furo-ui5-radio-button-group.js';`<small>
<br>exports *FuroUi5RadioButtonGroup* js
<br>exports `<furo-ui5-radio-button-group>` custom-element-definition
<br>superclass *HTMLElement*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-radio-button-group-head.md" %}}

****

`furo-ui5-radio-button-group`
The furo-ui5-radio-button-group component enables users to select a single option from a set of options.
When a furo-ui5-radio-button-group is selected by the user, the select event is fired.
When a furo-ui5-radio-button-group that is within a group is selected, the one that was previously selected gets automatically deselected.
You can group radio buttons by using the group-name property.

```
<furo-ui5-radio-button-group
   group-name="Option"
   ƒ-bind-data="--daoPerson(*.field_with_meta_options)">
</furo-ui5-radio-button-group>
```
```
<furo-ui5-radio-button-group
   group-name="Option"
   ƒ-bind-data="--daoPerson(*.field)">
     <ui5-radio-button text="Option A" selected name="Owner"></ui5-radio-button>
     <ui5-radio-button text="Option B with a very long text" name="Owner"></ui5-radio-button>
</furo-ui5-radio-button-group>
```

{{% api "_furo-ui5-radio-button-group-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-radio-button-group-properties.md" %}}














### **groupName**
default: **&#39;&#39;**</small>

Defines the name of the inner radio button. Radio buttons with the same name will form a radio button group.
<br><br>

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
      &#39;group-name&#39;: null,
    }**</small>

a list of privileged attributes. when those attributes are set in furo-ui5-select components initially.
they can not be modified later via response or spec
null is used because getAttribute returns null or value
<br><br>
## Events
{{% api "_furo-ui5-radio-button-group-events.md" %}}

### **options-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-options-updated</span>
→ <small>`CustomEvent`</small>

Fires event options-updated after rebuilding option list.
<br><br>
### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`{*} the value from the value-field. By default the value field is &#34;id&#34;`</small>

 Fired when value has changed from the component inside. **bubbles**
<br><br>
### **item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-item-selected</span>
→ <small>`selectedOption`</small>

Fired when the radio button is selected.
<br><br>

## Methods
{{% api "_furo-ui5-radio-button-group-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `boolean`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

overwrite bindData of FieldNodeAdapter

- <small>fieldNode </small>
<br><br>

### **bindOptions**
<small>**bindOptions**(*repeaterNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-options</span>

Here a RepeaterNode can be connected to the component as an option list.

- <small>repeaterNode </small>
<br><br>

### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
those attributes can be set. `readonly`,`disabled`, `value-field-path`, `display-field-path`
Use this after manual or scripted update of the attributes.

<br><br>




### **selectOptionById**
<small>**selectOptionById**(*val* `` *id* `` ) ⟹ `void`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-option-by-id</span>

Selects an option by id

- <small>val </small>
- <small>id </small>
<br><br>



















{{% api "_furo-ui5-radio-button-group-footer.md" %}}
{{% api "_furo-ui5-radio-button-group-scripts.md" %}}
