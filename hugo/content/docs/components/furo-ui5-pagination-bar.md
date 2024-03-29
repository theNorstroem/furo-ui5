---
title: furo-ui5-pagination-bar
description: Pagination Bar
weight: 50
---

# furo-ui5-pagination-bar
**@furo/ui5** <small>v1.18.0</small>
<br>`import '@furo/ui5/src/furo-ui5-pagination-bar.js';`<small>
<br>exports *FuroUi5PaginationBar* js
<br>exports `<furo-ui5-pagination-bar>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Pagination Bar

## Description

The furo-ui5-pagination-bar element loops the hateoas array and finds out the pagination
information like prev, next, first and last

```
  <furo-ui5-pagination-bar fn-inject="--hateoas"></furo-ui5-pagination-bar>
```

{{% api "_furo-ui5-pagination-bar-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-pagination-bar-properties.md" %}}







### **currentPage**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">currentPage</span>
<small>`number` default: **0**</small>


<br><br>

### **first**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">first</span>
<small>`boolean` </small>


<br><br>

### **prev**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">prev</span>
<small>`boolean` </small>


<br><br>

### **next**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">next</span>
<small>`boolean` </small>


<br><br>

### **last**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">last</span>
<small>`boolean` </small>


<br><br>
## Events
{{% api "_furo-ui5-pagination-bar-events.md" %}}

### **hts-injected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-hts-injected</span>
→ <small>`CustomEvent`</small>


<br><br>
### **pagination-first**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-pagination-first</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_first_page' was clicked
<br><br>
### **pagination-last**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-pagination-last</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_last_page' was clicked
<br><br>
### **pagination-prev**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-pagination-prev</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_prev_page' was clicked
<br><br>
### **pagination-next**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-pagination-next</span>
→ <small>``</small>

 Is fired if the pagination button 'sys_next_page' was clicked
<br><br>

## Methods
{{% api "_furo-ui5-pagination-bar-methods.md" %}}


### **inject**
<small>**inject**(*hts* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject</span>

init pagination attributes
Supported type: furo.Link

- <small>hts </small>
<br><br>











## Slots
{{% api "_furo-ui5-pagination-bar-slots.md" %}}

### **start**
Type: `HTMLElement`

Defines the content at the start of the bar
<br><br>
### **default**
Type: `HTMLElement`

Defines the content in the middle of the bar Tags: pagination
<br><br>
## Styling
{{% api "_furo-ui5-pagination-bar-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-ui5-pagination-bar-padding-right` | Right padding definition <hr> <small>default: `1rem`</small> <small>fallback: `1rem`</small>
`--furo-ui5-pagination-bar-background-color` | Background color <hr> <small>default: `--sapPageHeader_Background`</small> <small>fallback: `#ffffff`</small>

{{% api "_furo-ui5-pagination-bar-footer.md" %}}
{{% api "_furo-ui5-pagination-bar-scripts.md" %}}
