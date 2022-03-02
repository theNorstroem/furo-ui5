---
title: furo-ui5-dialog
description: Dialog element
weight: 50
---

# furo-ui5-dialog
**@furo/ui5** <small>v1.1.0</small>
<br>`import '@furo/ui5/src/furo-ui5-dialog.js';`<small>
<br>exports *FuroUi5Dialog* js
<br>extends *src/furo-ui5-dialog.js*</small>

> **Summary:** Dialog element

## Description

The furo-ui5-dialog is a extended ui5-dialog which can attach itself to a parent dom element.

This is helpful, when you have used z-indexes in one of the parents, which put the original ui5-dialog behind the backdrop.

Use this component like a regular ui5-dialog and do not forget to place the furo-ui5-dialog-display in one of the parent elements.

It supports all features from the [SAP ui5 Dialog element](https://sap.github.io/ui5-webcomponents/playground/components/Dialog/).

**important:** Place a furo-ui5-dialog-display in any dom parent of the component where you use furo-ui5-dialog. Your app-shell or body is a good place to do that.

```html
<furo-ui5-dialog header-text="Dialog title" ƒ-show="--openDialogClicked" ƒ-close="--closeDialogClicked">
  <p>Content</p>
  <div slot="footer"> <button @-click="--closeDialogClicked">close dialog</button></div>
</furo-ui5-dialog>

<button @-click="--openDialogClicked">Open dialog</button>
```

{{% api "_furo-ui5-dialog-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-dialog-properties.md" %}}





## Methods
{{% api "_furo-ui5-dialog-methods.md" %}}


### **show**
<small>**show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-show</span>

shows the dialog

<br><br>





{{% api "_furo-ui5-dialog-footer.md" %}}
{{% api "_furo-ui5-dialog-scripts.md" %}}
