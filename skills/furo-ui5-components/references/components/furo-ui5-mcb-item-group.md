---
title: furo-ui5-mcb-item-group
tags: [multi-combobox, group, header, suggestion, category, mcb, item]
category: Form
use-when: Use inside furo-ui5-multi-combobox to group suggestions into labelled sections.
---

# furo-ui5-mcb-item-group

> Groups multi-combobox suggestions under a header.

**Class:** `FuroUi5McbItemGroup`
**Import:** `import "@furo/ui5/mcb-item-group"`
**Extends:** `MultiComboBoxItemGroup`
**Category:** Form

**Related:** [`furo-ui5-multi-combobox`](furo-ui5-multi-combobox.md), [`furo-ui5-mcb-item`](furo-ui5-mcb-item.md), [`furo-ui5-mcb-item-custom`](furo-ui5-mcb-item-custom.md)

## Overview

Groups `furo-ui5-mcb-item` children under a common header inside a multi-combobox popover.

```html
<furo-ui5-multi-combobox placeholder="Pick cities">
  <furo-ui5-mcb-item-group header-text="Europe">
    <furo-ui5-mcb-item text="Zurich"></furo-ui5-mcb-item>
    <furo-ui5-mcb-item text="Berlin"></furo-ui5-mcb-item>
  </furo-ui5-mcb-item-group>
</furo-ui5-multi-combobox>
```

This is a pass-through wrapper around `furo-ui5-mcb-item-group`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-mcb-item-group` is type of suggestion item,
that can be used to split the `furo-ui5-multi-combobox` suggestions into groups.

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

Defines the items of the `ui5-mcb-item-group`.

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
