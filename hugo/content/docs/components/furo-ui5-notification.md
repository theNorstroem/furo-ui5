---
title: furo-ui5-notification
description: a banner
weight: 50
---

# furo-ui5-notification
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-ui5-notification.js';`<small>
<br>exports *FuroUi5Notification* js
<br>exports `<furo-ui5-notification>` custom-element-definition
<br>superclass *LitElement*</small>

{{% api "_furo-ui5-notification-head.md" %}}

**a banner**

`furo-ui5-notification`
Lit element

 furo-ui5-notification should be used together witch furo-ui5-notification-list-display or furo-ui5-notification-group-display. you can place those two components into different places.
 best place the furo-ui5-notification-list(or group)-display on the main site. then you only need one furo-ui5-notification-list(or group)-display. it can work with n furo-ui5-notification.

{{% api "_furo-ui5-notification-description.md" %}}


## Attributes and Properties
{{% api "_furo-ui5-notification-properties.md" %}}









### **dismissButtonText**
default: **&#39;dismiss&#39;**</small>


<br><br>

### **text**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">text</span>
</small>

banner text content. Use *word* to mark as strong. Use \n to insert a line break.

*HTML tags will be stripped out.*
<br><br>

### **payload**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">payload</span>
</small>

payload. can be a GRPC error or a notification message collection.
<br><br>

### **_type**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">_type</span>
</small>

type of the notification. `grpc` or `notification`
<br><br>
## Events
{{% api "_furo-ui5-notification-events.md" %}}

### **open-furo-ui5-notification-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-open-furo-ui5-notification-requested</span>
→ <small>`{Object}  this`</small>

 Fired when value open banner is requested
<br><br>
### **open-furo-ui5-notification-group-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-open-furo-ui5-notification-group-requested</span>
→ <small>`{Object}  this`</small>

 Fired when value open banner is requested
<br><br>
### **notification-closed.**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-notification-closed.</span>
→ <small>`{Object}  payload`</small>

 Fired when notification is closed.
<br><br>
### **notification-custom-action**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-notification-custom-action</span>
→ <small>`{Object}  payload`</small>

 Fired when notification custom action is triggered. this is a general action event.
<br><br>
### **notification-custom-action-`commandName`**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-notification-custom-action-`commandName`</span>
→ <small>`{Object}  payload`</small>

 Fired when notification custom action is triggered.
<br><br>

## Methods
{{% api "_furo-ui5-notification-methods.md" %}}


### **_requestListDisplay**
<small>**_requestListDisplay**(*p* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--request-list-display</span>

request to display the notifications

- <small>p payload</small>
<br><br>

### **_requestGroupDisplay**
<small>**_requestGroupDisplay**(*p* `Object` ) ⟹ `void`</small>

<small>`Object` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--request-group-display</span>

request to display the notifications in group

- <small>p payload</small>
<br><br>



### **parseGrpcStatus**
<small>**parseGrpcStatus**(*status* `` *s* `` ) ⟹ `void`</small>

<small>`` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-parse-grpc-status</span>

inject a grpc status object
parse grpc status object and set the label according to the LocalizedMessage in status.
https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto .

- <small>status </small>
- <small>s </small>
<br><br>

### **injectNotificationCollection**
<small>**injectNotificationCollection**(*c* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-inject-notification-collection</span>

inject an array of notification messages.
the notification message should be an array of the following object signature:
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

- <small>c </small>
<br><br>








{{% api "_furo-ui5-notification-footer.md" %}}
{{% api "_furo-ui5-notification-scripts.md" %}}