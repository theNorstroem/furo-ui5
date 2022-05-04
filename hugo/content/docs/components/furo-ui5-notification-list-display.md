---
title: furo-ui5-notification-list-display
description: ui5 notification list
weight: 50
---

# furo-ui5-notification-list-display
**@furo/ui5** <small>v1.3.0-rc.0</small>
<br>`import '@furo/ui5/src/furo-ui5-notification-list-display.js';`<small>
<br>exports *FuroUi5NotificationListDisplay* js
<br>exports `<furo-ui5-notification-list-display>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** ui5 notification list

## Description

Notification display component that works together with furo-ui5-notification.
Displays google.rpc.Status messages in a grouped list.
https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.

Best place the furo-ui5-notification-list-display on the main site. then you only need one furo-ui5-notification-list-display.
you can also use more than one furo-ui5-notification-list-display for special needs.
But you have to be sure the furo-ui5-notification-list-display can receive the notification events from furo-ui5-notification.

{{% api "_furo-ui5-notification-list-display-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-notification-list-display-properties.md" %}}












### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text</span>
<small>`string` default: **&#39;&#39;**</small>

the header text of the notification
<br><br>

### **noDataText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-data-text</span>
<small>`string` default: **&#39;No messages&#39;**</small>

Defines the text that is displayed when the list contains no items.
<br><br>

### **_notificationCount**
default: **0**</small>


<br><br>

### **groupTitleHelp**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">group-title-help</span>
<small>`string` default: **&#39;Help&#39;**</small>

Defines the notification group element title for notifications of type
"type.googleapis.com/google.rpc.Help"
<br><br>

### **groupTitleBadRequest**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">group-title-bad-request</span>
<small>`string` default: **&#39;Bad Request&#39;**</small>

Defines the notification group element title for notifications of type
"type.googleapis.com/google.rpc.BadRequest"
<br><br>

### **groupTitleMessage**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">group-title-message</span>
<small>`string` default: **&#39;Information&#39;**</small>

Defines the notification group element title for notifications of type
"type.googleapis.com/google.rpc.LocalizedMessage"
<br><br>

### **_md**
</small>


<br><br>

### **showClose**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">show-close</span>
</small>

Defines if the close button would be displayed.
<br><br>
## Events
{{% api "_furo-ui5-notification-list-display-events.md" %}}

### **notification-counter-update**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-notification-counter-update</span>
→ <small>`CustomEvent`</small>


<br><br>
### **furo-value-changed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-furo-value-changed</span>
→ <small>`Number`</small>

Fires a notification counter changed. Use this event to show the amount of notifications to the user.
<br><br>

## Methods
{{% api "_furo-ui5-notification-list-display-methods.md" %}}



### **parseGrpcStatus**
<small>**parseGrpcStatus**(*d* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-parse-grpc-status</span>

parse grpc status object and set the notification text according to the LocalizedMessage in status.
https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto.

- <small>d </small>
<br><br>

### **parseNotificationMessage**
<small>**parseNotificationMessage**(*message* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-parse-notification-message</span>

parse notification message and set the ui5 notification properties like priority, actions, heading..
the notification message should be a furo.notification type:
{
 "id": 1,
 "display_name": "",
 "heading": "heading 1",
 "message_priority": "High",
 "category": "warning",
 "category_priority": "High",
 "actions": [
   {
     "icon":"accept",
     "command":"accept",
     "text": "accept"
   },
   {
     "icon":"message-error",
     "command":"reject",
     "text": "Reject"
   }
 ],
 "message": "Markdown | Less | Pretty\n--- | --- | ---\n*Still* | `renders` | **nicely**\n1 | 2 | 3"
}

- <small>message </small>
<br><br>

### **_show**
<small>**_show**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--show</span>

shows grpc status notifications
implemented types are:
- Bad Request with Field Violations
-

<br><br>

### **_dispatchNotificationCounterUpdates**
<small>**_dispatchNotificationCounterUpdates**(*count* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--dispatch-notification-counter-updates</span>



- <small>count </small>
<br><br>




### **clearAll**
<small>**clearAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-clear-all</span>

clear all notifications

<br><br>












{{% api "_furo-ui5-notification-list-display-footer.md" %}}
{{% api "_furo-ui5-notification-list-display-scripts.md" %}}
