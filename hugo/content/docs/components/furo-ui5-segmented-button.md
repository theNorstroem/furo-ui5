---
title: furo-ui5-segmented-button
description: segmented button
weight: 50
---

# furo-ui5-segmented-button
**@furo/ui5** <small>v1.0.0-rc.24</small>
<br>`import '@furo/ui5/src/furo-ui5-segmented-button.js';`<small>
<br>exports *FuroUi5SegmentedButton* js
<br>extends *src/furo-ui5-segmented-button.js*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** segmented button

## Description

The furo-ui5-segmented-button component represents a drop-down list. The items inside define the available
options by using the furo-ui5-segmented-button component.

```html
<furo-ui5-segmented-button
   ƒ-bind-data="--daoPerson(*.field_with_meta_options)">
</furo-ui5-segmented-button>
```

{{% api "_furo-ui5-segmented-button-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-segmented-button-properties.md" %}}















### **activeFieldBinding**
default: **false**</small>

Flag to indicate if a field is attached
Default: false
<br><br>

### **idFieldPath**
default: **&#39;id&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (`bindOptions()`) to identify the option items.
Point-separated path to the field
E.g. data.partner.ulid
default: id
<br><br>

### **displayFieldPath**
default: **&#39;display_name&#39;**</small>

Defines the field path that is used from the bound RepeaterNode (`bindOptions()`) to display the option items.
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






## Events
{{% api "_furo-ui5-segmented-button-events.md" %}}

### **options-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-options-updated</span>
→ <small>`optionNodeList`</small>

Fired  after the option list was rebuilt
<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>`{*} the value from the value-field. By default the value field is &#34;id&#34;`</small>

 Fired when value has changed from the component inside. **bubbles**
<br><br>
### **item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-item-selected</span>
→ <small>`selectedOption`</small>

Fired when the toggle button was clicked. Payload: - if no option binding is active: ui5-segmented-button-item - if a RepeaterNode is bound: FieldNode
<br><br>

## Methods
{{% api "_furo-ui5-segmented-button-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `` ) ⟹ `boolean`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a FieldNode to the component.

Supported types:

- <small>fieldNode </small>
<br><br>

### **bindOptions**
<small>**bindOptions**(*repeaterNode* `RepeaterNode` ) ⟹ `void`</small>

<small>`RepeaterNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-options</span>

Bind a `RepeaterNode` that will be used to build up the option list.

Use `idFieldPath` and `displayFieldPath` if your structrure does not match the following signature:

```json
[
  { "id": 1, "display_name": "option A"},
  { "id": 2, "display_name": "option B"}
]
```

- <small>repeaterNode The list with the options</small>
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
<small>**selectOptionById**(*val* `Id` ) ⟹ `void`</small>

<small>`Id` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-option-by-id</span>

Selects an option by id

- <small>val The id</small>
<br><br>



















{{% api "_furo-ui5-segmented-button-footer.md" %}}
{{% api "_furo-ui5-segmented-button-scripts.md" %}}
