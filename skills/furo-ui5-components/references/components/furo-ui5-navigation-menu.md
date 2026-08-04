---
title: furo-ui5-navigation-menu
tags: [navigation, menu, popover, overflow, side]
category: Navigation
use-when: Use to show nested navigation entries in a popover when the side navigation is collapsed.
---

# furo-ui5-navigation-menu

> Popover menu used by collapsed side navigation.

**Class:** `FuroUi5NavigationMenu`
**Import:** `import "@furo/ui5/navigation-menu"`
**Import type:** `import type { FuroUi5NavigationMenu } from "@furo/ui5/navigation-menu"`
**Extends:** `NavigationMenu`
**Category:** Navigation

**Related:** [`furo-ui5-navigation-menu-item`](furo-ui5-navigation-menu-item.md), [`furo-ui5-side-navigation`](furo-ui5-side-navigation.md), [`furo-ui5-context-menu`](furo-ui5-context-menu.md)

## Overview

A menu specialised for navigation. It is what a collapsed `furo-ui5-side-navigation` opens for nested items.

```html
<furo-ui5-navigation-menu open opener="nav-anchor">
  <furo-ui5-navigation-menu-item text="Overview" icon="home"></furo-ui5-navigation-menu-item>
  <furo-ui5-navigation-menu-item text="Reports" icon="bar-chart"></furo-ui5-navigation-menu-item>
</furo-ui5-navigation-menu>
<div id="nav-anchor">Menu anchor</div>
```

This is a pass-through wrapper around `furo-ui5-navigation-menu`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added. It only adds the imperative
`showAt()` / `show()` / `close()` convenience methods the other furo popups expose.

### Overview

`furo-ui5-navigation-menu` component represents a hierarchical menu structure, inherits all the functionality of `furo-ui5-menu`.

### Usage

`furo-ui5-navigation-menu` contains `furo-ui5-navigation-menu-item` components.
An arbitrary hierarchy structure can be represented by recursively nesting navigation menu items.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `header-text` | `string \| undefined` | undefined | Defines the header text of the menu (displayed on mobile). |
| `horizontal-align` | `"Start" \| "End" \| "Center" \| "Stretch"` | "Start" | Determines the horizontal alignment of the menu relative to its opener control. |
| `loading` | `boolean` | false | Defines if a loading indicator would be displayed inside the corresponding furo-ui5-menu popover. |
| `loading-delay` | `number` | 1000 | Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding furo-ui5-menu popover. |
| `open` | `boolean` | false | Indicates if the menu is open. |
| `opener` | `string \| HTMLElement \| null \| undefined` | undefined | Defines the ID or DOM Reference of the element at which the menu is shown. |
| `placement` | `"Top" \| "Bottom" \| "Start" \| "End"` | "Bottom" | Determines on which side the component is placed at. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `headerText` | `string \| undefined` | Defines the header text of the menu (displayed on mobile). |
| `horizontalAlign` | `PopoverHorizontalAlign` | Determines the horizontal alignment of the menu relative to its opener control. |
| `loading` | `boolean` | Defines if a loading indicator would be displayed inside the corresponding furo-ui5-menu popover. |
| `loadingDelay` | `number` | Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding furo-ui5-menu popover. |
| `open` | `boolean` | Indicates if the menu is open. |
| `opener` | `HTMLElement \| string \| null \| undefined` | Defines the ID or DOM Reference of the element at which the menu is shown. |
| `placement` | `PopoverPlacement` | Determines on which side the component is placed at. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of this component.

**Note:** Use `ui5-navigation-menu-item` for the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `before-close` | `CustomEvent<MenuBeforeCloseEventDetail>` | Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. |
| `before-open` | `CustomEvent<MenuBeforeOpenEventDetail>` | Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. |
| `close` | `CustomEvent` | Fired after the menu is closed. |
| `item-click` | `CustomEvent<MenuItemClickEventDetail>` | Fired when an item is being clicked. |
| `open` | `CustomEvent` | Fired after the menu is opened. |

## Methods

### `close(): void`

Closes the popup.

### `show(): void`

Shows the navigation-menu at the opener position defined with attribute opener.

### `showAt(opener: HTMLElement | string): void`

Shows the navigation-menu at the opener position.
Alternatively you can work with the attributes `opener` and `open` to achieve the same.
