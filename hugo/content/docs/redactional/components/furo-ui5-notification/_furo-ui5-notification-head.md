---
booksearchexclude: false
bookToc: false
bookHidden: true
---
#### Example
<script type="module" src="/init.js"></script>
<furo-demo-snippet>
<template>
  <furo-ui5-button @-click="--grpc" design="Emphasized">show google rpc status messages</furo-ui5-button>
  <furo-ui5-button @-click="--clearRequested">clear messages</furo-ui5-button> 
  <furo-ui5-notification-list-display header-text="Notifications &amp; Errors" ƒ-clear-all="--clearRequested" group-title-message="Localized Messages" group-title-help="Helpful information" group-title-bad-request="Field Violations" @-notification-counter-update="--notificationCounterUpdated"></furo-ui5-notification-list-display>
  <furo-ui5-notification ƒ-parse-grpc-status="--grpcReady"></furo-ui5-notification>
</template>
</furo-demo-snippet>


> The Status type defines a logical error model that is suitable for
different programming environments, including REST APIs and RPC APIs. It is
used by [gRPC](https://github.com/grpc). Each `Status` message contains
three pieces of data: error code, error message, and error details.</p>
<a href="https://github.com/googleapis/googleapis/blob/master/google/rpc/status.proto">github.com/googleapis/...</a>
