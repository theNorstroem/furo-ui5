---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample
<furo-ui5-dialog-display></furo-ui5-dialog-display>

<furo-demo-snippet>
<template>
<furo-ui5-dialog header-text="Dialog title" ƒ-show="--openDialogClicked" ƒ-close="--closeDialogClicked">
        <p>Content</p>
        <div slot="footer"> <button @-click="--closeDialogClicked">close dialog</button></div>
      </furo-ui5-dialog>
      <button @-click="--openDialogClicked">Open dialog</button>
</template>
</furo-demo-snippet>
