---
title: furo-ui5-list
tags: [list, items, collection, vertical]
category: Display
use-when: Use as a styled list container; provide list items as children.
---

# furo-ui5-list

> Vertical list container (no data binding).

**Class:** `FuroUi5List`
**Import:** `import "@furo/ui5/list"`
**Import type:** `import type { FuroUi5List } from "@furo/ui5/list"`
**Extends:** `List`
**Category:** Display

**Related:** [`furo-ui5-tree`](furo-ui5-tree.md)

## Overview

The 'furo-ui5-list' is a thin wrapper around the
[SAP ui5 List element](https://ui5.github.io/webcomponents/components/List/).

It exposes the full UI5 List API unchanged. There is intentionally **no data binding** — place
`furo-ui5-li*` items as children yourself.

### Overview

The `furo-ui5-list` component allows displaying a list of items, advanced keyboard
handling support for navigating between items, and predefined modes to improve the development efficiency.

The `furo-ui5-list` is a container for the available list items:

- `furo-ui5-li`
- `furo-ui5-li-custom`
- `furo-ui5-li-group`

To benefit from the built-in selection mechanism, you can use the available
selection modes, such as
`Single`, `Multiple` and `Delete`.

Additionally, the `furo-ui5-list` provides header, footer, and customization for the list item separators.

### Keyboard Handling

#### Basic Navigation
The `furo-ui5-list` provides advanced keyboard handling.
When a list is focused the user can use the following keyboard
shortcuts in order to perform a navigation:

- [Up] or [Down] - Navigates up and down the items
- [Home] - Navigates to first item
- [End] - Navigates to the last item

The user can use the following keyboard shortcuts to perform actions (such as select, delete),
when the `selectionMode` property is in use:

- [Space] - Select an item (if `type` is 'Active') when `selectionMode` is selection
- [Delete] - Delete an item if `selectionMode` property is `Delete`

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

)

)

)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ListAccessibilityAttributes` | {} | Defines additional accessibility attributes on different areas of the component. |
| `accessible-description` | `string \| undefined` | undefined | Defines the accessible description of the component. |
| `accessible-description-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that describe the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Defines the IDs of the elements that label the component. |
| `accessible-role` | `"List" \| "Menu" \| "Tree" \| "ListBox"` | "List" | Defines the accessible role of the component. |
| `footer-text` | `string \| undefined` | undefined | Defines the footer text. |
| `growing` | `"None" \| "Button" \| "Scroll"` | "None" | Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `load-more` event is fired. |
| `growing-button-text` | `string \| undefined` | undefined | Defines the text that will be displayed inside the growing button. |
| `header-text` | `string \| undefined` | undefined | Defines the component header text. |
| `indent` | `boolean` | false | Determines whether the component is indented. |
| `list-items` | `any` | [] | Returns an array containing the list item instances without the groups in a flat structure. |
| `loading` | `boolean` | false | Defines if the component would display a loading indicator over the list. |
| `loading-delay` | `number` | 1000 | Defines the delay in milliseconds, after which the loading indicator will show up for this component. |
| `no-data-text` | `string \| undefined` | undefined | Defines the text that is displayed when the component contains no items. |
| `selection-mode` | `"None" \| "Single" \| "Multiple" \| "SingleStart" \| "SingleEnd" \| "SingleAuto" \| "Delete"` | "None" | Defines the selection mode of the component. |
| `separators` | `"None" \| "All" \| "Inner"` | "All" | Defines the item separator style that is used. |
| `sticky-header` | `boolean` | false | Indicates whether the List header is sticky or not. If stickyHeader is set to true, then whenever you scroll the content or the application, the header of the list will be always visible. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ListAccessibilityAttributes` | Defines additional accessibility attributes on different areas of the component. |
| `accessibleDescription` | `string \| undefined` | Defines the accessible description of the component. |
| `accessibleDescriptionRef` | `string \| undefined` | Defines the IDs of the elements that describe the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible name of the component. |
| `accessibleNameRef` | `string \| undefined` | Defines the IDs of the elements that label the component. |
| `accessibleRole` | `ListAccessibleRole` | Defines the accessible role of the component. |
| `footerText` | `string \| undefined` | Defines the footer text. |
| `growing` | `ListGrowingMode` | Defines whether the component will have growing capability either by pressing a `More` button, or via user scroll. In both cases `load-more` event is fired. |
| `growingButtonText` | `string \| undefined` | Defines the text that will be displayed inside the growing button. |
| `headerText` | `string \| undefined` | Defines the component header text. |
| `indent` | `boolean` | Determines whether the component is indented. |
| `listItems` | `Array<ListItemBase>` | Returns an array containing the list item instances without the groups in a flat structure. |
| `loading` | `boolean` | Defines if the component would display a loading indicator over the list. |
| `loadingDelay` | `number` | Defines the delay in milliseconds, after which the loading indicator will show up for this component. |
| `noDataText` | `string \| undefined` | Defines the text that is displayed when the component contains no items. |
| `selectionMode` | `ListSelectionMode` | Defines the selection mode of the component. |
| `separators` | `ListSeparator` | Defines the item separator style that is used. |
| `stickyHeader` | `boolean` | Indicates whether the List header is sticky or not. If stickyHeader is set to true, then whenever you scroll the content or the application, the header of the list will be always visible. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of the component.

**Note:** Use `ui5-li`, `ui5-li-custom`, and `ui5-li-group` for the intended design.

### `header`

Defines the component header.

**Note:** When `header` is set, the
`headerText` property is ignored.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `item-click` | `CustomEvent<ListItemClickEventDetail>` | Fired when an item is activated, unless the item's `type` property is set to `Inactive`. |
| `item-close` | `CustomEvent<ListItemCloseEventDetail>` | Fired when the `Close` button of any item is clicked |
| `item-delete` | `CustomEvent<ListItemDeleteEventDetail>` | Fired when the Delete button of any item is pressed. |
| `item-toggle` | `CustomEvent<ListItemToggleEventDetail>` | Fired when the `Toggle` button of any item is clicked. |
| `load-more` | `CustomEvent` | Fired when the user scrolls to the bottom of the list. |
| `move` | `CustomEvent<ListMoveEventDetail>` | Fired when a movable list item is dropped onto a drop target. |
| `move-over` | `CustomEvent<ListMoveEventDetail>` | Fired when a movable list item is moved over a potential drop target during a dragging operation. |
| `selection-change` | `CustomEvent<ListSelectionChangeEventDetail>` | Fired when selection is changed by user interaction in `Single`, `SingleStart`, `SingleEnd` and `Multiple` selection modes. |

## CSS Parts

- `growing-button`: Used to style the button, that is used for growing of the component
- `growing-button-inner`: Used to style the button inner element
