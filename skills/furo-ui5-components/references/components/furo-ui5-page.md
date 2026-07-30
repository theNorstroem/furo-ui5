---
title: furo-ui5-page
tags: [page, layout, header, footer, content, scroll]
category: PageStructure
use-when: Use as the outermost container of a screen that needs a fixed header and footer.
---

# furo-ui5-page

> Page shell with fixed header, scrollable content and footer.

**Class:** `FuroUi5Page`
**Import:** `import "@furo/ui5/page"`
**Extends:** `Page`
**Category:** PageStructure

**Related:** [`furo-ui5-bar`](furo-ui5-bar.md), [`furo-ui5-section`](furo-ui5-section.md), [`furo-ui5-flexible-column-layout`](furo-ui5-flexible-column-layout.md)

## Overview

A screen container with three areas: a fixed `header`, a scrollable default slot and a fixed `footer`.

```html
<furo-ui5-page style="height:300px" show-footer>
  <furo-ui5-bar slot="header" design="Header"><b slot="startContent">Title</b></furo-ui5-bar>
  <div style="padding:1rem">Scrollable page content.</div>
  <furo-ui5-bar slot="footer" design="FloatingFooter">
    <furo-ui5-button slot="endContent" design="Emphasized">Save</furo-ui5-button>
  </furo-ui5-bar>
</furo-ui5-page>
```

This is a pass-through wrapper around `furo-ui5-page`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-page` is a container component that holds one whole screen of an application.
The page has three distinct areas that can hold content - a header, content area and a footer.
### Structure
#### Header
The top most area of the page is occupied by the header. The standard header includes a navigation button and a title.
#### Content
The content occupies the main part of the page. Only the content area is scrollable by default.
This can be prevented by setting `noScrolling` to `true`.
#### Footer
The footer is optional and occupies the part above the bottom part of the content. Alternatively, the footer can be fixed at the bottom of the page by enabling the `fixedFooter` property.

**Note:** `furo-ui5-page` occipues the whole available space of its parent. In order to achieve the intended design you have to make sure
that there is enough space for the `furo-ui5-page` to be rendered.
**Note:** In order for the `furo-ui5-page` to be displayed, the parent element should have fixed height.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `background-design` | `"List" \| "Solid" \| "Transparent"` | "Solid" | Defines the background color of the `furo-ui5-page`. |
| `fixed-footer` | `boolean` | false | Defines if the footer is fixed at the very bottom of the page. |
| `hide-footer` | `boolean` | false | Defines the footer visibility. |
| `no-scrolling` | `boolean` | false | Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `backgroundDesign` | `PageBackgroundDesign` | Defines the background color of the `furo-ui5-page`. |
| `fixedFooter` | `boolean` | Defines if the footer is fixed at the very bottom of the page. |
| `hideFooter` | `boolean` | Defines the footer visibility. |
| `noScrolling` | `boolean` | Disables vertical scrolling of page content. If set to true, there will be no vertical scrolling at all. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content HTML Element.

### `footer`

Defines the footer HTML Element.

### `header`

Defines the header HTML Element.

## CSS Parts

- `content`: Used to style the content section of the component
