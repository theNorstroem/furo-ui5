---
title: furo-ui5-toolbar-button
tags: [toolbar, button, action, command, overflow]
category: Button
use-when: Use as a child of furo-ui5-toolbar so the action participates in overflow handling.
---

# furo-ui5-toolbar-button

> Button designed to live inside a toolbar.

**Class:** `FuroUi5ToolbarButton`
**Import:** `import "@furo/ui5/toolbar-button"`
**Extends:** `ToolbarButton`
**Category:** Button

**Related:** [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-button`](furo-ui5-button.md), [`furo-ui5-toolbar-select`](furo-ui5-toolbar-select.md)

## Overview

A button that participates in the toolbar's overflow logic. Use it instead of `furo-ui5-button` inside a toolbar.

```html
<furo-ui5-toolbar>
  <furo-ui5-toolbar-button text="Create" design="Emphasized"></furo-ui5-toolbar-button>
  <furo-ui5-toolbar-button text="Delete" design="Negative" icon="delete"></furo-ui5-toolbar-button>
</furo-ui5-toolbar>
```

This is a pass-through wrapper around `furo-ui5-toolbar-button`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-toolbar-button` represents an abstract action,
used in the `furo-ui5-toolbar`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `ButtonAccessibilityAttributes` | {} | Defines the additional accessibility attributes that will be applied to the component. |
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the component. |
| `design` | `"Transparent" \| "Positive" \| "Negative" \| "Default" \| "Emphasized" \| "Attention"` | "Default" | Defines the action design. |
| `disabled` | `boolean` | false | Defines if the action is disabled. |
| `end-icon` | `string \| undefined` | undefined | Defines the icon, displayed as graphical element within the component after the button text. |
| `icon` | `string \| undefined` | undefined | Defines the `icon` source URI. |
| `overflow-priority` | `"Default" \| "NeverOverflow" \| "AlwaysOverflow"` | "Default" | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `prevent-overflow-closing` | `boolean` | false | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
| `show-overflow-text` | `boolean` | false | Defines whether the button text should only be displayed in the overflow popover. |
| `text` | `string \| undefined` | undefined | Button text |
| `tooltip` | `string \| undefined` | undefined | Defines the tooltip of the component. |
| `width` | `string \| undefined` | undefined | Defines the width of the button. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `ToolbarButtonAccessibilityAttributes` | Defines the additional accessibility attributes that will be applied to the component. |
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the component. |
| `design` | `ButtonDesign` | Defines the action design. |
| `disabled` | `boolean` | Defines if the action is disabled. |
| `endIcon` | `string \| undefined` | Defines the icon, displayed as graphical element within the component after the button text. |
| `icon` | `string \| undefined` | Defines the `icon` source URI. |
| `overflowPriority` | `ToolbarItemOverflowBehavior` | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `preventOverflowClosing` | `boolean` | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
| `showOverflowText` | `boolean` | Defines whether the button text should only be displayed in the overflow popover. |
| `text` | `string \| undefined` | Button text |
| `tooltip` | `string \| undefined` | Defines the tooltip of the component. |
| `width` | `string \| undefined` | Defines the width of the button. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
