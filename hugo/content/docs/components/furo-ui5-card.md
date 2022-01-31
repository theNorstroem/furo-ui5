---
title: furo-ui5-card
description: Ui5 card with data bindings
weight: 50
---

# furo-ui5-card
**@furo/ui5** <small>v1.0.0-rc.17</small>
<br>`import '@furo/ui5/src/furo-ui5-card.js';`<small>
<br>exports *FuroUi5Card* js
<br>exports `<furo-ui5-card>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** Ui5 card with data bindings

## Description

The furo-ui5-card is a bindable card that represents information in the form of a tile with
separate header and content areas.

```html
 <furo-ui5-card
   heading="Title"
   subheading="Secondary text"
   icon="card"
 >
     <div slot="action"><furo-ui5-button>Action</furo-ui5-button></div>
     <div slot="content">content goes here</div>
 </furo-ui5-card>
```

## How To Use Semantic Colors
You can use semantic colors to visualize the status or state. Set the attribute design="" with the following values:
- Positive (--sapPositiveColor)
- Negative (--sapNegativeColor)
- Critical (--sapCriticalColor)
- Neutral (--sapCriticalColor)

```html
 <furo-ui5-card
   design="Positive"
   icon="card"
 >
     <div slot="content">content goes here</div>
 </furo-ui5-card>
```

{{% api "_furo-ui5-card-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-card-properties.md" %}}








### **icon**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">icon</span> <small>**reflects**</small>
<small>`string` default: **&#39;&#39;**</small>

Defines the visual representation in the header of the card. Supports images and icons.
https://openui5.hana.ondemand.com/test-resources/sap/m/demokit/iconExplorer/webapp/index.html
<br><br>

### **heading**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">heading</span>
<small>`string` default: **&#39;&#39;**</small>

Defines the title displayed in the ui5-card header.
<br><br>

### **subheading**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">subheading</span>
<small>`string` default: **&#39;&#39;**</small>

Defines the subheading displayed in the ui5-card header.
<br><br>

### **status**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">status</span>
<small>`string` default: **&#39;&#39;**</small>

Defines the status text displayed in the card header (upper right).

By enabling the status, actions are not visible.
<br><br>

### **headerInteractive**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-interactive</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

Defines if the ui5-card header would be interactive, e.g gets hover effect, gets focused and header-click event is fired, when it is pressed.
<br><br>

### **noContentPadding**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-content-padding</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

Shows the content slot area with no padding
<br><br>
## Events
{{% api "_furo-ui5-card-events.md" %}}

### **header-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-header-clicked</span>
→ <small>``</small>

Fired when the card head is clicked. The header-interactive attribute must be set.
<br><br>
### **header-click**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-header-click</span>
→ <small>``</small>

Fired when interactive header was clicked.
<br><br>

## Methods
{{% api "_furo-ui5-card-methods.md" %}}


### **bindHeading**
<small>**bindHeading**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-heading</span>

Binds any **scalar** field to set the title of the panel.

Supported types: scalar types e.g. `string`

- <small>fieldNode `string`</small>
<br><br>

### **bindIcon**
<small>**bindIcon**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-icon</span>

Binds a FieldNode to set the icon of the panel.

Do not forget to import the icon you will use in your component.

Supported types: `string`

- <small>fieldNode `string`</small>
<br><br>

### **bindSubheading**
<small>**bindSubheading**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-subheading</span>

Binds any **scalar** field to set the subtitle of the panel.

Supported types: scalar types e.g. `string`

- <small>fieldNode `string`</small>
<br><br>

### **bindNavNode**
<small>**bindNavNode**(*fieldNode* `FieldNode` ) ⟹ `void`</small>

<small>`FieldNode` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-nav-node</span>

Binds a FieldNode with the following signature:

- display_name (`string`)
- secondary_text (`string`)
- icon (`string`)

- <small>fieldNode `string`</small>
<br><br>










## Slots
{{% api "_furo-ui5-card-slots.md" %}}

### **action**
Type: `HTMLElement [0..n]`

defines an action, displayed in the right most part of the header. Note: If status is set, the status text will be displayed, you can either have action, or status.
<br><br>
### **content**
Type: `HTMLElement [0..n]`

defines the content of the card
<br><br>

{{% api "_furo-ui5-card-footer.md" %}}
{{% api "_furo-ui5-card-scripts.md" %}}
