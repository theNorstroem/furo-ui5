---
title: furo-ui5-context-menu
description: Context menu
weight: 50
---

# furo-ui5-context-menu
**@furo/ui5** <small>v1.14.4</small>
<br>`import '@furo/ui5/src/furo-ui5-context-menu.js';`<small>
<br>exports *FuroUi5ContextMenu* js
<br>exports `<furo-ui5-context-menu>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Context menu

## Description

furo-ui5-context-menu is a context menu or menu element.

A `furo-ui5-context-menu-display` element must be inserted in one of the parent elements of the element where you
use the `furo-ui5-context-menu`. The app-shell or even body is a good place for that.

`furo-ui5-context-menu` uses **diplay:inline**, do not forget to change it to display:block if you place it around a block level element.

```html
 <furo-ui5-context-menu  fn-trigger="--menuClkd" fn-bind-data="--menuObject" at-menu-item-selected="--menuItem">
     <ui5-icon name="menu" at-click="--menuClkd"></ui5-icon>
 </furo-ui5-context-menu>
```

## Data signature

```yaml
- type: 'menu.Menuitem #Item signature for a context menu'
 fields:
   icon: 'string:1 #Leading icon of the menu'
   display_name: 'string:2 #String representation of the menu item. Menu item text'
   disabled: 'bool:3 #Display actions as disabled when they can only be used sometimes and under certain conditions.'
   command: 'string:4 #Keyboard command hint'
   leading_divider: 'bool:5 #Item has a leading divider line'
   children: '[] menu.Menuitem:6 #Children of this item'
```

## Minimal data signature

```yaml
- type: 'menu.Menuitem #Item signature for a context menu'
 fields:
   id: 'string:1 #Id of the menu item'
   display_name: 'string:2 #String representation of the menu item. Menu item text'
```

{{% api "_furo-ui5-context-menu-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-context-menu-properties.md" %}}








## Events
{{% api "_furo-ui5-context-menu-events.md" %}}

### **menu-item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-menu-item-selected</span>
→ <small>`{context, menuitem}`</small>

 Fired when a menu item is selected.
<br><br>

## Methods
{{% api "_furo-ui5-context-menu-methods.md" %}}


### **bindData**
<small>**bindData**(*menu* `` ** `Fieldnode` ) ⟹ `void`</small>

<small>`` `Fieldnode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-data</span>

Bind your menu object.

- <small>menu </small>
- <small> || RepeaterNode} menu with `menu.Menuitem` signature</small>
<br><br>

### **setContext**
<small>**setContext**(*ctx* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-set-context</span>

Sets the context. Use this if you want to set a Object as context

- <small>ctx Can be anything, will be returned at the menu-item-selected method</small>
<br><br>

### **trigger**
<small>**trigger**(*byKeyboard* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger</span>

Triggers the context menu. Set by keyboard to true to focus the first element for keyboard navigation

- <small>byKeyboard </small>
<br><br>

### **triggerContext**
<small>**triggerContext**(*context* `Object` *byKeyboard* `` ) ⟹ `void`</small>

<small>`Object` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-trigger-context</span>

triggers the menu with context

- <small>context </small>
- <small>byKeyboard </small>
<br><br>





## Slots
{{% api "_furo-ui5-context-menu-slots.md" %}}

### **default**
Type: `HTMLElement`

default slot to add an individual context menu opener component (e.g. furo-icon-button).
<br><br>

{{% api "_furo-ui5-context-menu-footer.md" %}}
{{% api "_furo-ui5-context-menu-scripts.md" %}}
