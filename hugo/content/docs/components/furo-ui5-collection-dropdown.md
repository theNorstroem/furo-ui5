---
title: furo-ui5-collection-dropdown
description: data collection dropdown
weight: 50
---

# furo-ui5-collection-dropdown
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-collection-dropdown.js';`<small>
<br>exports *FuroUi5CollectionDropdown* js
<br>exports `<furo-ui5-collection-dropdown>` custom-element-definition
<br>extends *src/furo-ui5-collection-dropdown.js*</small>

{{% api "_furo-ui5-collection-dropdown-head.md" %}}

**data collection dropdown**

# DEPRECATED switch to `furo-ui5-select`

The furo-ui5-collection-dropdown component represents a drop-down list. The items inside define the available
options by using the furo-ui5-collection-dropdown component.

Keyboard Handling
The furo-ui5-collection-dropdown provides advanced keyboard handling. If the furo-ui5-collection-dropdown
is focused, you can open or close the drop-down by pressing F4, ALT+UP or ALT+DOWN keys. Once the drop-down is
opened, you can use the UP and DOWN arrow keys to navigate through the available options and select one
by pressing the Space or Enter keys.

### auto-select-first
set this attribute to auto select the first item in the list, if no item is set in the bounded fieldNode.

{{% api "_furo-ui5-collection-dropdown-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-collection-dropdown-properties.md" %}}










### **subField**
default: **&#39;data&#39;**</small>

If you inject an array with complex objects, declare here the path where display_name and value_field are located.

This is only needed if display_name and value_field are not located in the root of the object.
<br><br>

### **displayField**
default: **&#39;display_name&#39;**</small>

The name of the field from the injected collection that contains the label for the dropdown array.
<br><br>

### **valueField**
default: **&#39;id&#39;**</small>

declare here the name of the field from the injected collection.  by selecting an item from dropdown the defined
valueSubField of bounded complex type or the value by scalar type will be updated according to the value of this field.
<br><br>

### **valueSubField**
default: **undefined**</small>

if you bind a complex type, you must declare here the field which gets updated of value by selecting an item. e.g. value-sub-field = "id"

If you bind a scalar, you dont need this attribute.
<br><br>

### **displaySubField**
default: **&#39;display_name&#39;**</small>

if you bind a complex type, declare here the field which gets updated of display_name by selecting an item.

If you bind a scalar, you dont need this attribute.
<br><br>

### **autoSelectFirst**
default: **false**</small>

set this attribute to autoSelectFirst the first item in the list, if no item is set in the bounded fieldNode
<br><br>






## Events
{{% api "_furo-ui5-collection-dropdown-events.md" %}}

### **item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-item-selected</span>
→ <small>`{*} the original injected data (e.g. entity with link) of the selected item`</small>

 Fired when the item of dropdown list is selected. **bubbles**
<br><br>

## Methods
{{% api "_furo-ui5-collection-dropdown-methods.md" %}}



### **addItems**
<small>**addItems**(*options* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-add-items</span>

Adds the option components to the default slot

- <small>options </small>
<br><br>


### **bindData**
<small>**bindData**(*fieldNode* `Object|FieldNode` ) ⟹ `void`</small>

<small>`Object|FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Bind a entity field to the range-input. You can use the entity even when no data was received.
When you use `@-object-ready` from a `furo-data-object` which emits a EntityNode, just bind the field with `--entity(*.fields.fieldname)`

- <small>fieldNode a Field object</small>
<br><br>

### **setValue**
<small>**setValue**(*val* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-value</span>

Sets the value for the field. This will update the fieldNode.

- <small>val </small>
<br><br>


### **injectEntities**
<small>**injectEntities**(*entities* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-entities</span>

Inject the array of a collection

- <small>entities of type *Entities</small>
<br><br>
















{{% api "_furo-ui5-collection-dropdown-footer.md" %}}
{{% api "_furo-ui5-collection-dropdown-scripts.md" %}}
