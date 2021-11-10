---
title: furo-panel-coordinator-tabs
description: tab navigation for panel-coordinator
weight: 50
---

# furo-panel-coordinator-tabs
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-panel-coordinator-tabs.js';`<small>
<br>exports `<furo-panel-coordinator-tabs>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-panel-coordinator-tabs-head.md" %}}

**tab navigation for panel-coordinator**

Tab navigation for the open panels in a panel-coordinator.


```html
 <!-- inject the tabs from panelCoordinator and connect the keyboard navigation -->
 <furo-panel-coordinator-tabs ƒ-inject-tabs="--panelChanges" ƒ-trigger-navigation="--navpadPanelTabs" >
   <!-- add keyboard navigation -->
   <furo-navigation-pad @-navigated="--navpadPanelTabs"></furo-navigation-pad>
 </furo-panel-coordinator-tabs>
 <furo-pages flex default="default">
   <furo-panel-coordinator ƒ-show-page="--nodeSelected"  @-panels-changed="--panelChanges"></furo-panel-coordinator>
```

{{% api "_furo-panel-coordinator-tabs-description.md" %}}


## Attributes and Properties
{{% api "_furo-panel-coordinator-tabs-properties.md" %}}













### **tabindex**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tabindex</span> <small>**reflects**</small>
<small>`number` default: **0**</small>

Sets the tabindex
<br><br>

### **_focusIndex**
default: **0**</small>


<br><br>

### **focused**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">focused</span> <small>**reflects**</small>
</small>

indicates that the element is focused
<br><br>

## Methods
{{% api "_furo-panel-coordinator-tabs-methods.md" %}}


### **triggerNavigation**
<small>**triggerNavigation**(*key* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger-navigation</span>

Connect your navigation pad.

Default mappings are:
- Enter => selectFocused
- ArroLeft => focusPrevious
- ArroRight => focusNext
- Home => focusFirst
- End => focusLast
- Escape => closeFocused

To disable a function, just add the `ignored-keys` to furo-navigation-tabs.

- <small>key </small>
<br><br>

### **closeFocused**
<small>**closeFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-close-focused</span>

Closes the focused tab.

<br><br>

### **focusNext**
<small>**focusNext**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-next</span>

Focuses the next tab. If you are on the last tab, the frist tab will be selected

<br><br>

### **focusFirst**
<small>**focusFirst**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-first</span>

Focuses the first tab.

<br><br>

### **focusLast**
<small>**focusLast**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-last</span>

Focuses the last tab.

<br><br>

### **selectFocused**
<small>**selectFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-focused</span>

Select the focused tab.

<br><br>

### **focusPrevious**
<small>**focusPrevious**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-previous</span>

Focuses the previous tab.

<br><br>

### **injectTabs**
<small>**injectTabs**(*nodeArray* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-tabs</span>

Inject data from a navigationnode

- <small>nodeArray </small>
<br><br>


### **focus**
<small>**focus**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus</span>

focuses the element itself. The "focused" tab will get the focus

<br><br>







{{% api "_furo-panel-coordinator-tabs-footer.md" %}}
{{% api "_furo-panel-coordinator-tabs-scripts.md" %}}
