---
title: furo-ui5-markdown
description: renders markdown data
weight: 50
---

# furo-ui5-markdown
**@furo/ui5** <small>v1.5.2</small>
<br>`import '@furo/ui5/src/furo-ui5-markdown.js';`<small>
<br>exports `<furo-ui5-markdown>` custom-element-definition
<br>superclass *LitElement*</small>

> **Summary:** renders markdown data

## Description

`furo-markdown`
 Renders given md data with parseMarkdown or loads a md file with `mdsrc="source.md"`

{{% api "_furo-ui5-markdown-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-markdown-properties.md" %}}



### **mdsrc**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">mdsrc</span>
<small>`String` </small>

source of the md
<br><br>

### **markdown**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">markdown</span>
<small>`String` </small>

markdown string
<br><br>





### **markdownRendered**
default: **undefined**</small>


<br><br>

### **unsafe**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">unsafe</span>
<small>`Boolean` </small>

allow unsafe md. (writing html, components,...)
<br><br>

## Methods
{{% api "_furo-ui5-markdown-methods.md" %}}




### **fetchMd**
<small>**fetchMd**(*src* `` ) ⟹ `Promise&lt;string | never&gt;`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-fetch-md</span>

fetch markdown from a url or path

- <small>src </small>
<br><br>

### **parseMarkdown**
<small>**parseMarkdown**(*markdown* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-parse-markdown</span>

Parse markdown string to html content

- <small>markdown </small>
<br><br>

### **bindData**
<small>**bindData**(*stringField* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>



- <small>stringField </small>
<br><br>







{{% api "_furo-ui5-markdown-footer.md" %}}
{{% api "_furo-ui5-markdown-scripts.md" %}}
