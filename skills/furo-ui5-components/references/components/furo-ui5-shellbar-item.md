---
title: furo-ui5-shellbar-item
tags: [shellbar-item, action, header, button, icon, shellbar, item]
category: PageStructure
use-when: Use as children of furo-ui5-shellbar for custom header actions.
---

# furo-ui5-shellbar-item

> Action item for the ShellBar header component.

**Class:** `FuroUi5ShellBarItem`
**Import:** `import "@furo/ui5/shellbar-item"`
**Import type:** `import type { FuroUi5ShellBarItem } from "@furo/ui5/shellbar-item"`
**Extends:** `ShellBarItem`
**Category:** PageStructure

**Related:** [`furo-ui5-shellbar`](furo-ui5-shellbar.md), [`furo-ui5-shellbar-search`](furo-ui5-shellbar-search.md)

## Overview

The `furo-ui5-shellbar-item` represents a custom item for `furo-ui5-shellbar`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ShellBarItemAccessibilityAttributes` | {} | Defines additional accessibility attributes on Shellbar Items. |
| `count` | `string \| undefined` | undefined | Defines the count displayed in badge. |
| `icon` | `string \| undefined` | undefined | Defines the item's icon. |
| `text` | `string \| undefined` | undefined | Defines the item text. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ShellBarItemAccessibilityAttributes` | Defines additional accessibility attributes on Shellbar Items. |
| `count` | `string \| undefined` | Defines the count displayed in badge. |
| `icon` | `string \| undefined` | Defines the item's icon. |
| `text` | `string \| undefined` | Defines the item text. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ShellBarItemClickEventDetail>` | Fired when the item is clicked. |
