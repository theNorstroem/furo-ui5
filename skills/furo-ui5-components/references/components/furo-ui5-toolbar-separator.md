---
title: furo-ui5-toolbar-separator
tags: [toolbar, separator, divider, rule, group]
category: Layout
use-when: Use between furo-ui5-toolbar items to separate groups of actions.
---

# furo-ui5-toolbar-separator

> Vertical rule between toolbar items.

**Class:** `FuroUi5ToolbarSeparator`
**Import:** `import "@furo/ui5/toolbar-separator"`
**Import type:** `import type { FuroUi5ToolbarSeparator } from "@furo/ui5/toolbar-separator"`
**Extends:** `ToolbarSeparator`
**Category:** Layout

**Related:** [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-toolbar-spacer`](furo-ui5-toolbar-spacer.md), [`furo-ui5-table-toolbar-separator`](furo-ui5-table-toolbar-separator.md)

## Overview

A vertical divider that participates in the toolbar's overflow logic. For the standalone table toolbar use `furo-ui5-table-toolbar-separator` instead.

```html
<furo-ui5-toolbar>
  <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
  <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
  <furo-ui5-toolbar-button text="Delete"></furo-ui5-toolbar-button>
</furo-ui5-toolbar>
```

This is a pass-through wrapper around `furo-ui5-toolbar-separator`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-toolbar-separator` is an element, used for visual separation between two elements.
It takes no space in calculating toolbar items width.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `overflow-priority` | `"Default" \| "NeverOverflow" \| "AlwaysOverflow"` | "Default" | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `prevent-overflow-closing` | `boolean` | false | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `overflowPriority` | `ToolbarItemOverflowBehavior` | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `preventOverflowClosing` | `boolean` | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
