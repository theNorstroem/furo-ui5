---
title: furo-ui5-sign-pad
description: draw or sign
weight: 50
---

# furo-ui5-sign-pad
**@furo/components** <small>v1.0.0-rc.6</small>
<br>`import '@furo/components/src/furo-ui5-sign-pad.js';`<small>
<br>exports *FuroUi5SignPad* js
<br>exports `<furo-ui5-sign-pad>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-sign-pad-head.md" %}}

**draw or sign**

`furo-sign-pad`
 Simple pad to sign or draw something

### Sample
 <furo-demo-snippet>
  <template>
   <furo-sign-pad @-sign-updated="--signed"></furo-sign-pad>
    <img ƒ-.src="--signed" alt="" width="150px">
  </template>
 </furo-demo-snippet>

{{% api "_furo-ui5-sign-pad-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-sign-pad-properties.md" %}}




















### **field**
default: **{}**</small>


<br><br>
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



<br><br>

### **_setEmpty**
<small>**_setEmpty**(*b* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--set-empty</span>

unlock() {
 this.signaturePad.on();
}

lock() {
 this.signaturePad.off();
}

- <small>b </small>
<br><br>

### **_setActive**
<small>**_setActive**(*b* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--set-active</span>



- <small>b </small>
<br><br>

### **clear**
<small>**clear**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear</span>

Clears the image

<br><br>

### **setImage**
<small>**setImage**(*encodedImage* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-image</span>



- <small>encodedImage </small>
<br><br>

### **encodeImage**
<small>**encodeImage**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-encode-image</span>

Encodes the image using the type and encodingOptions (quality) defined.
The encoded image is available in the `image` property.

<br><br>

### **_onBegin**
<small>**_onBegin**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--on-begin</span>



<br><br>

### **_onEnd**
<small>**_onEnd**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--on-end</span>



<br><br>

### **_dotSizeChanged**
<small>**_dotSizeChanged**(*newValue* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--dot-size-changed</span>



- <small>newValue </small>
<br><br>

### **_minWidthChanged**
<small>**_minWidthChanged**(*newValue* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--min-width-changed</span>



- <small>newValue </small>
<br><br>

### **_maxWidthChanged**
<small>**_maxWidthChanged**(*newValue* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--max-width-changed</span>



- <small>newValue </small>
<br><br>

### **_backgroundColorChanged**
<small>**_backgroundColorChanged**(*newValue* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--background-color-changed</span>



- <small>newValue </small>
<br><br>

### **_penColorChanged**
<small>**_penColorChanged**(*newValue* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--pen-color-changed</span>



- <small>newValue </small>
<br><br>

### **_velocityFilterWeightChanged**
<small>**_velocityFilterWeightChanged**(*newValue* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--velocity-filter-weight-changed</span>



- <small>newValue </small>
<br><br>

### **_onEncodingChanged**
<small>**_onEncodingChanged**(*type* `` *encoderOptions* `` ) ⟹ `void`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--on-encoding-changed</span>



- <small>type </small>
- <small>encoderOptions </small>
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
