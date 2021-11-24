---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample

Switch the demo to fullscreen and resize your screen to see the effect.

Look at `furo-ui5-flexible-grid` for more examples.

<furo-demo-snippet>
<template><style>
    furo-ui5-flexible-grid div {border: 1px solid black;}
  </style>
<furo-vertical-scroller>
<furo-ui5-z-grid>
  <div vspan="2" hspan="1" style="background: whitesmoke;">1x2</div>
  <div vspan="1" hspan="1" style="background: pink;">1x1</div>
  <div vspan="2" hspan="2" style="background: papayawhip;">2x2</div>
  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
  <div hspan="full" style="background: papayawhip;">
    full width, no height given
  </div>
</furo-ui5-z-grid>
</furo-vertical-scroller>
</template>
</furo-demo-snippet>

```html
<furo-ui5-z-grid>
  <div vspan="2" hspan="1" style="background: whitesmoke;">1x2</div>
  <div vspan="1" hspan="1" style="background: pink;">1x1</div>
  <div vspan="2" hspan="2" style="background: papayawhip;">2x2</div>
  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
  <div hspan="full" style="background: papayawhip;">
    full width, no height given
  </div>
</furo-ui5-z-grid>
```
