---
title: furo-ui5-button
description: ui5 button with methods
weight: 50
---

# furo-ui5-button
**@furo/components** <small>v1.0.0-rc.9</small>
<br>`import '@furo/components/src/furo-ui5-button.js';`<small>
<br>exports *FuroUi5Button* js
<br>exports `<furo-ui5-button>` custom-element-definition
<br>extends *src/furo-ui5-button.js*</small>

> **Summary:** ui5 button with methods

## Description

The furo-ui5-button component represents a simple push button. It enables users to trigger actions by clicking or
tapping the furo-ui5-button, or by pressing certain keyboard keys, such as Enter.
Usage
For the furo-ui5-button UI, you can define text, icon, or both. You can also specify whether the text or the icon is displayed first.

```html
<furo-ui5-button>Register</furo-ui5-button>
```

You can choose from a set of predefined types that offer different styling to correspond to the triggered action.

You can set the furo-ui5-button as enabled or disabled.
An enabled ui5-button can be pressed by clicking or tapping it.
The button changes its style to provide visual feedback to the user that it is pressed or hovered over with the mouse cursor.
A disabled furo-ui5-button appears inactive and cannot be pressed.

What is different from ui5-button?
With flow based programming it's usual to address functions. So we added two convenience functions for
- disabling => ƒ-disable
- enabling => ƒ-enable

https://sap.github.io/ui5-webcomponents/playground/components/Button/

{{% api "_furo-ui5-button-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-button-properties.md" %}}








## Methods
{{% api "_furo-ui5-button-methods.md" %}}



### **disable**
<small>**disable**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-disable</span>

Sets the button state to disabled

<br><br>

### **enable**
<small>**enable**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-enable</span>

Sets the button state to enabled

<br><br>

### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show</span>

shows the button, when it was hidden before

<br><br>

### **hide**
<small>**hide**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-hide</span>

hides the button

<br><br>




{{% api "_furo-ui5-button-footer.md" %}}
{{% api "_furo-ui5-button-scripts.md" %}}
