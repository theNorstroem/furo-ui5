---
title: furo-ui5-user-menu-item-group
tags: [user-menu, group, items, section, profile, user, menu, item]
category: Navigation
use-when: Use inside furo-ui5-user-menu to group related profile actions.
---

# furo-ui5-user-menu-item-group

> Groups user menu items under a shared heading.

**Class:** `FuroUi5UserMenuItemGroup`
**Import:** `import "@furo/ui5/user-menu-item-group"`
**Import type:** `import type { FuroUi5UserMenuItemGroup } from "@furo/ui5/user-menu-item-group"`
**Extends:** `UserMenuItemGroup`
**Category:** Navigation

**Related:** [`furo-ui5-user-menu`](furo-ui5-user-menu.md), [`furo-ui5-user-menu-item`](furo-ui5-user-menu-item.md), [`furo-ui5-user-menu-account`](furo-ui5-user-menu-account.md)

## Overview

Groups `furo-ui5-user-menu-item` children into one labelled section of the user menu.

```html
<furo-ui5-user-menu open>
  <furo-ui5-user-menu-item-group header-text="Preferences">
    <furo-ui5-user-menu-item text="Settings" icon="action-settings"></furo-ui5-user-menu-item>
    <furo-ui5-user-menu-item text="Theme" icon="palette"></furo-ui5-user-menu-item>
  </furo-ui5-user-menu-item-group>
</furo-ui5-user-menu>
```

This is a pass-through wrapper around `furo-ui5-user-menu-item-group`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-user-menu-item-group` component represents a group of items designed for use inside a `furo-ui5-user-menu`.
Items belonging to the same group should be wrapped by a `furo-ui5-user-menu-item-group`.
Each group can have an `itemCheckMode` property, which defines the check mode for the items within the group.
The possible values for `itemCheckMode` are:
- 'None' (default) - no items can be checked
- 'Single' - Only one item can be checked at a time
- 'Multiple' - Multiple items can be checked simultaneously

**Note:** If the `itemCheckMode` property is set to 'Single', only one item can remain checked at any given time.
If multiple items are marked as checked, the last checked item will take precedence.

### Usage

`furo-ui5-user-menu-item-group` represents a collection of `furo-ui5-user-menu-item` components that can have the same check mode.
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
