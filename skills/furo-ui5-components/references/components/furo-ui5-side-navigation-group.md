---
title: furo-ui5-side-navigation-group
tags: [navigation, side, group, section, collapsible, menu]
category: Navigation
use-when: Use inside furo-ui5-side-navigation to split entries into labelled, collapsible groups.
---

# furo-ui5-side-navigation-group

> Collapsible group of side navigation items.

**Class:** `FuroUi5SideNavigationGroup`
**Import:** `import "@furo/ui5/side-navigation-group"`
**Extends:** `SideNavigationGroup`
**Category:** Navigation

**Related:** [`furo-ui5-side-navigation`](furo-ui5-side-navigation.md), [`furo-ui5-side-navigation-item`](furo-ui5-side-navigation-item.md), [`furo-ui5-side-navigation-sub-item`](furo-ui5-side-navigation-sub-item.md)

## Overview

Groups `furo-ui5-side-navigation-item` children under a collapsible heading.

```html
<furo-ui5-side-navigation style="height:240px">
  <furo-ui5-side-navigation-group text="Analytics" expanded>
    <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
    <furo-ui5-side-navigation-item text="Forecast" icon="line-chart"></furo-ui5-side-navigation-item>
  </furo-ui5-side-navigation-group>
</furo-ui5-side-navigation>
```

This is a pass-through wrapper around `furo-ui5-side-navigation-group`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

Represents a group of navigation actions within `furo-ui5-side-navigation`.
The `furo-ui5-side-navigation-group` can only be used inside a `furo-ui5-side-navigation`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `expanded` | `boolean` | false | Defines if the item is expanded |
| `text` | `string \| undefined` | undefined | Defines the text of the item. |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `disabled` | `boolean` | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `expanded` | `boolean` | Defines if the item is expanded |
| `text` | `string \| undefined` | Defines the text of the item. |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines nested items by passing `ui5-side-navigation-item` to the default slot.
