---
title: FuroUi5Select
description: data select field
weight: 100
---

# FuroUi5Select

**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/src/furo-ui5-select.js';`<small>
<br>exports *FuroUi5Select* js
<br>extends *src/furo-ui5-select.js*
<br> mixes *FieldNodeAdapter*</small>


**data select field**

The furo-ui5-select component is used to create a drop-down list. The items inside the furo-ui5-select define
the available options by using the ui5-option component. Use the function bindOptions to bind a RepeaterNode as a option list.

```
<furo-ui5-select
   ƒ-bind-data="--entity(*.data.description)"
   ƒ-bind-options="--collection(*.entities)">
</furo-ui5-select>
```

## Attributes and Properties
{{% api "_-properties.md" %}}




















### **metadata**
</small>


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



## Methods
{{% api "_-methods.md" %}}


### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

Reads the attributes which are set on the component dom.
those attributes can be set. `value-state`, `required`,`readonly`,`disabled`, `value-field-path`, `display-field-path`
Use this after manual or scripted update of the attributes.

<br><br>

### **bindOptions**
<small>**bindOptions**(*repeaterNode* `` ) ⟹ `void`</small>

Here a RepeaterNode can be connected to the component as an option list.

- <small>repeaterNode </small>
<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `boolean`</small>

overwrite bindData of FieldNodeAdapter

- <small>fieldNode </small>
<br><br>







### **selectOptionById**
<small>**selectOptionById**(*id* `` ) ⟹ `void`</small>

Selects an option by id

- <small>id </small>
<br><br>



















