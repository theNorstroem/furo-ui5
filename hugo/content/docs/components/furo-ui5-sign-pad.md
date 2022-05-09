---
title: furo-ui5-sign-pad
description: draw or sign
weight: 50
---

# furo-ui5-sign-pad
**@furo/ui5** <small>v1.3.0-rc.0</small>
<br>`import '@furo/ui5/src/furo-ui5-sign-pad.js';`<small>
<br>exports *FuroUi5SignPad* js
<br>exports `<furo-ui5-sign-pad>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** draw or sign

## Description

`furo-sign-pad`
 Simple pad to sign or draw something

{{% api "_furo-ui5-sign-pad-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-sign-pad-properties.md" %}}













## Events
{{% api "_furo-ui5-sign-pad-events.md" %}}

### **sign-updated**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-sign-updated</span>
→ <small>`Base64`</small>

Fired when sign gets new painting, with base encoded image.
<br><br>

## Methods
{{% api "_furo-ui5-sign-pad-methods.md" %}}



### **resize**
<small>**resize**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-resize</span>

Trigger this method after a resize.

<br><br>

### **disable**
<small>**disable**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-disable</span>

Disables the pad

<br><br>

### **enable**
<small>**enable**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-enable</span>

Enables the pad

<br><br>


### **clear**
<small>**clear**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear</span>

Clears the image. This also updates the bound field.

<br><br>

### **putImage**
<small>**putImage**(*encodedImage* `imageURL` ) ⟹ `void`</small>

<small>`imageURL` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-put-image</span>

Adds the encoded image to the canvas.

Maybe you want to clear first.

- <small>encodedImage </small>
<br><br>

### **encodeImage**
<small>**encodeImage**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-encode-image</span>

Encodes the image using the type and encodingOptions (quality) defined.
The encoded image is available in the `image` property.

<br><br>

### **bindData**
<small>**bindData**(*entityField* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

bind a entity field

- <small>entityField </small>
<br><br>






{{% api "_furo-ui5-sign-pad-footer.md" %}}
{{% api "_furo-ui5-sign-pad-scripts.md" %}}
