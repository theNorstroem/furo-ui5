---
title: furo-ui5-breadcrumbs
tags: [breadcrumbs, navigation, trail, path]
category: Navigation
use-when: Use to show a navigation trail; provide breadcrumb items as children.
---

# furo-ui5-breadcrumbs

> Breadcrumb navigation trail (no data binding).

**Class:** `FuroUi5Breadcrumbs`
**Import:** `import "@furo/ui5/breadcrumbs"`
**Import type:** `import type { FuroUi5Breadcrumbs } from "@furo/ui5/breadcrumbs"`
**Extends:** `Breadcrumbs`
**Category:** Navigation

**Related:** [`furo-ui5-breadcrumbs-item`](furo-ui5-breadcrumbs-item.md)

## Overview

The 'furo-ui5-breadcrumbs' is a thin wrapper around the
[SAP ui5 Breadcrumbs element](https://ui5.github.io/webcomponents/components/Breadcrumbs/).

It exposes the full UI5 Breadcrumbs API unchanged. There is intentionally **no data binding** —
place `furo-ui5-breadcrumbs-item` children yourself.

### Overview
Enables users to navigate between items by providing a list of links to previous steps in the user's navigation path.
It helps the user to be aware of their location within the application and allows faster navigation.

The last three steps can be accessed as links directly, while the remaining links prior to them are available
in a drop-down menu.

You can choose the type of separator to be used from a number of predefined options.

### Keyboard Handling
The `furo-ui5-breadcrumbs` provides advanced keyboard handling.

- [F4], [Alt] + [Up], [Alt] + [Down], [Space], or [Enter] - If the dropdown arrow is focused - opens/closes the drop-down.
- [Space],[Enter] - Activates the focused item and triggers the `item-click` event.
- [Escape] - Closes the drop-down.
- [Left] - If the drop-down is closed - navigates one item to the left.
- [Right] - If the drop-down is closed - navigates one item to the right.
- [Up] - If the drop-down is open - moves focus to the next item.
- [Down] - If the drop-down is open - moves focus to the previous item.
- [Home] - Navigates to the first item.
- [End] - Navigates to the last item.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `design` | `"Standard" \| "NoCurrentPage"` | "Standard" | Defines the visual appearance of the last BreadcrumbsItem. |
| `separators` | `"Slash" \| "BackSlash" \| "DoubleBackSlash" \| "DoubleGreaterThan" \| "DoubleSlash" \| "GreaterThan"` | "Slash" | Determines the visual style of the separator between the breadcrumb items. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `design` | `BreadcrumbsDesign` | Defines the visual appearance of the last BreadcrumbsItem. |
| `separators` | `BreadcrumbsSeparator` | Determines the visual style of the separator between the breadcrumb items. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the component items.

**Note:** Use the `ui5-breadcrumbs-item` component to define the desired items.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `item-click` | `CustomEvent<BreadcrumbsItemClickEventDetail>` | Fires when a `BreadcrumbsItem` is clicked. |
