---
title: furo-ui5-dynamic-header
description: Dynamic Header
weight: 50
---

# furo-ui5-dynamic-header
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/furo-ui5-dynamic-header.js';`<small>
<br>exports `<furo-ui5-dynamic-header>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Dynamic Header

## Description

`furo-ui5-dynamic-header`
 Header component with action slot

{{% api "_furo-ui5-dynamic-header-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-dynamic-header-properties.md" %}}












### **headerTextLevel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text-level</span>
<small>`string` default: **&#39;H2&#39;**</small>

Defines the headerTextLevel of the component.
<br><br>

### **iconSize**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon-size</span>
<small>`string` default: **&#39;S&#39;**</small>

Defines the icon-size of the icon / image.

S, M, L, XL
<br><br>

### **iconShape**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon-shape</span>
<small>`string` default: **&#39;Square&#39;**</small>

Defines the icon-shape of the icon / image.
Square | Circle
<br><br>



### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text</span>
<small>`string` </small>

Defines the headerText of the component.
<br><br>

### **isFavorite**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">is-favorite</span>
<small>`boolean` </small>

Shows the fovorite icon when set.
<br><br>

### **shadow**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">shadow</span>
<small>`boolean` </small>

Draw a shadow, this is useful when you do not have a `tab-container` after your `dynamic-header`
<br><br>

### **showDropdown**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-dropdown</span>
<small>`boolean` </small>

Show the dropdown button icon after the header text.
<br><br>

### **objectIcon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">object-icon</span>
<small>`string` </small>

Set this value to display an object icon.
<br><br>

### **bigAction**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">big-action</span>
<small>`boolean` </small>

Set this attribute to get a bigger action slot.
<br><br>

### **collapsed**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">collapsed</span> <small>**reflects**</small>
<small>`boolean` </small>

Set the collapsed attribute to start in a collapsed state. Header which are pinned by the user in collapsed or expanded state, will override
this attribute.
<br><br>

### **isPinned**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">is-pinned</span>
<small>`boolean` </small>

Set the is-pinned attribute to disable collapse and exand before unpin.
<br><br>
## Events
{{% api "_furo-ui5-dynamic-header-events.md" %}}

### **pinned**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-pinned</span>
→ <small>`CustomEvent`</small>


<br><br>
### **unpinned**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-unpinned</span>
→ <small>`CustomEvent`</small>


<br><br>
### **variant-icon-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-variant-icon-clicked</span>
→ <small>``</small>

Fired when the variant icon (enable with show-dropdown) was clicked.
<br><br>
### **collapsed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-collapsed</span>
→ <small>``</small>

Fired when the panel is collapsed.
<br><br>
### **expanded**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-expanded</span>
→ <small>``</small>

Fired when the panel is expanded.
<br><br>

## Methods
{{% api "_furo-ui5-dynamic-header-methods.md" %}}


### **collapse**
<small>**collapse**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-collapse</span>

Collapses the header content.
This method will do nothing, if the header is "pinned".

<br><br>

### **expand**
<small>**expand**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-expand</span>

Expands the header content.
This method will do nothing, if the header is "pinned".

<br><br>

### **bindHeaderText**
<small>**bindHeaderText**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-header-text</span>

Bind any **scalar** field to set the title of the panel.
Supported types: scalar types

- <small>fieldNode </small>
<br><br>

### **bindSecondaryText**
<small>**bindSecondaryText**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-secondary-text</span>

Bind any **scalar** field to set the secondaryText of the panel.

- <small>fieldNode </small>
<br><br>

### **_toggle**
<small>**_toggle**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--toggle</span>



<br><br>

### **_toggleOnKeyup**
<small>**_toggleOnKeyup**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--toggle-on-keyup</span>



<br><br>


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>


















{{% api "_furo-ui5-dynamic-header-footer.md" %}}
{{% api "_furo-ui5-dynamic-header-scripts.md" %}}
