---
title: furo-ui5-context-menu
tags: [menu, context-menu, dropdown, actions, navigation, popup, context]
category: Navigation
use-when: Use for action menus, context menus, or hierarchical navigation.
---

# furo-ui5-context-menu

> Popup menu with hierarchical menu items for actions or navigation.

**Class:** `FuroUi5ContextMenu`
**Import:** `import "@furo/ui5/context-menu"`
**Import type:** `import type { FuroUi5ContextMenu } from "@furo/ui5/context-menu"`
**Extends:** `Menu`
**Category:** Navigation

**Related:** [`furo-ui5-menu-item`](furo-ui5-menu-item.md), [`furo-ui5-popover`](furo-ui5-popover.md), [`furo-ui5-split-button`](furo-ui5-split-button.md)

## Overview

The furo-ui5-context-menu binds a `menu.Menuitem` model (or an ARRAY of them) to
a SAP `furo-ui5-menu`. Because `furo-ui5-menu` is itself a self-contained popover, no separate
display element is required.

The opener is wired up using the standard UI5 convention via the `opener` attribute
(element id or `HTMLElement` reference) and `show()` / `trigger()`. Hierarchical
sub-menus, keyboard navigation, separators and a11y are inherited from `furo-ui5-menu`.

### Overview

`furo-ui5-menu` component represents a hierarchical menu structure.

### Structure

The `furo-ui5-menu` can hold two types of entities:

- `furo-ui5-menu-item` components
- `furo-ui5-menu-separator` - used to separate menu items with a line

An arbitrary hierarchy structure can be represented by recursively nesting menu items.

### Keyboard Handling

The `furo-ui5-menu` provides advanced keyboard handling.
The user can use the following keyboard shortcuts in order to navigate trough the tree:

- `Arrow Up` / `Arrow Down` - Navigates up and down the menu items that are currently visible.
- `Arrow Right`, `Space` or `Enter` - Opens a sub-menu if there are menu items nested
in the currently clicked menu item.
- `Arrow Left` or `Escape` - Closes the currently opened sub-menu.

when there is `endContent` :
- `Arrow Left` or `ArrowRight` - Navigate between the menu item actions and the menu item itself
- `Arrow Up` / `Arrow Down` - Navigates up and down the currently visible menu items

**Note:** If the text direction is set to Right-to-left (RTL), `Arrow Right` and `Arrow Left` functionality is swapped.

Application developers are responsible for ensuring that interactive elements placed in the `endContent` slot
have the correct accessibility behaviour, including their enabled or disabled states.
The menu does not manage these aspects when the menu item state changes.

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
| `model` | `MenuModel \| undefined` | Use this to bind a model field by attribute. |
| `open` | `boolean` | Indicates if the menu is open. |
| `opener` | `HTMLElement \| string \| null \| undefined` | Defines the ID or DOM Reference of the element at which the menu is shown. |
| `placement` | `PopoverPlacement` | Determines on which side the component is placed at. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of this component.

**Note:** Use `ui5-menu-item` and `ui5-menu-separator` for their intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `before-close` | `CustomEvent<MenuBeforeCloseEventDetail>` | Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. |
| `before-open` | `CustomEvent<MenuBeforeOpenEventDetail>` | Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. |
| `close` | `CustomEvent` | Fired after the menu is closed. |
| `item-click` | `CustomEvent<MenuItemClickEventDetail>` | Fired when an item is being clicked. |
| `menu-item-selected` | `CustomEvent<MenuItemSelectedEventDetail>` | Fired when a menu item was clicked. |
| `open` | `CustomEvent` | Fired after the menu is opened. |

## Methods

### `bindData(fieldNode: MenuModel | undefined): void`

Connects your data model to this component. Accepts either an `ARRAY`
(typical case: the array of root items) or a single `Menuitem` whose `children`
will be used as the root items.

### `close(): void`

Closes the menu.

### `setContext(ctx: unknown): void`

Sets a context value that is echoed back inside the `menu-item-selected` event.

### `show(): void`

Opens the menu (uses the currently configured opener).

### `showAt(opener: HTMLElement | string): void`

Convenience: assigns the opener and opens the menu.

### `trigger(): void`

Opens the menu at the configured opener. If `bindData` has not yet been called,
the trigger is queued and replayed once a model arrives.

### `triggerContext(ctx: unknown): void`

Sets the context and opens the menu.
