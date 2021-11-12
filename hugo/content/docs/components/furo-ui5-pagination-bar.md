---
title: furo-ui5-pagination-bar
description: Pagination Bar
weight: 50
---

# furo-ui5-pagination-bar
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-pagination-bar.js';`<small>
<br>exports *FuroUi5PaginationBar* js
<br>exports `<furo-ui5-pagination-bar>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-pagination-bar-head.md" %}}

**Pagination Bar**

`furo-ui5-pagination-bar`
this pagination element loops the hts array and find out the pagination
information like prev, next, first and last

{{% api "_furo-ui5-pagination-bar-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-pagination-bar-properties.md" %}}







### **currentPage**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">currentPage</span>
<small>`number` default: **0**</small>


<br><br>

### **first**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">first</span>
</small>


<br><br>

### **prev**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">prev</span>
</small>


<br><br>

### **next**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">next</span>
</small>


<br><br>

### **last**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">last</span>
</small>


<br><br>
## Events
{{% api "_furo-ui5-pagination-bar-events.md" %}}

### **hts-injected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-hts-injected</span>
→ <small>`CustomEvent`</small>


<br><br>
### **pagination-first**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-pagination-first</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_first_page' was clicked
<br><br>
### **pagination-last**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-pagination-last</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_last_page' was clicked
<br><br>
### **pagination-prev**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-pagination-prev</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_prev_page' was clicked
<br><br>
### **pagination-next**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-pagination-next</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_next_page' was clicked Tags: pagination
<br><br>

## Methods
{{% api "_furo-ui5-pagination-bar-methods.md" %}}


### **inject**
<small>**inject**(*hts* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject</span>

init pagination attributes

- <small>hts </small>
<br><br>

### **_disableAll**
<small>**_disableAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--disable-all</span>



<br><br>


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--fbp-ready</span>



<br><br>








## Styling
{{% api "_furo-ui5-pagination-bar-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-ui5-pagination-bar-padding-right` | Right padding definition <hr> <small>default: `--spacing`</small> <small>fallback: `24px`</small>
`--furo-ui5-pagination-bar-background-color` | Background color <hr> <small>default: `--surface-light`</small> <small>fallback: `#ffffff`</small>

{{% api "_furo-ui5-pagination-bar-footer.md" %}}
{{% api "_furo-ui5-pagination-bar-scripts.md" %}}