---
title: furo-ui5-toolbar-spacer
tags: [toolbar, spacer, flex, gap, align]
category: Layout
use-when: Use inside furo-ui5-toolbar to right-align the items that follow it.
---

# furo-ui5-toolbar-spacer

> Flexible gap that pushes following toolbar items to the end.

**Class:** `FuroUi5ToolbarSpacer`
**Import:** `import "@furo/ui5/toolbar-spacer"`
**Extends:** `ToolbarSpacer`
**Category:** Layout

**Related:** [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-toolbar-separator`](furo-ui5-toolbar-separator.md), [`furo-ui5-shellbar-spacer`](furo-ui5-shellbar-spacer.md)

## Overview

Consumes the free space of a `furo-ui5-toolbar`, pushing every item after it to the trailing edge.

```html
<furo-ui5-toolbar>
  <furo-ui5-toolbar-button text="Create"></furo-ui5-toolbar-button>
  <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
  <furo-ui5-toolbar-button icon="settings" tooltip="Settings"></furo-ui5-toolbar-button>
</furo-ui5-toolbar>
```

This is a pass-through wrapper around `furo-ui5-toolbar-spacer`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-toolbar-spacer` is an element, used for taking needed space for toolbar items to take 100% width.
It takes no space in calculating toolbar items width.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `overflow-priority` | `"Default" \| "NeverOverflow" \| "AlwaysOverflow"` | "Default" | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `prevent-overflow-closing` | `boolean` | false | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
| `width` | `string \| undefined` | undefined | Defines the width of the spacer. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `overflowPriority` | `ToolbarItemOverflowBehavior` | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `preventOverflowClosing` | `boolean` | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
| `width` | `string \| undefined` | Defines the width of the spacer. |
