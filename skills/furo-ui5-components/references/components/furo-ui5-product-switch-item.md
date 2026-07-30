---
title: furo-ui5-product-switch-item
tags: [product, switch, item, tile, app, link]
category: Navigation
use-when: Use as a child of furo-ui5-product-switch to link to one product.
---

# furo-ui5-product-switch-item

> Single tile inside a product switch.

**Class:** `FuroUi5ProductSwitchItem`
**Import:** `import "@furo/ui5/product-switch-item"`
**Extends:** `ProductSwitchItem`
**Category:** Navigation

**Related:** [`furo-ui5-product-switch`](furo-ui5-product-switch.md), [`furo-ui5-shellbar-item`](furo-ui5-shellbar-item.md), [`furo-ui5-card`](furo-ui5-card.md)

## Overview

One tile of a `furo-ui5-product-switch`, with a title, subtitle, icon and optional `target-src`.

```html
<furo-ui5-product-switch>
  <furo-ui5-product-switch-item
    title-text="Analytics"
    subtitle-text="Reports and forecasts"
    icon="bar-chart"
  ></furo-ui5-product-switch-item>
</furo-ui5-product-switch>
```

This is a pass-through wrapper around `furo-ui5-product-switch-item`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-product-switch-item` web component represents the items displayed in the
`furo-ui5-product-switch` web component.

**Note:** `furo-ui5-product-switch-item` is not supported when used outside of `furo-ui5-product-switch`.

### Keyboard Handling
The `furo-ui5-product-switch` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Space] / [Enter] or [Return] - Trigger `furo-ui5-click` event

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `icon` | `string \| undefined` | undefined | Defines the icon to be displayed as a graphical element within the component. |
| `subtitle-text` | `string \| undefined` | undefined | Defines the subtitle of the component. |
| `target` | `string \| undefined` | undefined | Defines a target where the `targetSrc` content must be open. |
| `target-src` | `string \| undefined` | undefined | Defines the component target URI. Supports standard hyperlink behavior. |
| `title-text` | `string \| undefined` | undefined | Defines the title of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `icon` | `string \| undefined` | Defines the icon to be displayed as a graphical element within the component. |
| `subtitleText` | `string \| undefined` | Defines the subtitle of the component. |
| `target` | `string \| undefined` | Defines a target where the `targetSrc` content must be open. |
| `targetSrc` | `string \| undefined` | Defines the component target URI. Supports standard hyperlink behavior. |
| `titleText` | `string \| undefined` | Defines the title of the component. |

## Slots

### `image`

Defines an image to be displayed instead of the standard icon.

**Note:** The image slot takes precedence over the icon property.
**Note:** We recommend using non-interactive ui5-avatar with size S, Square shape and Transparent colorScheme for best alignment.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired when the `furo-ui5-product-switch-item` is activated either with a click/tap or by using the Enter or Space key. |
