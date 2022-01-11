---
title: furo-ui5-notification-group-display
description: ui5 notification group display
weight: 50
---

# furo-ui5-notification-group-display
**@furo/components** <small>v1.0.0-rc.15</small>
<br>`import '@furo/components/src/furo-ui5-notification-group-display.js';`<small>
<br>exports *FuroUi5NotificationGroupDisplay* js
<br>exports `<furo-ui5-notification-group-display>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** ui5 notification group display

## Description

Notification display component that works together with furo-ui5-notification.
Best place the furo-ui5-notification-group-display on the main site. then you only need one furo-ui5-notification-group-display.
you can also use more furo-ui5-notification-group-display's for special needs. But You have to be sure the furo-ui5-notification-group-display can receive the notification events.

{{% api "_furo-ui5-notification-group-display-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-notification-group-display-properties.md" %}}







### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text</span>
<small>`string` default: **&#39;&#39;**</small>

the header text of the notification
<br><br>

### **target**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">target</span>
</small>

the target dom object, which sends the notification event
<br><br>

### **collapsed**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">collapsed</span>
</small>

Defines if the group is collapsed or expanded.
<br><br>

### **showCounter**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-counter</span>
</small>

Defines if the items counter would be displayed.
<br><br>

### **showClose**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-close</span>
</small>

Defines if the close button would be displayed.
<br><br>

## Methods
{{% api "_furo-ui5-notification-group-display-methods.md" %}}





### **clearAll**
<small>**clearAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear-all</span>

clear all notifications

<br><br>









{{% api "_furo-ui5-notification-group-display-footer.md" %}}
{{% api "_furo-ui5-notification-group-display-scripts.md" %}}
