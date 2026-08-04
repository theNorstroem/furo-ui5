---
title: furo-ui5-product-switch
tags: [product, switch, apps, grid, launcher, navigation]
category: Navigation
use-when: Use in the shellbar to let users jump to a sibling product or app.
---

# furo-ui5-product-switch

> Grid of links to related products or apps.

**Class:** `FuroUi5ProductSwitch`
**Import:** `import "@furo/ui5/product-switch"`
**Import type:** `import type { FuroUi5ProductSwitch } from "@furo/ui5/product-switch"`
**Extends:** `ProductSwitch`
**Category:** Navigation

**Related:** [`furo-ui5-product-switch-item`](furo-ui5-product-switch-item.md), [`furo-ui5-shellbar`](furo-ui5-shellbar.md), [`furo-ui5-navigation-menu`](furo-ui5-navigation-menu.md)

## Overview

Lays out `furo-ui5-product-switch-item` children in a responsive grid, usually inside a shellbar popover.

```html
<furo-ui5-product-switch>
  <furo-ui5-product-switch-item title-text="Home" subtitle-text="Overview" icon="home"></furo-ui5-product-switch-item>
  <furo-ui5-product-switch-item title-text="Analytics" subtitle-text="Reports" icon="bar-chart"></furo-ui5-product-switch-item>
</furo-ui5-product-switch>
```

This is a pass-through wrapper around `furo-ui5-product-switch`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-product-switch` is an SAP Fiori specific web component that is used in `furo-ui5-shellbar`
and allows the user to easily switch between products.

### Keyboard Handling
The `furo-ui5-product-switch` provides advanced keyboard handling.
When focused, the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Tab] - Move focus to the next interactive element after the `furo-ui5-product-switch`
- [Up] or [Down] - Navigates up and down the items
- [Left] or [Right] - Navigates left and right the items

)

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of the `ui5-product-switch`.
