---
title: furo-ui5-user-menu
tags: [user-menu, account, profile, settings, logout, user, menu]
category: PageStructure
use-when: Use for user account actions like profile, settings, and logout.
---

# furo-ui5-user-menu

> User account menu accessible from the ShellBar.

**Class:** `FuroUi5UserMenu`
**Import:** `import "@furo/ui5/user-menu"`
**Extends:** `UserMenu`
**Category:** PageStructure

**Related:** [`furo-ui5-shellbar`](furo-ui5-shellbar.md), [`furo-ui5-user-menu-item`](furo-ui5-user-menu-item.md), [`furo-ui5-user-menu-account`](furo-ui5-user-menu-account.md)

## Overview

### Overview

The `furo-ui5-user-menu` is an SAP Fiori specific web component that is used in `furo-ui5-shellbar`
and allows the user to easily see information and settings for the current user and all other logged in accounts.

)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `avatar-interactive` | `boolean` | false | Defines whether the avatar of the selected account is interactive (focusable and pressable). |
| `open` | `boolean` | false | Defines if the User Menu is opened. |
| `opener` | `string \| HTMLElement \| null \| undefined` | undefined | Defines the ID or DOM Reference of the element at which the user menu is shown. |
| `show-edit-accounts` | `boolean` | false | Defines if the User Menu shows the Edit Accounts option. |
| `show-edit-button` | `boolean` | false | Defines if the User menu shows edit button. |
| `show-manage-account` | `boolean` | false | Defines if the User Menu shows the Manage Account option. |
| `show-other-accounts` | `boolean` | false | Defines if the User Menu shows the Other Accounts option. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `avatarInteractive` | `boolean` | Defines whether the avatar of the selected account is interactive (focusable and pressable). |
| `open` | `boolean` | Defines if the User Menu is opened. |
| `opener` | `HTMLElement \| string \| null \| undefined` | Defines the ID or DOM Reference of the element at which the user menu is shown. |
| `showEditAccounts` | `boolean` | Defines if the User Menu shows the Edit Accounts option. |
| `showEditButton` | `boolean` | Defines if the User menu shows edit button. |
| `showManageAccount` | `boolean` | Defines if the User Menu shows the Manage Account option. |
| `showOtherAccounts` | `boolean` | Defines if the User Menu shows the Other Accounts option. |

## Slots

### `accounts`

Defines the user accounts.

**Note:** If one item is used, it will be shown as the selected one. If more than one item is used, the first one will be shown as selected unless
there is an item with `selected` property set to `true`.

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the menu items.

### `footer`

Defines custom footer content.

**Note:** When provided, replaces the default "Sign Out" button. Use an empty element to hide the footer completely.

### `infoArea`

Defines the content of the info area inside the User Menu's account block.

**Note:** When empty, the User Menu renders unchanged.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `avatar-click` | `CustomEvent` | Fired when the account avatar is selected. |
| `change-account` | `CustomEvent<UserMenuOtherAccountClickEventDetail>` | Fired when the account is switched to a different one. |
| `close` | `CustomEvent` | Fired when a user menu is close. |
| `edit-accounts-click` | `CustomEvent` | Fired when the "Edit Accounts" button is selected. |
| `item-click` | `CustomEvent<UserMenuItemClickEventDetail>` | Fired when a menu item is selected. |
| `manage-account-click` | `CustomEvent` | Fired when the "Manage Account" button is selected. |
| `open` | `CustomEvent` | Fired when a user menu is open. |
| `sign-out-click` | `CustomEvent` | Fired when the "Sign Out" button is selected. |

## Methods

### `close(): void`

Closes the popup.

### `show(): void`

Shows the user-menu at the opener position defined with attribute opener.

### `showAt(opener: HTMLElement | string): void`

Shows the user-menu at the opener position.
Alternatively you can work with the attributes `opener` and `open` to achieve the same.
