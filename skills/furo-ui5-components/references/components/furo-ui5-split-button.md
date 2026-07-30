---
title: furo-ui5-split-button
tags: [button, split, dropdown, action, menu, arrow]
category: Button
use-when: Use when one action is the obvious default but variants should stay reachable.
---

# furo-ui5-split-button

> Button with a default action plus an arrow for alternatives.

**Class:** `FuroUi5SplitButton`
**Import:** `import "@furo/ui5/split-button"`
**Extends:** `SplitButton`
**Category:** Button

**Related:** [`furo-ui5-button`](furo-ui5-button.md), [`furo-ui5-context-menu`](furo-ui5-context-menu.md), [`furo-ui5-toggle-button`](furo-ui5-toggle-button.md)

## Overview

Two buttons in one: the text area triggers the default action, the arrow opens alternatives — usually a `furo-ui5-context-menu`.

```html
<furo-ui5-split-button design="Emphasized">Save</furo-ui5-split-button>
```

This is a pass-through wrapper around `furo-ui5-split-button`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

`furo-ui5-split-button` enables users to trigger actions. It is constructed of two separate actions -
default action and arrow action that can be activated by clicking or tapping, or by
pressing certain keyboard keys - `Space` or `Enter` for default action,
and `Arrow Down` or `Arrow Up` for arrow action.

### Usage

`furo-ui5-split-button` consists two separate buttons:

- for the first one (default action) you can define some `text` or an `icon`, or both.
- the second one (arrow action) contains only `slim-arrow-down` icon.

You can choose a `design` from a set of predefined types (the same as for furo-ui5-button) that offer
different styling to correspond to the triggered action. Both text and arrow actions have the same design.

You can set the `furo-ui5-split-button` as enabled or disabled. Both parts of an enabled
`furo-ui5-split-button` can be pressed by clicking or tapping it, or by certain keys, which changes
the style to provide visual feedback to the user that it is pressed or hovered over with
the mouse cursor. A disabled `furo-ui5-split-button` appears inactive and any of the two buttons
cannot be pressed.

### Keyboard Handling

- `Space` or `Enter` - triggers the default action
- `Shift` or `Escape` - if `Space` is pressed, releases the default action button without triggering the click event.
- `Arrow Down`, `Arrow Up`, `Alt`+`Arrow Down`, `Alt`+`Arrow Up`, or `F4` - triggers the arrow action
There are separate events that are fired on activating of `furo-ui5-split-button` parts:

- `click` for the first button (default action)
- `arrow-click` for the second button (arrow action)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `SplitButtonAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. The `accessibilityAttributes` property accepts an object with the following optional fields: |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `active-arrow-button` | `boolean` | false | Defines whether the arrow button should have the active state styles or not. |
| `design` | `"Transparent" \| "Positive" \| "Negative" \| "Default" \| "Emphasized" \| "Attention"` | "Default" | Defines the component design. |
| `disabled` | `boolean` | false | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `icon` | `string \| undefined` | undefined | Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `SplitButtonAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. The `accessibilityAttributes` property accepts an object with the following optional fields: |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `activeArrowButton` | `boolean` | Defines whether the arrow button should have the active state styles or not. |
| `design` | `ButtonDesign` | Defines the component design. |
| `disabled` | `boolean` | Defines whether the component is disabled. A disabled component can't be pressed or focused, and it is not in the tab chain. |
| `icon` | `string \| undefined` | Defines the icon to be displayed as graphical element within the component. The SAP-icons font provides numerous options. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `arrow-click` | `CustomEvent` | Fired when the user clicks on the arrow action. |
| `click` | `CustomEvent` | Fired when the user clicks on the default action. |

## CSS Parts

- `button`: Used to style the native button element
- `endIcon`: Used to style the end icon in the native button element
- `icon`: Used to style the icon in the native button element
