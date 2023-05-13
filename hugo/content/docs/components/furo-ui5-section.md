---
title: furo-ui5-section
description: 
weight: 50
---

# furo-ui5-section
**@furo/ui5** <small>v1.16.2</small>
<br>`import '@furo/ui5/src/furo-ui5-section.js';`<small>
<br>exports *FuroUi5Section* js
<br>exports `<furo-ui5-section>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** 

## Description

`furo-ui5-section`
The object page content according to the SAP Design System Fiori guidelines consists of sections and subsections
arranged in a column layout.
The furo-ui5-section is basically a layout manager component to structure object pages. Sections can only
contain subsections, not content.

```html
 <furo-ui5-section heading="STRING">
   <furo-ui5-subsection></furo-ui5-subsection>
   <furo-ui5-subsection></furo-ui5-subsection>
 </furo-ui5-section>
```

```html
<furo-ui5-section
   fn-bind-data="--dao(*.field_of_type_string)">
   <furo-ui5-subsection></furo-ui5-subsection>
   <furo-ui5-subsection></furo-ui5-subsection>
</furo-ui5-section>
```

## Methods
**bindData(fieldNode)**
Binds an entity field to the heading. You can use the entity even when no data was received.

{{% api "_furo-ui5-section-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-section-properties.md" %}}





### **heading**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">heading</span>
<small>`string` default: **&#39;&#39;**</small>

Heading title of the section
<br><br>

### **noborder**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">noborder</span>
<small>`Boolean` </small>

Setting this attribute will hide the bottom border
<br><br>

## Methods
{{% api "_furo-ui5-section-methods.md" %}}


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

Furo flow is ready lifecycle method

<br><br>






## Slots
{{% api "_furo-ui5-section-slots.md" %}}

### **default**
Type: `FuroUi5SubSection [0..n]`

defines the content of the section.
<br><br>

{{% api "_furo-ui5-section-footer.md" %}}
{{% api "_furo-ui5-section-scripts.md" %}}
