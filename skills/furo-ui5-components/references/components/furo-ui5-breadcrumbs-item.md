---
title: furo-ui5-breadcrumbs-item
tags: [breadcrumb, item, navigation, link, breadcrumbs]
category: Navigation
use-when: Use as a child of furo-ui5-breadcrumbs to represent one trail entry.
---

# furo-ui5-breadcrumbs-item

> A single breadcrumb item (no data binding).

**Class:** `FuroUi5BreadcrumbsItem`
**Import:** `import "@furo/ui5/breadcrumbs-item"`
**Import type:** `import type { FuroUi5BreadcrumbsItem } from "@furo/ui5/breadcrumbs-item"`
**Extends:** `BreadcrumbsItem`
**Category:** Navigation

**Related:** [`furo-ui5-breadcrumbs`](furo-ui5-breadcrumbs.md)

## Overview

The 'furo-ui5-breadcrumbs-item' is a thin wrapper around the
[SAP ui5 BreadcrumbsItem element](https://ui5.github.io/webcomponents/components/Breadcrumbs/).

It exposes the full UI5 BreadcrumbsItem API unchanged and is meant to be placed inside
`furo-ui5-breadcrumbs`. There is intentionally **no data binding**.

### Overview

The `furo-ui5-breadcrumbs-item` component defines the content of an item in `furo-ui5-breadcrumbs`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the item. |
| `href` | `string \| undefined` | undefined | Defines the link href. |
| `target` | `string \| undefined` | undefined | Defines the link target. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the item. |
| `href` | `string \| undefined` | Defines the link href. |
| `target` | `string \| undefined` | Defines the link target. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<BreadcrumbsItemClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
