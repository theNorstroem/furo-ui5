---
booksearchexclude: false
bookToc: false
bookHidden: true
---

### Example

<furo-demo-snippet>
<template>
<button @-click="--clearClicked">clear</button>
<furo-form-layouter four >
<furo-ui5-sign-pad fn-clear="--clearClicked" @-sign-updated="--signed"></furo-ui5-sign-pad>
<furo-ui5-sign-pad fn-clear="--clearClicked" fn-put-image="--signed"></furo-ui5-sign-pad>
</furo-form-layouter>
<img set-src="--signed" alt="" width="100px">
</template>
</furo-demo-snippet>
 
```html
<button @-click="--clearClicked">clear</button>
<furo-form-layouter four >
  <furo-ui5-sign-pad fn-clear="--clearClicked" @-sign-updated="--signed"></furo-ui5-sign-pad>
  <furo-ui5-sign-pad fn-clear="--clearClicked" fn-put-image="--signed"></furo-ui5-sign-pad>
</furo-form-layouter>
<img set-src="--signed" alt="" width="100px">
```
