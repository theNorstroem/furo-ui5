---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample



<furo-demo-snippet>
<template>
<ui5-button @-click="--infoClicked" design="Default">Information</ui5-button>
<ui5-button @-click="--successClicked"  design="Positive">Success</ui5-button>
<ui5-button @-click="--errorClicked"  design="Negative">Error</ui5-button>
<ui5-button @-click="--warningClicked"  design="Attention">Warning</ui5-button>
<furo-ui5-message-strip 
  ƒ-show-information="--infoClicked" 
  ƒ-show-success="--successClicked" 
  ƒ-show-error="--errorClicked"
  ƒ-show-warning="--warningClicked" 
  message="static message"></furo-ui5-message-strip>
<furo-ui5-message-strip-display></furo-ui5-message-strip-display>
</template>
</furo-demo-snippet>

```html
<ui5-button @-click="--infoClicked" design="Default">Information</ui5-button>
<ui5-button @-click="--successClicked"  design="Positive">Success</ui5-button>
<ui5-button @-click="--errorClicked"  design="Negative">Error</ui5-button>
<ui5-button @-click="--warningClicked"  design="Warning">Warning</ui5-button>
<furo-ui5-message-strip 
  ƒ-show-information="--infoClicked" 
  ƒ-show-success="--successClicked" 
  ƒ-show-error="--errorClicked" 
  ƒ-show-warning="--warningClicked" 
  message="static message"></furo-ui5-message-strip>
<furo-ui5-message-strip-display></furo-ui5-message-strip-display>
```
