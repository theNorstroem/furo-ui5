---
title: furo-ui5-subsection
tags: [sub-section, nested, section, content, object-page, subsection]
category: Container
use-when: Use to organize content within furo-ui5-section.
---

# furo-ui5-subsection

> Sub-level content section within an object page section.

**Class:** `FuroUi5Subsection`
**Import:** `import "@furo/ui5/subsection"`
**Import type:** `import type { FuroUi5Subsection } from "@furo/ui5/subsection"`
**Category:** Container

**Related:** [`furo-ui5-section`](furo-ui5-section.md)

## Overview

`furo-ui5-subsection`
The furo-ui5-subsection component is a containers for actual content. It is envisaged that this component will be
used within a furo-ui5-section
Subsections have a progressive disclosure mechanism to show and hide content

https://experience.sap.com/fiori-design-web/object-page/#content-area

```html
<furo-ui5-section heading="STRING">
   <furo-ui5-subsection heading="Subsection Title">
     <furo-horizontal-flex slot="action">...</furo-horizontal-flex>
     <my-content></my-content>
     <more-content slot="more"></more-content>
   </furo-ui5-subsection>
 </furo-ui5-section>
```

## Methods
**bindData(fieldNode)**
Binds an entity field to the heading. You can use the entity even when no data was received.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `expanded` | `boolean` | false | expanded state of the `read more` slot |
| `full-width` | `boolean` | false | Sets the content area to full width by removing the default inline padding. |
| `heading` | `string` | "" | Heading text of the subsection |
| `heading-level` | `string` | "H4" | Defines the heading level. Available options are: "H6" to "H1". |
| `show-less-text` | `string` | "show less" | Defines the text that will be displayed for `show less` |
| `show-more-text` | `string` | "show more" | Defines the text that will be displayed for `show more` |

## Slots

### `headline-start`
**Type:** `HTMLElement[]`

defines the content right after the header.

### `headline-end`
**Type:** `HTMLElement[]`

defines the content before the action slot.

### `action`
**Type:** `HTMLElement[]`

defines the heading bar of the subsection.

### `more`
**Type:** `HTMLElement[]`

defines the additional content in the `show more` section.
