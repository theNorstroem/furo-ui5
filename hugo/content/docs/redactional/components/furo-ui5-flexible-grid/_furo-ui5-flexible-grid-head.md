---
booksearchexclude: false
bookToc: false
bookHidden: true
---

#### Sample split z-grids in 2 sections

Switch the demo to fullscreen and resize your screen to see the effect. 

<furo-demo-snippet>
<template><style>
    furo-ui5-flexible-grid div {
      border: 1px solid black;
    }
    /* needed because the contents get positioned vertically on small screens*/
    .left[size='size-s'] {
      height: 22rem;
    }
    .left[size='size-m'] {
      height: 16rem;
    }</style>
<furo-vertical-scroller>
 <furo-ui5-flexible-grid>
<furo-ui5-z-grid class="left" hspan="3" full-on-size-medium="" full-on-size-small="">
  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
  <div vspan="1" hspan="4" style="background: rebeccapurple;">4x1</div>
</furo-ui5-z-grid>
<furo-ui5-z-grid hstart="4" fill="">
  <div vspan="2" hspan="1" style="background: whitesmoke;">1x2</div>
  <div vspan="1" hspan="1" style="background: pink;">1x1</div>
  <div vspan="2" hspan="2" style="background: papayawhip;">2x2</div>
  <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
  <div hspan="full" style="background: papayawhip;">
    full width, no height given
  </div>
</furo-ui5-z-grid>
</furo-ui5-flexible-grid>
</furo-vertical-scroller>
</template>
</furo-demo-snippet>

```html
<style>
  /* needed because the contents get positioned vertically on small screens*/
  .left[size='size-s'] {
    height: 22rem;
  }
  .left[size='size-m'] {
    height: 16rem;
  }
</style>

<furo-ui5-flexible-grid>
  <furo-ui5-z-grid class="left" hspan="3" full-on-size-medium="" full-on-size-small="">
    <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
    <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
    <div vspan="1" hspan="4" style="background: rebeccapurple;">4x1</div>
  </furo-ui5-z-grid>
  <furo-ui5-z-grid hstart="4" fill="">
    <div vspan="2" hspan="1" style="background: whitesmoke;">1x2</div>
    <div vspan="1" hspan="1" style="background: pink;">1x1</div>
    <div vspan="2" hspan="2" style="background: papayawhip;">2x2</div>
    <div vspan="1" hspan="2" style="background: lightblue;">2x1</div>
    <div hspan="full" style="background: papayawhip;">
      full width, no height given
    </div>
  </furo-ui5-z-grid>
</furo-ui5-flexible-grid>
```
