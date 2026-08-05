---
title: furo-ui5-li
tags: [list, item, li, entry, row, standard]
category: List
use-when: Use as a child of furo-ui5-list to render a single text/icon entry.
---

# furo-ui5-li

> Standard list item for use inside a list.

**Class:** `FuroUi5Li`
**Import:** `import "@furo/ui5/li"`
**Import type:** `import type { FuroUi5Li } from "@furo/ui5/li"`
**Extends:** `ListItemStandard`
**Category:** List

**Related:** [`furo-ui5-list`](furo-ui5-list.md), [`furo-ui5-li-custom`](furo-ui5-li-custom.md), [`furo-ui5-li-group`](furo-ui5-li-group.md)

## Overview

The simplest type of item for a `furo-ui5-list`, covering the common cases: `text`, `description`, `icon` and `additional-text`.

```html
<furo-ui5-list header-text="Team">
  <furo-ui5-li icon="employee" description="Developer">Jane Doe</furo-ui5-li>
  <furo-ui5-li icon="employee" description="Designer">Sam Lee</furo-ui5-li>
</furo-ui5-list>
```

This is a pass-through wrapper around `furo-ui5-li`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-li` represents the simplest type of item for a `furo-ui5-list`.

This is a list item,
providing the most common use cases such as `text`,
`image` and `icon`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ListItemAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessible-name` | `string \| undefined` | undefined | Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present. |
| `accessible-role` | `"None" \| "ListItem" \| "MenuItem" \| "TreeItem" \| "Option" \| undefined` | undefined | Used to define the role of the list item. |
| `additional-text` | `string \| undefined` | undefined | Defines the `additionalText`, displayed in the end of the list item. |
| `additional-text-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the state of the `additionalText`. |
| `description` | `string \| undefined` | undefined | Defines the description displayed right under the item text, if such is present. |
| `highlight` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the highlight state of the list items. Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`. |
| `icon` | `string \| undefined` | undefined | Defines the `icon` source URI. |
| `icon-end` | `boolean` | false | Defines whether the `icon` should be displayed in the beginning of the list item or in the end. |
| `movable` | `boolean` | false | Defines whether the item is movable. |
| `navigated` | `boolean` | false | The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item. |
| `selected` | `boolean` | false | Defines the selected state of the component. |
| `text` | `string \| undefined` | undefined | Defines the text of the component. |
| `tooltip` | `string \| undefined` | undefined | Defines the text of the tooltip that would be displayed for the list item. |
| `type` | `"Navigation" \| "Inactive" \| "Active" \| "Detail"` | "Active" | Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`. |
| `wrapping-type` | `"None" \| "Normal"` | "None" | Defines if the text of the component should wrap when it's too long. When set to "Normal", the content (title, description) will be wrapped using the `furo-ui5-expandable-text` component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ListItemAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessibleName` | `string \| undefined` | Defines the text alternative of the component. Note: If not provided a default text alternative will be set, if present. |
| `accessibleRole` | `ListItemAccessibleRole \| undefined` | Used to define the role of the list item. |
| `additionalText` | `string \| undefined` | Defines the `additionalText`, displayed in the end of the list item. |
| `additionalTextState` | `ValueState` | Defines the state of the `additionalText`. |
| `description` | `string \| undefined` | Defines the description displayed right under the item text, if such is present. |
| `highlight` | `Highlight` | Defines the highlight state of the list items. Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`. |
| `icon` | `string \| undefined` | Defines the `icon` source URI. |
| `iconEnd` | `boolean` | Defines whether the `icon` should be displayed in the beginning of the list item or in the end. |
| `movable` | `boolean` | Defines whether the item is movable. |
| `navigated` | `boolean` | The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item. |
| `selected` | `boolean` | Defines the selected state of the component. |
| `text` | `string \| undefined` | Defines the text of the component. |
| `tooltip` | `string \| undefined` | Defines the text of the tooltip that would be displayed for the list item. |
| `type` | `ListItemType` | Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`. |
| `wrappingType` | `WrappingType` | Defines if the text of the component should wrap when it's too long. When set to "Normal", the content (title, description) will be wrapped using the `furo-ui5-expandable-text` component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the custom formatted text of the component.

**Note:** For optimal text wrapping and a consistent layout, it is strongly recommended to use the `text` property.

Use the `default` slot only when custom formatting with HTML elements (e.g., `<b>`, `<i>`) is required.
Be aware that wrapping (via `wrappingType="Normal"`) may not function correctly with custom HTML content in the `default` slot.

If both `text` and `default` slot are used, the `text` property takes precedence.

### `deleteButton`

Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the `ui5-button` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

### `image`

**Note:** While the slot allows option for setting custom avatar, to match the
design guidelines, please use the `ui5-avatar` with it's default size - S.

**Note:** If bigger `ui5-avatar` needs to be used, then the size of the
`ui5-li` should be customized in order to fit.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
| `detail-click` | `CustomEvent` | Fired when the user clicks on the detail button when type is `Detail`. |

## CSS Parts

- `additional-text`: Used to style the additionalText of the list item
- `checkbox`: Used to style the checkbox rendered when the list item is in multiple selection mode
- `content`: Used to style the content area of the list item
- `delete-button`: Used to style the button rendered when the list item is in delete mode
- `description`: Used to style the description of the list item
- `detail-button`: Used to style the button rendered when the list item is of type detail
- `icon`: Used to style the icon of the list item
- `native-li`: Used to style the main li tag of the list item
- `radio`: Used to style the radio button rendered when the list item is in single selection mode
- `title`: Used to style the title of the list item
