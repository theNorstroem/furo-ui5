---
title: furo-ui5-header-panel
description: A bindable header panel
weight: 50
---

# furo-ui5-header-panel
**@furo/ui5** <small>v1.15.1</small>
<br>`import '@furo/ui5/src/furo-ui5-header-panel.js';`<small>
<br>exports *FuroUi5HeaderPanel* js
<br>exports `<furo-ui5-header-panel>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** A bindable header panel

## Description

A bindable **header** panel.

**Info**: This component is intended to use as a header panel, if you need panels in your view, consider to use
a ui5-panel directly. That is also the reason that the api does not match with ui5-panel.

This component is a container which has a header and a content area and is used for grouping and displaying information.
It can be collapsed to save space on the screen.

```html
 <furo-ui5-header-panel header-text="Header Text" secondary-text="Subtitle Text" icon="task"></furo-ui5-header-panel>
```

{{% api "_furo-ui5-header-panel-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-header-panel-properties.md" %}}











### **icon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon</span>
<small>`string` default: **&#39;&#39;**</small>

icon
<br><br>

### **iconSize**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon-size</span>
<small>`string` default: **&#39;S&#39;**</small>

size of the icon. Available options are: XS S M L XL. Default is S.
<br><br>

### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text</span>
<small>`string` default: **&#39;&#39;**</small>

Header Text
<br><br>

### **headerTextLevel**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text-level</span>
<small>`string` default: **&#39;H2&#39;**</small>

Set the level of the header text, default is H2
<br><br>

### **secondaryText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">secondary-text</span>
<small>`string` default: **&#39;&#39;**</small>

sub title
<br><br>

### **collapsed**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">collapsed</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

Collapsed
<br><br>

### **headerIcon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-icon</span>
</small>

Set this to have a clickable icon on the header line
<br><br>

### **bigAction**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">big-action</span>
<small>`Boolean` </small>

Set to true to have a bigger action area (50:50).

The default ratio for title:action slot is 75:25
<br><br>
## Events
{{% api "_furo-ui5-header-panel-events.md" %}}

### **collapsed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-collapsed</span>
→ <small>`Event`</small>

Fired when panel is collapsed by user interaction.
<br><br>
### **expanded**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-expanded</span>
→ <small>`Event`</small>

Fired when panel is expanded by user interaction.
<br><br>
### **header-icon-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-header-icon-clicked</span>
→ <small>``</small>

{buttonRef} Fired when the header icon was clicked.
<br><br>

## Methods
{{% api "_furo-ui5-header-panel-methods.md" %}}


### **bindHeaderText**
<small>**bindHeaderText**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-header-text</span>

Bind any **scalar** field to set the title of the panel.
Supported types: scalar types

- <small>fieldNode </small>
<br><br>

### **bindSecondaryText**
<small>**bindSecondaryText**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-secondary-text</span>

Bind any **scalar** field to set the secondaryText of the panel.

- <small>fieldNode </small>
<br><br>

### **bindNavNode**
<small>**bindNavNode**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-nav-node</span>

bind a furo.navigation.Navigationnode field

- <small>fieldNode </small>
<br><br>

### **bindIcon**
<small>**bindIcon**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-bind-icon</span>

Bind any **scalar** field to set the title of the panel.
Do not forget to import the icon you will use in your component.

- <small>fieldNode </small>
<br><br>

### **toggleCollapse**
<small>**toggleCollapse**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-toggle-collapse</span>

toggles the collapse state

<br><br>














## Slots
{{% api "_furo-ui5-header-panel-slots.md" %}}

### **action**
Type: `HTMLElement [0..n]`

defines an action, displayed in the right most part of the header panel.
<br><br>
### **default**
Type: `HTMLElement [0..n]`

defines the content of the panel ### Styling The following custom properties and mixins are available for styling:
<br><br>
## Styling
{{% api "_furo-ui5-header-panel-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--furo-ui5-header-panel-icon-color` | Color of the icon <hr> <small>default: `--ui5-avatar-initials-color`</small> <small>fallback: `#ffffff`</small>
`--furo-ui5-header-panel-icon-background-color` | background Color of the icon <hr> <small>default: `--ui5-avatar-accent6`</small> <small>fallback: `#354a5f`</small>
`--furo-ui5-header-panel-splitter-start-color` | the gradient-start hex-Color of the splitter <hr> <small>default: `--sapHighlightColor`</small> <small>fallback: `#0854a0`</small>
`--furo-ui5-header-panel-splitter-end-rgba-color` | the gradient-end rgba-Color of the splitter <hr> <small>default: `rgba(8, 84, 16, 0)`</small> <small>fallback: `rgba(8, 84, 16, 0)`</small>

{{% api "_furo-ui5-header-panel-footer.md" %}}
{{% api "_furo-ui5-header-panel-scripts.md" %}}
