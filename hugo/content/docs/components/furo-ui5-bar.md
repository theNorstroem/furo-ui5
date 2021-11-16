---
title: furo-ui5-bar
description: ui5 bar
weight: 50
---

# furo-ui5-bar
**@furo/components** <small>v1.0.0-alpha.4</small>
<br>`import '@furo/components/src/furo-ui5-bar.js';`<small>
<br>exports *FuroUi5Bar* js
<br>exports `<furo-ui5-bar>` custom-element-definition
<br>extends *src/furo-ui5-bar.js*
<br> mixes *FieldNodeAdapter*</small>

{{% api "_furo-ui5-bar-head.md" %}}

**ui5 bar**

The Bar is a container which is primarily used to hold titles, buttons and input elements and its design and
functionality is the basis for page headers and footers.
The component consists of three areas to hold its content - startContent slot, default slot and endContent slot.
It has the capability to center content, such as a title, while having other components on the left and right side.

The component exposes a function to bind a FieldNode of type furo.Link to activate/deactivate elements according
the HATEOAS relations.

```
<furo-ui5-bar ƒ-bind-data="--furoLinkRepeaterNode">
  <furo-ui5-button rel="update" slot="endContent">Save</furo-ui5-button>
  <furo-ui5-button rel="delete" slot="endContent">Delete</furo-ui5-button>
  <furo-ui5-button slot="endContent">Fixed Action</furo-ui5-button>
</furo-ui5-bar>
```

{{% api "_furo-ui5-bar-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-bar-properties.md" %}}








## Methods
{{% api "_furo-ui5-bar-methods.md" %}}



### **disableAll**
<small>**disableAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-disable-all</span>

Disables all elements

<br><br>

### **enableAll**
<small>**enableAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-enable-all</span>

Enables all elements inside if check is true
Can be used to enable after a request

<br><br>

### **enableAllNoChecks**
<small>**enableAllNoChecks**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-enable-all-no-checks</span>

Enables all elements inside
IMPORTANT: all checks are disabled

<br><br>




## Slots
{{% api "_furo-ui5-bar-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

Defines the content in the middle of the bar
<br><br>
### **startContent**
Type: `HTMLElement [0..n]`

Defines the content at the start of the bar
<br><br>
### **endContent**
Type: `HTMLElement [0..n]`

Defines the content at the end of the bar https://sap.github.io/ui5-webcomponents/playground/components/Bar/
<br><br>

{{% api "_furo-ui5-bar-footer.md" %}}
{{% api "_furo-ui5-bar-scripts.md" %}}
