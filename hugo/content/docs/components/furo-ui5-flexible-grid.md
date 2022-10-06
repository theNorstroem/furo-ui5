---
title: furo-ui5-flexible-grid
description: a grid splitter
weight: 50
---

# furo-ui5-flexible-grid
**@furo/ui5** <small>v1.13.0</small>
<br>`import '@furo/ui5/src/furo-ui5-flexible-grid.js';`<small>
<br>exports `<furo-ui5-flexible-grid>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** a grid splitter

## Description

The furo-ui5-flexible-grid will split your screen contents horizontally (in cols) and put them vertically (left at top)
when the available space is to small.

```html
 <!-- a simple layout manager with two columns  -->
<furo-ui5-flexible-grid>
  <div hspan="2" full-on-size-medium full-on-size-small class="left">
     <slot name="left"></slot>
  </div>
  <!-- this will start at pos 3 and goes to the end of the screen -->
  <furo-z-grid hstart="3" fill>
    <slot></slot>
  </furo-z-grid>
</furo-ui5-flexible-grid>
```

## Setting column width
To set the width of a column use the `hspan` attribute.

## Fill column to the end of the screen
To make a column that uses the available space you have to set a starting point. This can be done with `hstart="3"`
(begin on cell 3) and the attribute `fill` (fill to the right)

 ## full-on-[size]
 To set full width on a specific current size, use `full-on-size-small` , `full-on-size-medium` , `full-on-size-large` ,`full-on-size-xlarge`.

 When the available space has the given size, the default hspan are overridden and the full width is used.

 ## hstart
 Set the starting point of a filling row with `hstart="3"`.

 Available values are `hstart="2"`,...,`hstart="9"`

 ## hspan
 Set the horizontal space (the width) with the *hspan* attribute.

 Available ranges are from 1 to 9.

 `hspan="1"`, `hspan="2"`,...,`hspan="9"`

## Named lines and columns
**last-col** refers to the last column.
There is no line name available

{{% api "_furo-ui5-flexible-grid-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-flexible-grid-properties.md" %}}





### **sizeSmall**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">size-small</span>
<small>`Number` </small>

Breakpoint size for small
<br><br>

## Methods
{{% api "_furo-ui5-flexible-grid-methods.md" %}}







## Slots
{{% api "_furo-ui5-flexible-grid-slots.md" %}}

### **left**
Type: ``

{HTMLElement} - slot to add a component on the left hand side.
<br><br>
### **default**
Type: `HTMLElement [0..n]`

default slot to add content.
<br><br>

{{% api "_furo-ui5-flexible-grid-footer.md" %}}
{{% api "_furo-ui5-flexible-grid-scripts.md" %}}
