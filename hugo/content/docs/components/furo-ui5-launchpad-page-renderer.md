---
title: furo-ui5-launchpad-page-renderer
description: tile renderer
weight: 50
---

# furo-ui5-launchpad-page-renderer
**@furo/ui5** <small>v1.5.2</small>
<br>`import '@furo/ui5/src/spaces/furo-ui5-launchpad-page-renderer.js';`<small>
<br>exports `<furo-ui5-launchpad-page-renderer>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** tile renderer

## Description

`furo-ui5-launchpad-page-renderer`
 Renders a page of a space.

 > **Hint**: when you build a custom tile, do not forget to trigger the tile-clicked event.

{{% api "_furo-ui5-launchpad-page-renderer-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-launchpad-page-renderer-properties.md" %}}





## Events
{{% api "_furo-ui5-launchpad-page-renderer-events.md" %}}

### **tile-clicked**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">at-tile-clicked</span>
→ <small>`PointerEvent`</small>

Fired from the default tiles inside of the rendered pages.
<br><br>

## Methods
{{% api "_furo-ui5-launchpad-page-renderer-methods.md" %}}


### **_FBPReady**
<small>**_FBPReady**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn--fbp-ready</span>

flow is ready lifecycle method

<br><br>

### **injectPage**
<small>**injectPage**(*rawPage* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-inject-page</span>

injectPage to render a page

- <small>rawPage </small>
<br><br>

### **focus**
<small>**focus**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">fn-focus</span>

focus Focuses the first tile in the first section

<br><br>




{{% api "_furo-ui5-launchpad-page-renderer-footer.md" %}}
{{% api "_furo-ui5-launchpad-page-renderer-scripts.md" %}}
