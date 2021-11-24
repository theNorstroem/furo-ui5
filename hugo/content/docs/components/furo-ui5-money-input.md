---
title: furo-ui5-money-input
description: Binds a entityObject field google.type.Money to a number-input and currency dropdown fields
weight: 50
---

# furo-ui5-money-input
**@furo/components** <small>v1.0.0-rc.7</small>
<br>`import '@furo/components/src/furo-ui5-money-input.js';`<small>
<br>exports *FuroUi5MoneyInput* js
<br>exports `<furo-ui5-money-input>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** Binds a entityObject field google.type.Money to a number-input and currency dropdown fields

{{% api "_furo-ui5-money-input-head.md" %}}

## Description

`furo-ui5-money-input`
Binds a entityObject field google.type.Money to a furo-number-input and currency dropdown fields
 <sample-furo-ui5-money-input></sample-furo-ui5-money-input>

 you can set currencies dropdown with options in meta or set options attribute as json in element or set currencies as string in element. the three
 ways have priority : currencies > options as attribute > options in meta. When no currencies is setted. Default currency will be `CHF`

 <furo-ui5-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ "CHF","EUR","USD" ]}'></furo-ui5-money-input>
 <furo-ui5-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" options='{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'></furo-ui5-money-input>
 <furo-ui5-money-input autofocus ƒ-bind-data="--entity(*.furo_data_money_input)" currencies="CHF,EUR,USD"></furo-ui5-money-input>

## supported meta and constraints
- **readonly: true** , set the element to readonly
- **required: true** , set the element to required

Tags: money input

{{% api "_furo-ui5-money-input-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-money-input-properties.md" %}}














### **options**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">options</span>
</small>

the option object defines the currencies dropdown
'{"list": [ "chf","eur","usd" ]}'
'{"list": [ {"id":"CHF","label":"Schweiz"},{"id":"EUR","label":"Europa", "selected": true}'
<br><br>


### **currencies**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">currencies</span>
</small>

the string list of currencies for the dropdown. e.g. "CHF,EUR,USD"
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

### **value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-value-changed</span>
→ <small>`Money`</small>

 Fired when the input operation has finished by pressing Enter or on focusout.
<br><br>

## Methods
{{% api "_furo-ui5-money-input-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a fieldNode. Make sure the type of your field is accepted by the implemented component.

- <small>fieldNode </small>
<br><br>

### **readAttributes**
<small>**readAttributes**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-read-attributes</span>

Reads the attributes which are set on the component dom.
Attributes that can be se are   `required`,`readonly`,`disabled` ,
Use this after manual or scripted update of the attributes.

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


### **setOptions**
<small>**setOptions**(*options* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-options</span>

set options for currencies dropdown

- <small>options </small>
<br><br>


### **injectEntities**
<small>**injectEntities**(*entities* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-entities</span>

inject the currency entities for dropdown

- <small>entities </small>
<br><br>

### **updateSuggestions**
<small>**updateSuggestions**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-update-suggestions</span>



<br><br>










{{% api "_furo-ui5-money-input-footer.md" %}}
{{% api "_furo-ui5-money-input-scripts.md" %}}
