---
title: furo-ui5-toolbar
tags: [toolbar, actions, bar, overflow, buttons]
category: Layout
use-when: Use to group actions above a table, list or form section.
---

# furo-ui5-toolbar

> Horizontal bar of actions with automatic overflow.

**Class:** `FuroUi5Toolbar`
**Import:** `import "@furo/ui5/toolbar"`
**Extends:** `Toolbar`
**Category:** Layout

**Related:** [`furo-ui5-toolbar-button`](furo-ui5-toolbar-button.md), [`furo-ui5-toolbar-spacer`](furo-ui5-toolbar-spacer.md), [`furo-ui5-toolbar-separator`](furo-ui5-toolbar-separator.md)

## Overview

Groups actions in a horizontal bar and moves the ones that do not fit into an overflow popover.

```html
<furo-ui5-toolbar>
  <furo-ui5-toolbar-button text="Create" design="Emphasized"></furo-ui5-toolbar-button>
  <furo-ui5-toolbar-button text="Edit"></furo-ui5-toolbar-button>
  <furo-ui5-toolbar-separator></furo-ui5-toolbar-separator>
  <furo-ui5-toolbar-spacer></furo-ui5-toolbar-spacer>
  <furo-ui5-toolbar-button icon="sort" tooltip="Sort"></furo-ui5-toolbar-button>
</furo-ui5-toolbar>
```

This is a pass-through wrapper around `furo-ui5-toolbar`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-toolbar` component is used to create a horizontal layout with items.
The items can be overflowing in a popover, when the space is not enough to show all of them.

### Keyboard Handling
The `furo-ui5-toolbar` provides advanced keyboard handling.

- The control is not interactive, but can contain of interactive elements
- [Tab] - iterates through elements

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the input. |
| `align-content` | `"Start" \| "End"` | "End" | Indicated the direction in which the Toolbar items will be aligned. |
| `design` | `"Transparent" \| "Solid"` | "Solid" | Defines the toolbar design. |
| `overflow-button-accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the overflow button of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the input. |
| `alignContent` | `ToolbarAlign` | Indicated the direction in which the Toolbar items will be aligned. |
| `design` | `ToolbarDesign` | Defines the toolbar design. |
| `overflowButtonAccessibleName` | `string \| undefined` | Defines the accessible ARIA name of the overflow button of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of the component.

**Note:** Currently only `ui5-toolbar-button`, `ui5-toolbar-select`, `ui5-toolbar-separator` and `ui5-toolbar-spacer` are allowed here.

## Methods

### `isOverflowOpen(): boolean`

Returns if the overflow popup is open.
