---
title: furo-ui5-button-badge
tags: [badge, button, counter, notification, indicator]
category: Button
use-when: Use to add a count or status indicator to buttons.
---

# furo-ui5-button-badge

> Badge indicator attached to buttons for counts or status.

**Class:** `FuroUi5ButtonBadge`
**Import:** `import "@furo/ui5/button-badge"`
**Import type:** `import type { FuroUi5ButtonBadge } from "@furo/ui5/button-badge"`
**Extends:** `ButtonBadge`
**Category:** Button

**Related:** [`furo-ui5-button`](furo-ui5-button.md)

## Overview

The `furo-ui5-button-badge` component defines a badge that appears in the `furo-ui5-button`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `design` | `"InlineText" \| "OverlayText" \| "AttentionDot"` | "AttentionDot" | Defines the badge placement and appearance. |
| `text` | `string` | "" | Defines the text of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `design` | `ButtonBadgeDesign` | Defines the badge placement and appearance. |
| `text` | `string` | Defines the text of the component. |

## Methods

### `hide(): void`

disables the ButtonBadge

### `show(): void`

enables the ButtonBadge
