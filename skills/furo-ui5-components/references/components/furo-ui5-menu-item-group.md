---
title: furo-ui5-menu-item-group
tags: [menu, group, items, selection, radio, check, item]
category: Navigation
use-when: Use inside furo-ui5-context-menu to give a set of items single- or multi-select behaviour.
---

# furo-ui5-menu-item-group

> Groups context menu items with a shared selection mode.

**Class:** `FuroUi5MenuItemGroup`
**Import:** `import "@furo/ui5/menu-item-group"`
**Extends:** `MenuItemGroup`
**Category:** Navigation

**Related:** [`furo-ui5-context-menu`](furo-ui5-context-menu.md), [`furo-ui5-menu-item`](furo-ui5-menu-item.md), [`furo-ui5-menu-separator`](furo-ui5-menu-separator.md)

## Overview

Groups menu items so they share a selection mode (`None`, `Single` or `Multiple`).

```html
<furo-ui5-context-menu open opener="anchor">
  <furo-ui5-menu-item-group item-selection-mode="Single">
    <furo-ui5-menu-item text="List view"></furo-ui5-menu-item>
    <furo-ui5-menu-item text="Grid view"></furo-ui5-menu-item>
  </furo-ui5-menu-item-group>
</furo-ui5-context-menu>
<div id="anchor">Right-click target</div>
```

This is a pass-through wrapper around `furo-ui5-menu-item-group`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-menu-item-group` component represents a group of items designed for use inside a `furo-ui5-menu`.
Items belonging to the same group should be wrapped by a `furo-ui5-menu-item-group`.
Each group can have an `checkMode` property, which defines the check mode for the items within the group.
The possible values for `checkMode` are:
- 'None' (default) - no items can be checked
- 'Single' - Only one item can be checked at a time
- 'Multiple' - Multiple items can be checked simultaneously

**Note:** If the `checkMode` property is set to 'Single', only one item can remain checked at any given time.
If multiple items are marked as checked, the last checked item will take precedence.

### Usage

`furo-ui5-menu-item-group` represents a collection of `furo-ui5-menu-item` components that can have the same check mode.
The items are addeed to the group's `items` slot.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `check-mode` | `"None" \| "Single" \| "Multiple"` | "None" | Defines the component's check mode. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `checkMode` | `MenuItemGroupCheckMode` | Defines the component's check mode. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of this component.
**Note:** The slot can hold any combination of components of type `ui5-menu-item` or `ui5-menu-separator` or both.
