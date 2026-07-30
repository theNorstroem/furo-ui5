---
title: furo-ui5-li-group
tags: [list, group, section, header, category]
category: List
use-when: Use inside furo-ui5-list to split items into labelled groups.
---

# furo-ui5-li-group

> Groups list items under a common header.

**Class:** `FuroUi5LiGroup`
**Import:** `import "@furo/ui5/li-group"`
**Extends:** `ListItemGroup`
**Category:** List

**Related:** [`furo-ui5-list`](furo-ui5-list.md), [`furo-ui5-li`](furo-ui5-li.md), [`furo-ui5-li-group-header`](furo-ui5-li-group-header.md)

## Overview

Wraps a set of list items and renders a group header above them.

```html
<furo-ui5-list header-text="Grouped">
  <furo-ui5-li-group header-text="Europe">
    <furo-ui5-li>Zurich</furo-ui5-li>
    <furo-ui5-li>Berlin</furo-ui5-li>
  </furo-ui5-li-group>
  <furo-ui5-li-group header-text="Asia">
    <furo-ui5-li>Tokyo</furo-ui5-li>
  </furo-ui5-li-group>
</furo-ui5-list>
```

This is a pass-through wrapper around `furo-ui5-li-group`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-li-group` is a special list item, used only to create groups of list items.

This is the item to use inside a `furo-ui5-list`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `header-accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the header. |
| `header-text` | `string \| undefined` | undefined | Defines the header text of the furo-ui5-li-group. |
| `wrapping-type` | `"None" \| "Normal"` | "None" | Defines if the text of the component should wrap when it's too long. When set to "Normal", the content (title, description) will be wrapped using the `furo-ui5-expandable-text` component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `headerAccessibleName` | `string \| undefined` | Defines the accessible name of the header. |
| `headerText` | `string \| undefined` | Defines the header text of the furo-ui5-li-group. |
| `wrappingType` | `WrappingType` | Defines if the text of the component should wrap when it's too long. When set to "Normal", the content (title, description) will be wrapped using the `furo-ui5-expandable-text` component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of the `ui5-li-group`.

### `header`

Defines the header of the component.

**Note:** Using this slot, the default header text of group and the value of `headerText` property will be overwritten.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `move` | `CustomEvent<ListItemGroupMoveEventDetail>` | Fired when a movable list item is dropped onto a drop target. |
| `move-over` | `CustomEvent<ListItemGroupMoveEventDetail>` | Fired when a movable list item is moved over a potential drop target during a dragging operation. |

## CSS Parts

- `header`: Used to style the header item of the group
- `title`: Used to style the title of the group header
