---
title: furo-ui5-message-container-display
description: todo shortdescription
weight: 50
---

# furo-ui5-message-container-display
**@furo/ui5** <small>v1.15.0</small>
<br>`import '@furo/ui5/src/furo-ui5-message-container-display.js';`<small>
<br>exports `<furo-ui5-message-container-display>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** todo shortdescription

## Description

`furo-ui5-message-container-display`
 Renders the contenst of a `furo.MessageContainer` or `google.rpc.Status` message.

{{% api "_furo-ui5-message-container-display-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-message-container-display-properties.md" %}}








### **noFilter**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-filter</span>
<small>`Boolean` </small>

Removes the filter tabs on top.
<br><br>


### **disableScrolling**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disable-scrolling</span>
<small>`Boolean` </small>

Disable the scrolling to the element, when the container receives data.
<br><br>
## Events
{{% api "_furo-ui5-message-container-display-events.md" %}}

### **message-item-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-message-item-clicked</span>
→ <small>`Object`</small>

fired when a
<br><br>

## Methods
{{% api "_furo-ui5-message-container-display-methods.md" %}}


### **bindRootNode**
<small>**bindRootNode**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-root-node</span>

Bind your "root node" for the messages.

The state updates from the injected raw messagecontainer are applied to the fields of the root node.

- <small>fieldNode Any custom fieldnode</small>
<br><br>

### **bindMessageContainer**
<small>**bindMessageContainer**(*mcfieldnode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-message-container</span>

bindData bind a furo.messagecontainer field node

- <small>mcfieldnode </small>
<br><br>


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>








{{% api "_furo-ui5-message-container-display-footer.md" %}}
{{% api "_furo-ui5-message-container-display-scripts.md" %}}
