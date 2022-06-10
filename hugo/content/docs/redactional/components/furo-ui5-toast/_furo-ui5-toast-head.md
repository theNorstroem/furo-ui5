---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample


<furo-demo-snippet>
<template>
<furo-ui5-toast fn-show="--openToastClicked" placement="MiddleCenter">Content</furo-ui5-toast>
<button @-click="--openToastClicked">open toast</button>
</template>
</furo-demo-snippet>


```html
<furo-ui5-toast fn-show="--openToastClicked" placement="MiddleCenter">Content</furo-ui5-toast>

<button @-click="--openToastClicked">open toast</button>
```
*Note: furo-ui5-toast-display is placed in body*
