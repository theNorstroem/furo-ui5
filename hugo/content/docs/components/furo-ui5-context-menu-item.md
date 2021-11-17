---
title: furo-ui5-context-menu-item
description: helper
weight: 50
---

# furo-ui5-context-menu-item
**@furo/components** <small>v1.0.0-alpha.4</small>
<br>`import '@furo/components/src/furo-ui5-context-menu-item.js';`<small>
<br>exports *FuroUi5ContextMenuItem* js
<br>exports `<furo-ui5-context-menu-item>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-ui5-context-menu-item-head.md" %}}

**helper**

`furo-ui5-context-menu-item` is a helper component for `furo-ui5-context-menu`.

Use [`furo-ui5-context-menu`](?t=FuroUi5ContextMenu) to show a context menu.

{{% api "_furo-ui5-context-menu-item-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-context-menu-item-properties.md" %}}













### **icon**
default: **&#39;border&#39;**</small>


<br><br>

### **focused**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">focused</span> <small>**reflects**</small>
</small>

focused state
<br><br>

### **disabled**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">disabled</span> <small>**reflects**</small>
</small>


<br><br>
## Events
{{% api "_furo-ui5-context-menu-item-events.md" %}}

### **mousefocus**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-mousefocus</span>
→ <small>`index`</small>

 Fired when hovered with mouse
<br><br>
### **opensub-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-opensub-requested</span>
→ <small>`menu: this.menuitem, initiator: this`</small>

 Fired when submenu should be opened
<br><br>
### **item-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-item-selected</span>
→ <small>`item`</small>

 Fired when item was selected
<br><br>

## Methods
{{% api "_furo-ui5-context-menu-item-methods.md" %}}



### **bindData**
<small>**bindData**(*menuNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>



- <small>menuNode </small>
<br><br>




### **select**
<small>**select**(*key* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select</span>

selects the item if it does not have child elements

- <small>key </small>
<br><br>


### **index**
<small>**index**(*i* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-index</span>

store the index for mouseover focus

- <small>i </small>
<br><br>

### **setFocused**
<small>**setFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-set-focused</span>

mark item as focused

<br><br>

### **unsetFocused**
<small>**unsetFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-unset-focused</span>

mark item as unfocused

<br><br>







{{% api "_furo-ui5-context-menu-item-footer.md" %}}
{{% api "_furo-ui5-context-menu-item-scripts.md" %}}