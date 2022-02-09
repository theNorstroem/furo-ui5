---
title: furo-ui5-tree-item
description: tree item
weight: 50
---

# furo-ui5-tree-item
**@furo/ui5** <small>v1.0.0-rc.24</small>
<br>`import '@furo/ui5/src/subcomponents/furo-ui5-tree-item.js';`<small>
<br>exports *FuroUi5TreeItem* js
<br>exports `<furo-ui5-tree-item>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** tree item

## Description

`furo-tree-item`
/**
# INTERNAL COMPONENT
This is a helper component to send `tablerow-selected` event by clicking the row or pressing the enter on the row.

{{% api "_furo-ui5-tree-item-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-tree-item-properties.md" %}}










### **hidden**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">hidden</span> <small>**reflects**</small>
<small>`boolean` default: **true**</small>

Description
<br><br>

### **isGroupLabel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">is-group-label</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>


<br><br>

### **indentation**
default: **0**</small>


<br><br>

### **_icon**
default: **&#39;border&#39;**</small>


<br><br>

### **focused**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">focused</span> <small>**reflects**</small>
</small>


<br><br>

### **searchmatch**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">searchmatch</span> <small>**reflects**</small>
</small>


<br><br>

### **inedit**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">inedit</span> <small>**reflects**</small>
</small>


<br><br>

### **haserror**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">haserror</span> <small>**reflects**</small>
</small>


<br><br>

### **selected**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">selected</span> <small>**reflects**</small>
</small>


<br><br>

### **noicon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">noicon</span>
</small>


<br><br>

## Methods
{{% api "_furo-ui5-tree-item-methods.md" %}}


### **search**
<small>**search**(*event* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-search</span>



- <small>event </small>
<br><br>

### **_updateItem**
<small>**_updateItem**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--update-item</span>



<br><br>

### **bindData**
<small>**bindData**(*fieldNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>



- <small>fieldNode </small>
<br><br>



### **__addNodeSelectedListener**
<small>**__addNodeSelectedListener**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ---add-node-selected-listener</span>



<br><br>














## Styling
{{% api "_furo-ui5-tree-item-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--tree-indentation-1` | tree indention level 1 <hr> <small>default: `16px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-2` | tree indention level 2 <hr> <small>default: `32px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-3` | tree indention level 3 <hr> <small>default: `48px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-4` | tree indention level 4 <hr> <small>default: `56px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-5` | tree indention level 5 <hr> <small>default: `64px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-6` | tree indention level 6 <hr> <small>default: `72px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-7` | tree indention level 7 <hr> <small>default: `80px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-8` | tree indention level 8 <hr> <small>default: `88px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-9` | tree indention level 9 <hr> <small>default: `92px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-10` | tree indention level 10 <hr> <small>default: `96px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-11` | tree indention level 11 <hr> <small>default: `100px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-12` | tree indention level 12 <hr> <small>default: `104px`</small> <small>fallback: `N/A`</small>

{{% api "_furo-ui5-tree-item-footer.md" %}}
{{% api "_furo-ui5-tree-item-scripts.md" %}}
