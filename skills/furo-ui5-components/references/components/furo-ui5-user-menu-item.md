---
title: furo-ui5-user-menu-item
tags: [user-menu, item, action, profile, account, user, menu]
category: Navigation
use-when: Use as a child of furo-ui5-user-menu to offer a profile action.
---

# furo-ui5-user-menu-item

> Single action entry in the user menu.

**Class:** `FuroUi5UserMenuItem`
**Import:** `import "@furo/ui5/user-menu-item"`
**Extends:** `UserMenuItem`
**Category:** Navigation

**Related:** [`furo-ui5-user-menu`](furo-ui5-user-menu.md), [`furo-ui5-user-menu-item-group`](furo-ui5-user-menu-item-group.md), [`furo-ui5-user-menu-account`](furo-ui5-user-menu-account.md)

## Overview

One selectable entry of a `furo-ui5-user-menu`, such as Settings or Sign out.

```html
<furo-ui5-user-menu open>
  <furo-ui5-user-menu-item text="Settings" icon="action-settings"></furo-ui5-user-menu-item>
  <furo-ui5-user-menu-item text="Privacy" icon="locked"></furo-ui5-user-menu-item>
</furo-ui5-user-menu>
```

This is a pass-through wrapper around `furo-ui5-user-menu-item`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

`furo-ui5-user-menu-item` is the item to use inside a `furo-ui5-user-menu`.
An arbitrary hierarchy structure can be represented by recursively nesting menu items.

### Usage

`furo-ui5-user-menu-item` represents a node in a `furo-ui5-user-menu`. The user menu itself is rendered as a list,
and each `furo-ui5-menu-item` is represented by a menu item in that menu. Therefore, you should only use
`furo-ui5-user-menu-item` directly in your apps. The `furo-ui5-menu` menu item is internal for the menu, and not intended for public use.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ListItemAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-role` | `"None" \| "ListItem" \| "MenuItem" \| "TreeItem" \| "Option" \| undefined` | undefined | Used to define the role of the list item. |
| `additional-text` | `string \| undefined` | undefined | Defines the `additionalText`, displayed in the end of the menu item. |
| `checked` | `boolean` | false | Defines whether menu item is in checked state. |
| `disabled` | `boolean` | false | Defines whether menu item is in disabled state. |
| `highlight` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the highlight state of the list items. Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`. |
| `icon` | `string \| undefined` | undefined | Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options. |
| `loading` | `boolean` | false | Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover. |
| `loading-delay` | `number` | 1000 | Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover. |
| `navigated` | `boolean` | false | The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item. |
| `selected` | `boolean` | false | Defines the selected state of the component. |
| `show-selection` | `boolean` | false | When set, a second line appears below the menu item text showing the text of the currently selected sub-item. |
| `text` | `string \| undefined` | undefined | Defines the text of the tree item. |
| `tooltip` | `string \| undefined` | undefined | Defines the text of the tooltip for the menu item. |
| `type` | `"Navigation" \| "Inactive" \| "Active" \| "Detail"` | "Active" | Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ListItemAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The following fields are supported: |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleRole` | `ListItemAccessibleRole \| undefined` | Used to define the role of the list item. |
| `additionalText` | `string \| undefined` | Defines the `additionalText`, displayed in the end of the menu item. |
| `checked` | `boolean` | Defines whether menu item is in checked state. |
| `disabled` | `boolean` | Defines whether menu item is in disabled state. |
| `highlight` | `Highlight` | Defines the highlight state of the list items. Available options are: `"None"` (by default), `"Positive"`, `"Critical"`, `"Information"` and `"Negative"`. |
| `icon` | `string \| undefined` | Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options. |
| `loading` | `boolean` | Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover. |
| `loadingDelay` | `number` | Defines the delay in milliseconds, after which the loading indicator will be displayed inside the corresponding menu popover. |
| `navigated` | `boolean` | The navigated state of the list item. If set to `true`, a navigation indicator is displayed at the end of the list item. |
| `selected` | `boolean` | Defines the selected state of the component. |
| `showSelection` | `boolean` | When set, a second line appears below the menu item text showing the text of the currently selected sub-item. |
| `text` | `string \| undefined` | Defines the text of the tree item. |
| `tooltip` | `string \| undefined` | Defines the text of the tooltip for the menu item. |
| `type` | `ListItemType` | Defines the visual indication and behavior of the list items. Available options are `Active` (by default), `Inactive`, `Detail` and `Navigation`. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the items of this component.

**Note:** Use `ui5-user-menu-item` for the intended design.

### `deleteButton`

Defines the delete button, displayed in "Delete" mode.
**Note:** While the slot allows custom buttons, to match
design guidelines, please use the `ui5-button` component.
**Note:** When the slot is not present, a built-in delete button will be displayed.

### `endContent`

Defines the components that should be displayed at the end of the menu item.

**Note:** It is highly recommended to slot only components of type `ui5-button`,`ui5-link`
or `ui5-icon` in order to preserve the intended design. If there are components added to this slot,
and there is text set in `additionalText`, it will not be displayed. If there are items added to `items` slot,
nether `additionalText` nor components added to this slot would be displayed.

The priority of what will be displayed at the end of the menu item is as follows:
sub-menu arrow (if there are items added in `items` slot) -> components added in `endContent` -> text set to `additionalText`.

Application developers are responsible for ensuring that interactive elements placed in the `endContent` slot
have the correct accessibility behaviour, including their enabled or disabled states.
The menu does not manage these aspects when the menu item state changes.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `before-close` | `CustomEvent<MenuBeforeCloseEventDetail>` | Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. |
| `before-open` | `CustomEvent<MenuBeforeOpenEventDetail>` | Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. |
| `check` | `CustomEvent` | Fired when an item is checked or unchecked. |
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
| `close` | `CustomEvent` | Fired after the menu is closed. |
| `detail-click` | `CustomEvent` | Fired when the user clicks on the detail button when type is `Detail`. |
| `open` | `CustomEvent` | Fired after the menu is opened. |
