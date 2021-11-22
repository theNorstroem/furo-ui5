---
title: furo-ui5-busyindicator
description: ui5 busy indicator
weight: 50
---

# furo-ui5-busyindicator
**@furo/components** <small>v1.0.0-rc.2</small>
<br>`import '@furo/components/src/furo-ui5-busyindicator.js';`<small>
<br>exports *FuroUiBusyindicator* js
<br>exports `<furo-ui5-busyindicator>` custom-element-definition
<br>extends *src/furo-ui5-busyindicator.js*</small>

{{% api "_furo-ui5-busyindicator-head.md" %}}

**ui5 busy indicator**

`furo-ui5-busyindicator`
The furo-ui5-busyindicator signals that some operation is going on and that the user must wait. It does not block
the current UI screen so other operations could be triggered in parallel.
Usage
For the furo-ui5-busyindicator you can define the size of the indicator, as well as whether it is shown or hidden.
In order to hide it, use the html attribute hidden or display: none;

In order to show busy state for an HTML element, simply nest the HTML element in a furo-ui5-busyindicator instance.
Note: Since furo-ui5-busyindicator has display: inline-block; by default and no width of its own, whenever you need
to wrap a block-level element, you should set display: block to the busy indicator as well.

What is different from ui5-busyindicator?
With flow based programming it's usual to address functions. So we added two convenience functions for
- activate => ƒ-activate
- deactivate => ƒ-deactivate

https://sap.github.io/ui5-webcomponents/playground/components/BusyIndicator/

{{% api "_furo-ui5-busyindicator-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-busyindicator-properties.md" %}}





## Methods
{{% api "_furo-ui5-busyindicator-methods.md" %}}


### **activate**
<small>**activate**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-activate</span>

Sets the busy indicator state to active

<br><br>

### **deactivate**
<small>**deactivate**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-deactivate</span>

Sets the busy indicator state to inactive

<br><br>




{{% api "_furo-ui5-busyindicator-footer.md" %}}
{{% api "_furo-ui5-busyindicator-scripts.md" %}}
