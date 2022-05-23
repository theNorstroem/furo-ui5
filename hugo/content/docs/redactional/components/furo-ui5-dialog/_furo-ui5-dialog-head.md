---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample


<furo-demo-snippet>
<template>
<furo-ui5-dialog header-text="Dialog title" fn-show="--openDialogClicked" fn-close="--closeDialogClicked">
<p>Content</p>
<div slot="footer"> <button @-click="--closeDialogClicked">close dialog</button></div>
</furo-ui5-dialog>
<button @-click="--openDialogClicked">open dialog</button>
</template>
</furo-demo-snippet>


```html
<furo-ui5-dialog 
  header-text="Dialog title" 
  fn-show="--openDialogClicked" 
  fn-close="--closeDialogClicked">
  <p>Content</p>
  <div slot="footer">
    <button @-click="--closeDialogClicked">close dialog</button>
  </div>
</furo-ui5-dialog>

<button @-click="--openDialogClicked">open dialog</button>
```
*Note: furo-ui5-dialog-display is placed in body*
