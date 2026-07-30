---
title: furo-ui5-avatar-group
tags: [avatar, group, people, stack]
category: Display
use-when: Use to display a group of avatars; provide avatars as children.
---

# furo-ui5-avatar-group

> Grouped/overlapping avatars container (no data binding).

**Class:** `FuroUi5AvatarGroup`
**Import:** `import "@furo/ui5/avatar-group"`
**Extends:** `AvatarGroup`
**Category:** Display

**Related:** [`furo-ui5-avatar`](furo-ui5-avatar.md)

## Overview

The 'furo-ui5-avatar-group' is a thin wrapper around the
[SAP ui5 AvatarGroup element](https://ui5.github.io/webcomponents/components/AvatarGroup/).

It exposes the full UI5 AvatarGroup API unchanged. There is intentionally **no data binding** —
place `furo-ui5-avatar` children yourself.

### Overview

Displays a group of avatars arranged horizontally. It is useful to visually
showcase a group of related avatars, such as, project team members or employees.

The component allows you to display the avatars in different sizes,
depending on your use case.

The `AvatarGroup` component has two group types:

- `Group` type: The avatars are displayed as partially overlapped on
top of each other and the entire group has one click/tap area.
- `Individual` type: The avatars are displayed side-by-side and each
avatar has its own click/tap area.

### Usage

Use the `AvatarGroup` if:

- You want to display a group of avatars.
- You want to display several avatars which have something in common.

Do not use the `AvatarGroup` if:

- You want to display a single avatar.
- You want to display a gallery for simple images.
- You want to use it for other visual content than avatars.

### Responsive Behavior

When the available space is less than the width required to display all avatars,
an overflow visualization appears as a button placed at the end with the same shape
and size as the avatars. The visualization displays the number of avatars that have overflowed
and are not currently visible.

### Keyboard Handling
The component provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

`type` Individual:

- [Tab] - Move focus to the overflow button
- [Left] - Navigate one avatar to the left
- [Right] - Navigate one avatar to the right
- [Home] - Navigate to the first avatar
- [End] - Navigate to the last avatar
- [Space] / [Enter] or [Return] - Trigger `furo-ui5-click` event

`type` Group:

- [Tab] - Move focus to the next interactive element after the component
- [Space] / [Enter] or [Return] - Trigger `furo-ui5-click` event

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `AvatarGroupAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following field is supported: |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the AvatarGroup. When provided, this will override the default aria-label text. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(s) of the elements that describe the AvatarGroup. When provided, this will be used as aria-labelledby instead of aria-label. |
| `color-scheme` | `any` | [] | Returns an array containing the `AvatarColorScheme` values that correspond to the avatars in the component. |
| `hidden-items` | `any` | [] | Returns an array containing the `furo-ui5-avatar` instances that are currently not displayed due to lack of space. |
| `type` | `"Group" \| "Individual"` | "Group" | Defines the mode of the `AvatarGroup`. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `AvatarGroupAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following field is supported: |
| `accessibleName` | `string \| undefined` | Defines the accessible name of the AvatarGroup. When provided, this will override the default aria-label text. |
| `accessibleNameRef` | `string \| undefined` | Receives id(s) of the elements that describe the AvatarGroup. When provided, this will be used as aria-labelledby instead of aria-label. |
| `colorScheme` | `Array<AvatarColorScheme>` | Returns an array containing the `AvatarColorScheme` values that correspond to the avatars in the component. |
| `hiddenItems` | `Array<IAvatarGroupItem>` | Returns an array containing the `furo-ui5-avatar` instances that are currently not displayed due to lack of space. |
| `type` | `AvatarGroupType` | Defines the mode of the `AvatarGroup`. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of the component. Use the `ui5-avatar` component as an item.

**Note:** The UX guidelines recommends using avatars with "Circle" shape.

Moreover, if you use avatars with "Square" shape, there will be visual inconsistency
as the built-in overflow action has "Circle" shape.

### `overflowButton`

Defines the overflow button of the component.

**Note:** We recommend using the `ui5-button` component.

**Note:** If this slot is not used, the component will display the built-in overflow button.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<AvatarGroupClickEventDetail>` | Fired when the component is activated either with a click/tap or by using the Enter or Space key. |
| `overflow` | `CustomEvent` | Fired when the count of visible `furo-ui5-avatar` elements in the component has changed |
