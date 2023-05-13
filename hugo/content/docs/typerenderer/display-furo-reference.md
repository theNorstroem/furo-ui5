---
title: display-furo-reference
description: display renderer for `furo.Reference`
weight: 50
---

# display-furo-reference
**@furo/ui5** <small>v1.16.2</small>
<br>`import '@furo/ui5/src/typerenderer/display-furo-reference.js';`<small>
<br>exports *DisplayFuroReference* js
<br>exports `<display-furo-reference>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** display renderer for `furo.Reference`

## Description

`display-furo-reference`
The display-furo-reference component displays a FieldNode of type `furo.Reference` in read only mode.

Every display-xxx component should implement the following API:
- function: bindData(fieldNode){...}

{{% api "_display-furo-reference-head.md" %}}

## Attributes and Properties
{{% api "_display-furo-reference-properties.md" %}}





## Events
{{% api "_display-furo-reference-events.md" %}}

### **selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-selected</span>
→ <small>``</small>

when item was clicked or selected, because click from ui5 does not bubble
<br><br>

## Methods
{{% api "_display-furo-reference-methods.md" %}}


### **bindData**
<small>**bindData**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Binds a field node to the component

- <small>fieldNode </small>
<br><br>






{{% api "_display-furo-reference-footer.md" %}}
{{% api "_display-furo-reference-scripts.md" %}}
