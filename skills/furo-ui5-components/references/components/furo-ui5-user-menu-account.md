---
title: furo-ui5-user-menu-account
tags: [user-menu, account, profile, avatar, identity, user, menu]
category: Navigation
use-when: Use inside furo-ui5-user-menu to show the signed-in account and allow switching.
---

# furo-ui5-user-menu-account

> Account entry shown at the top of the user menu.

**Class:** `FuroUi5UserMenuAccount`
**Import:** `import "@furo/ui5/user-menu-account"`
**Import type:** `import type { FuroUi5UserMenuAccount } from "@furo/ui5/user-menu-account"`
**Extends:** `UserMenuAccount`
**Category:** Navigation

**Related:** [`furo-ui5-user-menu`](furo-ui5-user-menu.md), [`furo-ui5-user-menu-item`](furo-ui5-user-menu-item.md), [`furo-ui5-avatar`](furo-ui5-avatar.md)

## Overview

Describes one account (title, subtitle, description, avatar) available in a `furo-ui5-user-menu`.

```html
<furo-ui5-user-menu open>
  <furo-ui5-user-menu-account
    slot="accounts"
    avatar-src="https://sdk.openui5.org/test-resources/sap/f/images/Woman_avatar_01.png"
    title-text="Jane Doe"
    subtitle-text="jane.doe@example.com"
    selected
  ></furo-ui5-user-menu-account>
</furo-ui5-user-menu>
```

This is a pass-through wrapper around `furo-ui5-user-menu-account`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-user-menu-account` represents an account in the `furo-ui5-user-menu`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `additional-info` | `string` | "" | Defines additional information for the user. |
| `avatar-color-scheme` | `"Auto" \| "Transparent" \| "Accent1" \| "Accent2" \| "Accent3" \| "Accent4" \| "Accent5" \| "Accent6" \| "Accent7" \| "Accent8" \| "Accent9" \| "Accent10" \| "Placeholder"` | "Auto" | Defines the background color of the desired image. If `avatarColorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color. |
| `avatar-initials` | `string \| undefined` | undefined | Defines the avatar initials of the user. |
| `avatar-src` | `string \| undefined` | "" | Defines the avatar image url of the user. |
| `description` | `string` | "" | Defines description of the user. |
| `loading` | `boolean` | false | Indicates whether a loading indicator should be shown. |
| `selected` | `boolean` | false | Defines if the user is selected. |
| `subtitle-text` | `string` | "" | Defines additional text of the user. |
| `title-text` | `string` | "" | Defines the title text of the user. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `additionalInfo` | `string` | Defines additional information for the user. |
| `avatarColorScheme` | `AvatarColorScheme` | Defines the background color of the desired image. If `avatarColorScheme` is set to `Auto`, the avatar will be displayed with the `Accent6` color. |
| `avatarInitials` | `string \| undefined` | Defines the avatar initials of the user. |
| `avatarSrc` | `string \| undefined` | Defines the avatar image url of the user. |
| `description` | `string` | Defines description of the user. |
| `loading` | `boolean` | Indicates whether a loading indicator should be shown. |
| `selected` | `boolean` | Defines if the user is selected. |
| `subtitleText` | `string` | Defines additional text of the user. |
| `titleText` | `string` | Defines the title text of the user. |
