---
title: furo-ui5-title
tags: [title, heading, h1, h2, header, typography, section]
category: Display
use-when: Use for page titles, section headers, and semantic headings.
---

# furo-ui5-title

> Heading text with semantic level for page and section titles.

**Class:** `FuroUi5Title`
**Import:** `import "@furo/ui5/title"`
**Extends:** `Title`
**Category:** Display

**Related:** [`furo-ui5-text`](furo-ui5-text.md), [`furo-ui5-label`](furo-ui5-label.md)

## Overview

### Overview

The `furo-ui5-title` component is used to display titles inside a page.
It is a simple, large-sized text with explicit header/title semantics.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `level` | `"H1" \| "H2" \| "H3" \| "H4" \| "H5" \| "H6"` | "H2" | Defines the component level. Available options are: `"H6"` to `"H1"`. This property does not influence the style of the component. Use the property `size` for this purpose instead. |
| `size` | `"H1" \| "H2" \| "H3" \| "H4" \| "H5" \| "H6"` | "H5" | Defines the visual appearance of the title. Available options are: `"H6"` to `"H1"`. |
| `wrapping-type` | `"None" \| "Normal"` | "Normal" | Defines how the text of a component will be displayed when there is not enough space. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `level` | `TitleLevel` | Defines the component level. Available options are: `"H6"` to `"H1"`. This property does not influence the style of the component. Use the property `size` for this purpose instead. |
| `size` | `TitleLevel` | Defines the visual appearance of the title. Available options are: `"H6"` to `"H1"`. |
| `wrappingType` | `WrappingType` | Defines how the text of a component will be displayed when there is not enough space. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.
This component supports nesting a `Link` component inside.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
