---
title: furo-ui5-avatar-badge
tags: [avatar, badge, status, overlay]
category: Display
use-when: Use as the badge slot of furo-ui5-avatar to show a status indicator.
---

# furo-ui5-avatar-badge

> A badge overlay for an avatar (no data binding).

**Class:** `FuroUi5AvatarBadge`
**Import:** `import "@furo/ui5/avatar-badge"`
**Import type:** `import type { FuroUi5AvatarBadge } from "@furo/ui5/avatar-badge"`
**Extends:** `AvatarBadge`
**Category:** Display

**Related:** [`furo-ui5-avatar`](furo-ui5-avatar.md)

## Overview

The 'furo-ui5-avatar-badge' is a thin wrapper around the
[SAP ui5 AvatarBadge element](https://ui5.github.io/webcomponents/components/main/Avatar/).

It exposes the full UI5 AvatarBadge API unchanged and is meant to be slotted into
`furo-ui5-avatar`. There is intentionally **no data binding**.

### Overview

The `furo-ui5-avatar-badge` component is used to display a badge on top of `furo-ui5-avatar` component.
The badge can display an icon and supports different states for visual affordance.

### Usage

The badge should be used as a child element of `furo-ui5-avatar` in the `badge` slot.

```html
<ui5-avatar>
  <ui5-avatar-badge icon="edit" slot="badge"></ui5-avatar-badge>
</ui5-avatar>
```

### Keyboard Handling

The badge does not receive keyboard focus.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `icon` | `string \| undefined` | undefined | Defines the icon name to be displayed inside the badge. |
| `state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the state of the badge, which determines its styling. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip text of the badge icon. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `icon` | `string \| undefined` | Defines the icon name to be displayed inside the badge. |
| `state` | `ValueState` | Defines the state of the badge, which determines its styling. |
| `tooltip` | `string \| undefined` | Defines the tooltip text of the badge icon. |
