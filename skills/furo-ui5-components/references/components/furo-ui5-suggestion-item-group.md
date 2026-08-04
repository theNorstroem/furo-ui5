---
title: furo-ui5-suggestion-item-group
tags: [suggestion, group, header, autocomplete, category, item]
category: Form
use-when: Use inside furo-ui5-text-input to group suggestions into labelled sections.
---

# furo-ui5-suggestion-item-group

> Groups input suggestions under a header.

**Class:** `FuroUi5SuggestionItemGroup`
**Import:** `import "@furo/ui5/suggestion-item-group"`
**Import type:** `import type { FuroUi5SuggestionItemGroup } from "@furo/ui5/suggestion-item-group"`
**Extends:** `SuggestionItemGroup`
**Category:** Form

**Related:** [`furo-ui5-text-input`](furo-ui5-text-input.md), [`furo-ui5-suggestion-item`](furo-ui5-suggestion-item.md), [`furo-ui5-suggestion-item-custom`](furo-ui5-suggestion-item-custom.md)

## Overview

Groups `furo-ui5-suggestion-item` children under a common header inside the suggestion popover.

```html
<furo-ui5-text-input show-suggestions placeholder="Type 'Z'">
  <furo-ui5-suggestion-item-group header-text="Switzerland">
    <furo-ui5-suggestion-item text="Zurich"></furo-ui5-suggestion-item>
    <furo-ui5-suggestion-item text="Zug"></furo-ui5-suggestion-item>
  </furo-ui5-suggestion-item-group>
</furo-ui5-text-input>
```

This is a pass-through wrapper around `furo-ui5-suggestion-item-group`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-suggestion-item-group` is type of suggestion item,
that can be used to split the `furo-ui5-input` suggestions into groups.

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

Defines the items of the `ui5-suggestion-item-group`.

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
