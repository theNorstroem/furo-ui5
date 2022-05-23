---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Example

<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
<furo-vertical-flex>
<div>
<furo-ui5-button @-click="--showNotificationClicked" design="Emphasized">show notifications</furo-ui5-button>
<furo-ui5-button @-click="--clearRequested">clear messages</furo-ui5-button> 
</div>
<div flex scroll>
<furo-ui5-notification-group-display 
  fn-clear-all="--clearRequested"></furo-ui5-notification-group-display>
<furo-ui5-notification 
  fn-inject-notification-collection="--notificationsJson"
></furo-ui5-notification>
</div>
</furo-vertical-flex>
<furo-fetch-json
  fn-fetch="--showNotificationClicked"
  src="/notification/notifications.json"
  @-data="--notificationsJson"
></furo-fetch-json>
</template>
</furo-demo-snippet>

```html
<furo-ui5-notification-group-display 
  fn-clear-all="--clearRequested"></furo-ui5-notification-group-display>
<furo-ui5-notification 
  fn-inject-notification-collection="--notificationsJson"
></furo-ui5-notification>
```
