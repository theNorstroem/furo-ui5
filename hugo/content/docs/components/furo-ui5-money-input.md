---
title: furo-ui5-money-input
description: Binds a entityObject field google.type.Money to a number-input and currency dropdown fields
weight: 50
---

# furo-ui5-money-input
**@furo/ui5** <small>v1.0.0-rc.24</small>
<br>`import '@furo/ui5/src/furo-ui5-money-input.js';`<small>
<br>exports *FuroUi5MoneyInput* js
<br>exports `<furo-ui5-money-input>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** Binds a entityObject field google.type.Money to a number-input and currency dropdown fields

## Description

The furo-ui5-money-input is a input element composition for FieldNodes of type google.type.Money.
It consists of
- ui5-input of type Number
- furo-ui5-text-input

 You can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three
 ways have priority : currencies > options as attribute > options in meta.

```html
 <furo-ui5-money-input ƒ-bind-data="--dao(google.type.Money)" options='{"list": [ "CHF","EUR","USD" ]}'></furo-ui5-money-input>
 <furo-ui5-money-input ƒ-bind-data="--dao(google.type.Money)" options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'></furo-ui5-money-input>
 <furo-ui5-money-input ƒ-bind-data="--dao(google.type.Money)" currencies="CHF,EUR,USD"></furo-ui5-money-input>
```

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **required: true** , set the element to required

Tags: money input

{{% api "_furo-ui5-money-input-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-money-input-properties.md" %}}



















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

### **_privilegedAttributes**
default: **{
      readonly: null,
      required: null,
      disabled: null,
    }**</small>


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
## Events
{{% api "_furo-ui5-money-input-events.md" %}}

### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>`Money`</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>

## Methods
{{% api "_furo-ui5-money-input-methods.md" %}}




### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a fieldNode.

Supported types: `google.type.Money`

- <small>fieldNode of type  `google.type.Money`</small>
<br><br>

### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
Attributes that can be se are   `required`,`readonly`,`disabled` ,
Use this after manual or scripted update of the attributes.

<br><br>


### **onFnaOptionsChanged**
<small>**onFnaOptionsChanged**(*options* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-on-fna-options-changed</span>

Checks if options.flags has an entry `currency_list`
In this case the option list is applied to the currency field as suggestion items.

If you use a static option definition in the type specification (furo), you can
define the list as follows:

```
options:
  flags:
      - currency_list
  list:
      - '@type': type.googleapis.com/furo.Optionitem
        display_name: Swiss francs (CHF)
        id: CHF
        selected: false
      - '@type': type.googleapis.com/furo.Optionitem
        display_name: Euro (EUR)
        id: EUR
        selected: false
      - '@type': type.googleapis.com/furo.Optionitem
        display_name: US Dollar (USD)
        id: USD
        selected: false
```

- <small>options </small>
<br><br>



### **_convertDataToMoneyObj**
<small>**_convertDataToMoneyObj**(*currency* `` *amount* `` *obj* `` ) ⟹ `void`</small>

<small>`` `` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--convert-data-to-money-obj</span>



- <small>currency </small>
- <small>amount </small>
- <small>obj </small>
<br><br>





### **_getElements**
<small>**_getElements**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--get-elements</span>



<br><br>












{{% api "_furo-ui5-money-input-footer.md" %}}
{{% api "_furo-ui5-money-input-scripts.md" %}}
