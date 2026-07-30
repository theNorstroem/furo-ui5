---
title: furo-ui5-shellbar
tags: [shellbar, header, app-bar, navigation, branding, toolbar]
category: PageStructure
use-when: Use as the main application header for branding and global navigation.
---

# furo-ui5-shellbar

> Application header bar with branding, navigation, and user actions.

**Class:** `FuroUi5ShellBar`
**Import:** `import "@furo/ui5/shellbar"`
**Extends:** `ShellBar`
**Category:** PageStructure

**Related:** [`furo-ui5-shellbar-item`](furo-ui5-shellbar-item.md), [`furo-ui5-shellbar-search`](furo-ui5-shellbar-search.md), [`furo-ui5-user-menu`](furo-ui5-user-menu.md)

## Overview

### Overview

The `furo-ui5-shellbar` is meant to serve as an application header
and includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on.

### Stable DOM Refs

You can use the following stable DOM refs for the `furo-ui5-shellbar`:

- logo
- notifications
- overflow
- profile
- product-switch

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ShellBarAccessibilityAttributes` | {} | Defines additional accessibility attributes on different areas of the component. |
| `disable-search-collapse` | `boolean` | false | Disables the automatic search field expansion/collapse when the available space is not enough. |
| `hide-search-button` | `boolean` | false | Defines the visibility state of the search button. |
| `logo-dom-ref` | `any` | null | Returns the `logo` DOM ref. |
| `notifications-count` | `string \| undefined` | undefined | Defines the `notificationsCount`, displayed in the notification icon top-right corner. |
| `notifications-dom-ref` | `any` | null | Returns the `notifications` icon DOM ref. |
| `overflow-dom-ref` | `any` | null | Returns the `overflow` icon DOM ref. |
| `primary-title` | `string \| undefined` | undefined | Defines the `primaryTitle`. |
| `product-switch-dom-ref` | `any` | null | Returns the `product-switch` icon DOM ref. |
| `profile-dom-ref` | `any` | null | Returns the `profile` icon DOM ref. |
| `secondary-title` | `string \| undefined` | undefined | Defines the `secondaryTitle`. |
| `shadow` | `boolean` | - | Drops a shadow below the shellbar |
| `show-notifications` | `boolean` | false | Defines, if the notification icon would be displayed. |
| `show-product-switch` | `boolean` | false | Defines, if the product switch icon would be displayed. |
| `show-search-field` | `boolean` | false | Defines, if the Search Field would be displayed when there is a valid `searchField` slot. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ShellBarAccessibilityAttributes` | Defines additional accessibility attributes on different areas of the component. |
| `disableSearchCollapse` | `boolean` | Disables the automatic search field expansion/collapse when the available space is not enough. |
| `hideSearchButton` | `boolean` | Defines the visibility state of the search button. |
| `logoDomRef` | `HTMLElement \| null` | Returns the `logo` DOM ref. |
| `notificationsCount` | `string \| undefined` | Defines the `notificationsCount`, displayed in the notification icon top-right corner. |
| `notificationsDomRef` | `HTMLElement \| null` | Returns the `notifications` icon DOM ref. |
| `overflowDomRef` | `HTMLElement \| null` | Returns the `overflow` icon DOM ref. |
| `primaryTitle` | `string \| undefined` | Defines the `primaryTitle`. |
| `productSwitchDomRef` | `HTMLElement \| null` | Returns the `product-switch` icon DOM ref. |
| `profileDomRef` | `HTMLElement \| null` | Returns the `profile` icon DOM ref. |
| `secondaryTitle` | `string \| undefined` | Defines the `secondaryTitle`. |
| `showNotifications` | `boolean` | Defines, if the notification icon would be displayed. |
| `showProductSwitch` | `boolean` | Defines, if the product switch icon would be displayed. |
| `showSearchField` | `boolean` | Defines, if the Search Field would be displayed when there is a valid `searchField` slot. |

## Slots

### `assistant`

Defines the assistant slot.

### `branding`

Defines the branding slot.
The `ui5-shellbar-branding` component is intended to be placed inside this slot.
Content placed here takes precedence over the `primaryTitle` property and the `logo` content slot.

**Note:** The `branding` slot is in an experimental state and is a subject to change.

### `content`

Define the items displayed in the content area.

Use the `data-hide-order` attribute with numeric value to specify the order of the items to be hidden when the space is not enough.
Lower values will be hidden first.

**Note:** The `content` slot is in an experimental state and is a subject to change.

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the `ui5-shellbar` additional items.

**Note:**
You can use the ``.

### `logo`

Defines the logo of the `ui5-shellbar`.
For example, you can use `ui5-avatar` or `img` elements as logo.

### `menuItems`

Defines the items displayed in menu after a click on a start button.

**Note:** You can use the  `` and its ancestors.

### `profile`

You can pass `ui5-avatar` to set the profile image/icon.
If no profile slot is set - profile will be excluded from actions.

**Note:** We recommend not using the `size` attribute of `ui5-avatar` because
it should have specific size by design in the context of `ui5-shellbar` profile.

### `searchField`

Defines the `ui5-input`, that will be used as a search field.

### `startButton`

Defines a `ui5-button` in the bar that will be placed in the beginning.
We encourage this slot to be used for a menu button.
It gets overstyled to match ShellBar's styling.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `content-item-visibility-change` | `CustomEvent<ShellBarContentItemVisibilityChangeEventDetail>` | Fired, when an item from the content slot is hidden or shown. **Note:** The `content-item-visibility-change` event is in an experimental state and is a subject to change. |
| `logo-click` | `CustomEvent<ShellBarLogoClickEventDetail>` | Fired, when the logo is activated. |
| `menu-item-click` | `CustomEvent<ShellBarMenuItemClickEventDetail>` | Fired, when a menu item is activated |
| `notifications-click` | `CustomEvent<ShellBarNotificationsClickEventDetail>` | Fired, when the notification icon is activated. |
| `product-switch-click` | `CustomEvent<ShellBarProductSwitchClickEventDetail>` | Fired, when the product switch icon is activated. |
| `profile-click` | `CustomEvent<ShellBarProfileClickEventDetail>` | Fired, when the profile slot is present. |
| `search-button-click` | `CustomEvent<ShellBarSearchButtonEventDetail>` | Fired, when the search button is activated. |
| `search-field-clear` | `CustomEvent<ShellBarSearchFieldClearEventDetail>` | Fired, when the search cancel button is activated. |
| `search-field-toggle` | `CustomEvent<ShellBarSearchFieldToggleEventDetail>` | Fired, when the search field is expanded or collapsed. |

## Methods

### `closeOverflow(): void`

Closes the overflow popover.

### `getSearchButtonDomRef(): Promise<HTMLElement | null>`

Returns the search button DOM reference.

## CSS Parts

- `root`: Used to style the outermost wrapper of the `ui5-shellbar`
