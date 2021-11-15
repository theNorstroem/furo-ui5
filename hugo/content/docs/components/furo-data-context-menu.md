---
title: furo-data-context-menu
description: a context menu
weight: 50
---

# furo-data-context-menu
**@furo/components** <small>v1.0.0-alpha.4</small>
<br>`import '@furo/components/src/furo-ui5-context-menu.js';`<small>
<br>exports *FuroUi5ContextMenu* js
<br>exports `<furo-data-context-menu>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-data-context-menu-head.md" %}}

**a context menu**

`furo-data-context-menu`
 A  [material design](https://material.io/components/menus/) context menu or menu element.

 You have to put a `furo-data-context-menu-display` element in one of the parent elements of the element where you use the `furo-data-context-menu`.
 The app-shell is a good place for that.

```html
 <furo-data-context-menu condensed position="below" ƒ-trigger="--menuClkd" ƒ-bind-data="--menuObject" @-menu-item-selected="--menuItem">
     <furo-icon-button icon="menu" @-click="--menuClkd"></furo-icon-button>
 </furo-data-context-menu>
```

{{% api "_furo-data-context-menu-description.md" %}}


## Attributes and Properties
{{% api "_furo-data-context-menu-properties.md" %}}








### **_context**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">context</span>
</small>

Use this to set a string value as context.
<br><br>

### **condensed**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">condensed</span>
</small>

set this for condensed mode.
<br><br>
## Events
{{% api "_furo-data-context-menu-events.md" %}}

### **open-furo-data-menu-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-open-furo-data-menu-requested</span>
→ <small>`{context, menuitem}`</small>

 Fired when context menu was triggered
<br><br>
### **menu-item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-menu-item-selected</span>
→ <small>`{context, menuitem}`</small>

 Fired when a menu item is selected
<br><br>

## Methods
{{% api "_furo-data-context-menu-methods.md" %}}


### **bindData**
<small>**bindData**(*menu* `` ** `Fieldnode` ) ⟹ `void`</small>

<small>`` `Fieldnode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Bind your menu object with the signature of menu.Menuitem or [menu.Menuitem].

- <small>menu </small>
- <small> || RepeaterNode}</small>
<br><br>

### **setContext**
<small>**setContext**(*ctx* `*` ) ⟹ `void`</small>

<small>`*` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-context</span>

Sets the context. Use this if you want to set a Object as context

- <small>ctx Can be anything, will be returned at the menu-item-selected method</small>
<br><br>

### **trigger**
<small>**trigger**(*byKeyboard* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger</span>

Triggers the context menu. Set by keyboard to true to focus the first element for keyboard navigation

- <small>byKeyboard </small>
<br><br>

### **triggerContext**
<small>**triggerContext**(*context* `Object` *byKeyboard* `` ) ⟹ `void`</small>

<small>`Object` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger-context</span>

triggers the menu with context

- <small>context </small>
- <small>byKeyboard </small>
<br><br>






## Slots
{{% api "_furo-data-context-menu-slots.md" %}}

### **default**
Type: `HTMLElement`

default slot to add an individual context menu opener component (e.g. furo-icon-button).
<br><br>

{{% api "_furo-data-context-menu-footer.md" %}}
{{% api "_furo-data-context-menu-scripts.md" %}}
