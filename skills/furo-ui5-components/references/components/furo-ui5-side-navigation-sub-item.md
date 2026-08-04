---
title: furo-ui5-side-navigation-sub-item
tags: [navigation, side, sub-item, nested, child, menu, sub, item]
category: Navigation
use-when: Use inside furo-ui5-side-navigation-item to add a second navigation level.
---

# furo-ui5-side-navigation-sub-item

> Nested entry below a side navigation item.

**Class:** `FuroUi5SideNavigationSubItem`
**Import:** `import "@furo/ui5/side-navigation-sub-item"`
**Import type:** `import type { FuroUi5SideNavigationSubItem } from "@furo/ui5/side-navigation-sub-item"`
**Extends:** `SideNavigationSubItem`
**Category:** Navigation

**Related:** [`furo-ui5-side-navigation-item`](furo-ui5-side-navigation-item.md), [`furo-ui5-side-navigation`](furo-ui5-side-navigation.md), [`furo-ui5-navigation-menu`](furo-ui5-navigation-menu.md)

## Overview

A second-level entry of the side navigation, rendered when its parent item is expanded.

```html
<furo-ui5-side-navigation style="height:220px">
  <furo-ui5-side-navigation-item text="Reports" icon="bar-chart" expanded>
    <furo-ui5-side-navigation-sub-item text="Monthly"></furo-ui5-side-navigation-sub-item>
    <furo-ui5-side-navigation-sub-item text="Yearly"></furo-ui5-side-navigation-sub-item>
  </furo-ui5-side-navigation-item>
</furo-ui5-side-navigation>
```

This is a pass-through wrapper around `furo-ui5-side-navigation-sub-item`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
Represents a single navigation action within `furo-ui5-side-navigation-item`.
The `furo-ui5-side-navigation-sub-item` is intended to be used inside a `furo-ui5-side-navigation-item` only.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `SideNavigationItemAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `design` | `"Default" \| "Action"` | "Default" | Item design. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `href` | `string \| undefined` | undefined | Defines the link target URI. |
| `icon` | `string \| undefined` | undefined | Defines the icon of the item. |
| `selected` | `boolean` | false | Defines whether the item is selected. |
| `target` | `string \| undefined` | undefined | Defines the component target. |
| `text` | `string \| undefined` | undefined | Defines the text of the item. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |
| `unselectable` | `boolean` | false | Indicates whether the navigation item is selectable. By default, all items are selectable unless specifically marked as unselectable. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `SideNavigationItemAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `design` | `SideNavigationItemDesign` | Item design. |
| `disabled` | `boolean` | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `href` | `string \| undefined` | Defines the link target URI. |
| `icon` | `string \| undefined` | Defines the icon of the item. |
| `selected` | `boolean` | Defines whether the item is selected. |
| `target` | `string \| undefined` | Defines the component target. |
| `text` | `string \| undefined` | Defines the text of the item. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |
| `unselectable` | `boolean` | Indicates whether the navigation item is selectable. By default, all items are selectable unless specifically marked as unselectable. |

## Slots

### `tag`

Defines the tag to be displayed.

**Note:** Tags are visible when the `NavigationList` is in expanded mode,
and hidden when collapsed, but they are visible in the overflow of the collapsed mode.

**Note:** Only one `ui5-tag` is allowed. The tag should use `design="Set2"`, `hide-state-icon`,
and `colorScheme` values 5-10 to avoid confusion with semantic colors (1-4).

**Note:** It is recommended to limit tag width to 64px (4rem). If tag text exceeds this,
use shortened forms or abbreviations (e.g., "Experimental" → "Exp").

**Important:** The `ui5-tag` must never be interactive (i.e., `active` must not be set to `true`),
as this would lead to nesting of interactive elements, which is not allowed.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<SideNavigationItemClickEventDetail>` | Fired when the component is activated either with a click/tap or by using the [Enter] or [Space] keys. |
