---
title: furo-ui5-subsection
description: 
weight: 50
---

# furo-ui5-subsection
**@furo/ui5** <small>v1.13.0</small>
<br>`import '@furo/ui5/src/furo-ui5-subsection.js';`<small>
<br>exports *FuroUi5Subsection* js
<br>exports `<furo-ui5-subsection>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*
<br> mixes *FieldNodeAdapter*</small>

> **Summary:** 

## Description

`furo-ui5-subsection`
The furo-ui5-subsection component is a containers for actual content. It is envisaged that this component will be
used within a furo-ui5-section
Subsections have a progressive disclosure mechanism to show and hide content

https://experience.sap.com/fiori-design-web/object-page/#content-area

```html
 <furo-ui5-section heading="STRING">
   <furo-ui5-subsection heading="Subsection Title">
     <furo-horizontal-flex slot="action">...</furo-horizontal-flex>
     <my-content></my-content>
     <more-content slot="more"></more-content>
   </furo-ui5-subsection>
 </furo-ui5-section>
```
## Methods
**bindData(fieldNode)**
Binds an entity field to the heading. You can use the entity even when no data was received.

{{% api "_furo-ui5-subsection-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-subsection-properties.md" %}}






### **heading**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">heading</span>
<small>`string` default: **&#39;&#39;**</small>

Heading title of the section
<br><br>

### **showMoreDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-more-data-text</span>
<small>`string` default: **&#39;Show More&#39;**</small>

Defines the text that will be displayed for `show more`
<br><br>

### **showLessDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-less-data-text</span>
<small>`string` default: **&#39;Show Less&#39;**</small>

Defines the text that will be displayed for `show less`
<br><br>

### **collapsed**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">collapsed</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

Collapsed state of the `read more` section
<br><br>

### **hasMoreContent**
default: **false**</small>


<br><br>

## Methods
{{% api "_furo-ui5-subsection-methods.md" %}}


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

Furo flow is ready lifecycle method

<br><br>


### **toggleCollapse**
<small>**toggleCollapse**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-toggle-collapse</span>

toggles the collapse state

<br><br>








## Slots
{{% api "_furo-ui5-subsection-slots.md" %}}

### **default**
Type: `HTMLElement [0..n]`

defines the content of the subsection.
<br><br>
### **action**
Type: `HTMLElement [0..n]`

defines the heading bar of the subsection.
<br><br>
### **more**
Type: `HTMLElement [0..n]`

defines the additional content in the `show more` section.
<br><br>

{{% api "_furo-ui5-subsection-footer.md" %}}
{{% api "_furo-ui5-subsection-scripts.md" %}}
