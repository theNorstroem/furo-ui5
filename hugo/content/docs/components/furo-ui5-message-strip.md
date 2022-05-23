---
title: furo-ui5-message-strip
description: furo ui5 message strip
weight: 50
---

# furo-ui5-message-strip
**@furo/ui5** <small>v1.4.3</small>
<br>`import '@furo/ui5/src/furo-ui5-message-strip.js';`<small>
<br>exports *FuroUi5MessageStrip* js
<br>exports `<furo-ui5-message-strip>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** furo ui5 message strip

## Description

The furo-ui5-message-strip component enables the embedding of app-related messages. It displays 4 types of messages,
each with corresponding semantic color and icon: Information, Positive, Warning and Negative.
Each message can have a Close button, so that it can be removed from the UI, if needed.

It should be used together witch furo-ui5-message-strip-display. You can place those two components into different places.
A good place for placing the furo-ui5-message-strip-display is on the app-shell.
https://experience.sap.com/fiori-design-web/message-strip/

 ```html
 <!-- the display is placed where you want the message to appear -->
 <furo-ui5-message-strip-display></furo-ui5-message-strip-display>
 <furo-ui5-message-strip ƒ-show-information="--wire"></furo-ui5-message-strip>
 ```

{{% api "_furo-ui5-message-strip-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-message-strip-properties.md" %}}










### **noCloseButton**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-close-button</span>
<small>`boolean` default: **false**</small>

Defines whether the MessageStrip renders close icon.
<br><br>

### **noIcon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-icon</span>
<small>`boolean` default: **false**</small>

Defines whether the MessageStrip will show an icon in the beginning. You can directly provide an icon with the icon slot. Otherwise, the default icon for the type will be used.
<br><br>



### **size**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">size</span>
</small>

define the width of ui5-messagestrip. e.g. 200px
<br><br>

### **message**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">message</span>
</small>

the text message of the message strip
<br><br>
## Events
{{% api "_furo-ui5-message-strip-events.md" %}}

### **message-strip-closed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-message-strip-closed</span>
→ <small>`{Object}  payload`</small>

 Fired when the MessageStrip is closed
<br><br>

## Methods
{{% api "_furo-ui5-message-strip-methods.md" %}}




### **showInformation**
<small>**showInformation**(*msg* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show-information</span>

shows an information message
if the param msg is empty, the attribute message is used.

- <small>msg </small>
<br><br>

### **showSuccess**
<small>**showSuccess**(*msg* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show-success</span>

shows a success message
if the param msg is empty, the attribute message is used.

- <small>msg </small>
<br><br>

### **showWarning**
<small>**showWarning**(*msg* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show-warning</span>

shows a warning message
if the param msg is empty, the attribute message is used.

- <small>msg </small>
<br><br>

### **showError**
<small>**showError**(*msg* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show-error</span>

shows an error message
if the param msg is empty, the attribute message is used.

- <small>msg </small>
<br><br>

### **showGrpcLocalizedMessage**
<small>**showGrpcLocalizedMessage**(*rpcStatus* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show-grpc-localized-message</span>

shows a google rpc status message (message LocalizedMessage)
Provides a localized error message that is safe to return to the user
which can be attached to an RPC error.

Rendering rules:
- Every @type LocalizedMessage inside of details[] is displayed with a line break in the message strip.
- One message strip element is created per RPC status.

Example rpc status:

```json
{
 "code":3,
 "message":"Missing mandatory values",
 "details":[
   {"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-GB","message":"Please register all the mandatory values."},
   {"@type":"type.googleapis.com/google.rpc.LocalizedMessage","locale":"en-GB","message":"If you need help completing the data, call 0800-HELP-FURO."},
   {"@type":"type.googleapis.com/google.rpc.BadRequest","field_violations":[
     {"field":"short_form","description":"The country designation (short form) should be set."},
     {"field":"id","description":"The id should be ISO Alpha-2 code as described in the ISO 3166 international standard"},
     {"field":"area","description":"Please set a value for the field area."}]
   }
  ]}
```

Example message strip display:
```
| X  Please register all the mandatory values.
|    If you need help completing the data, call 0800-HELP-FURO.
```

https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto
https://github.com/googleapis/googleapis/blob/master/google/rpc/error_details.proto

- <small>rpcStatus </small>
<br><br>










{{% api "_furo-ui5-message-strip-footer.md" %}}
{{% api "_furo-ui5-message-strip-scripts.md" %}}
