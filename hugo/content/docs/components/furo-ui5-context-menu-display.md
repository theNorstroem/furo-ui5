---
title: furo-ui5-context-menu-display
description: context menu
weight: 50
---

# furo-ui5-context-menu-display
**@furo/ui5** <small>v1.0.0-rc.16</small>
<br>`import '@furo/ui5/src/furo-ui5-context-menu-display.js';`<small>
<br>exports *FuroUi5ContextMenuDisplay* js
<br>exports `<furo-ui5-context-menu-display>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** context menu

## Description

The furo-ui5-context-menu-display is the display element for furo-ui5-context-menu and submenus.
Place this component as high as needed in your dom.

You should not interact with this component directly. Use [`furo-ui5-context-menu`](?t=FuroUi5ContextMenu) to show a context menu.

There is nothing more to do. The menu creates a transparent "backdrop" with absolute positions 0 0 0 0

```html
 <furo-ui5-context-menu-display></furo-ui5-context-menu-display>
```

{{% api "_furo-ui5-context-menu-display-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-context-menu-display-properties.md" %}}






### **borderDistance**
default: **48**</small>

Distance for the sub menus in pixel. This value is used to calculate if the menu or sub menu should apear on the left or on the right.
<br><br>


## Methods
{{% api "_furo-ui5-context-menu-display-methods.md" %}}



### **hideMenu**
<small>**hideMenu**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-hide-menu</span>

Hides the menu witout selecting anything.

If you click somewhere on the background, the menu will also disappear.

<br><br>







{{% api "_furo-ui5-context-menu-display-footer.md" %}}
{{% api "_furo-ui5-context-menu-display-scripts.md" %}}
