---
title: furo-ui5-li-custom
tags: [list, item, custom, li, template, slot]
category: List
use-when: Use inside furo-ui5-list when the row needs arbitrary markup instead of text and icon.
---

# furo-ui5-li-custom

> List item with fully custom content.

**Class:** `FuroUi5LiCustom`
**Import:** `import "@furo/ui5/li-custom"`
**Extends:** `ListItemCustom`
**Category:** List

**Related:** [`furo-ui5-list`](furo-ui5-list.md), [`furo-ui5-li`](furo-ui5-li.md), [`furo-ui5-typerenderer`](furo-ui5-typerenderer.md)

## Overview

A list item whose entire content is projected from the default slot. Combine it with `furo-ui5-typerenderer` to render field nodes inside a list row.

```html
<furo-ui5-list header-text="Custom rows">
  <furo-ui5-li-custom>
    <div style="display:flex;gap:.5rem;align-items:center;padding:.5rem">
      <furo-ui5-icon name="paper-plane"></furo-ui5-icon>
      <strong>Anything you like</strong>
    </div>
  </furo-ui5-li-custom>
</furo-ui5-list>
```

This is a pass-through wrapper around `furo-ui5-li-custom`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

A component to be used as custom list item within the `furo-ui5-list`
the same way as the standard `furo-ui5-li`.

The component accepts arbitrary HTML content to allow full customization.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ListItemAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessible-name` | `string \| undefined` | undefined | Defines the text alternative of the component. |
| `accessible-role` | `"None" \| "ListItem" \| "MenuItem" \| "TreeItem" \| "Option" \| undefined` | undefined | Used to define the role of the list item. |
| `highlight` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the highlight state of the list items. Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`. |
| `movable` | `boolean` | false | Defines whether the item is movable. |
| `navigated` | `boolean` | false | The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item. |
| `selected` | `boolean` | false | Defines the selected state of the component. |
| `tooltip` | `string \| undefined` | undefined | Defines the text of the tooltip that would be displayed for the list item. |
| `type` | `"Navigation" \| "Inactive" \| "Active" \| "Detail"` | "Active" | Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ListItemAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessibleName` | `string \| undefined` | Defines the text alternative of the component. |
| `accessibleRole` | `ListItemAccessibleRole \| undefined` | Used to define the role of the list item. |
| `highlight` | `Highlight` | Defines the highlight state of the list items. Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`. |
| `movable` | `boolean` | Defines whether the item is movable. |
| `navigated` | `boolean` | The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item. |
| `selected` | `boolean` | Defines the selected state of the component. |
| `tooltip` | `string \| undefined` | Defines the text of the tooltip that would be displayed for the list item. |
| `type` | `ListItemType` | Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content of the component.

### `deleteButton`

Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the `ui5-button` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
| `detail-click` | `CustomEvent` | Fired when the user clicks on the detail button when type is `Detail`. |

## CSS Parts

- `checkbox`: Used to style the checkbox rendered when the list item is in multiple selection mode
- `content`: Used to style the content area of the list item
- `delete-button`: Used to style the button rendered when the list item is in delete mode
- `detail-button`: Used to style the button rendered when the list item is of type detail
- `native-li`: Used to style the main li tag of the list item
- `radio`: Used to style the radio button rendered when the list item is in single selection mode
