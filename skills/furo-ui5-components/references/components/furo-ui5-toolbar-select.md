---
title: furo-ui5-toolbar-select
tags: [toolbar, select, dropdown, filter, choice]
category: Layout
use-when: Use inside furo-ui5-toolbar to offer a view or filter switch.
---

# furo-ui5-toolbar-select

> Dropdown designed to live inside a toolbar.

**Class:** `FuroUi5ToolbarSelect`
**Import:** `import "@furo/ui5/toolbar-select"`
**Extends:** `ToolbarSelect`
**Category:** Layout

**Related:** [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-toolbar-select-option`](furo-ui5-toolbar-select-option.md), [`furo-ui5-select`](furo-ui5-select.md)

## Overview

A select that participates in the toolbar's overflow logic. Fill it with `furo-ui5-toolbar-select-option` children.

```html
<furo-ui5-toolbar>
  <furo-ui5-toolbar-select>
    <furo-ui5-toolbar-select-option selected>All</furo-ui5-toolbar-select-option>
    <furo-ui5-toolbar-select-option>Open</furo-ui5-toolbar-select-option>
    <furo-ui5-toolbar-select-option>Closed</furo-ui5-toolbar-select-option>
  </furo-ui5-toolbar-select>
</furo-ui5-toolbar>
```

This is a pass-through wrapper around `furo-ui5-toolbar-select`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview
The `furo-ui5-toolbar-select` component is used to create a toolbar drop-down list.
The items inside the `furo-ui5-toolbar-select` define the available options by using the `furo-ui5-toolbar-select-option` component.

)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `accessible-name-ref` | `string \| undefined` | undefined | Receives id(or many ids) of the elements that label the select. |
| `disabled` | `boolean` | false | Defines whether the component is in disabled state. |
| `overflow-priority` | `"Default" \| "NeverOverflow" \| "AlwaysOverflow"` | "Default" | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `prevent-overflow-closing` | `boolean` | false | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
| `value` | `any` | "" | Defines the value of the component: |
| `value-state` | `"None" \| "Positive" \| "Critical" \| "Negative" \| "Information"` | "None" | Defines the value state of the component. |
| `width` | `string \| undefined` | undefined | Defines the width of the select. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `accessibleNameRef` | `string \| undefined` | Receives id(or many ids) of the elements that label the select. |
| `disabled` | `boolean` | Defines whether the component is in disabled state. |
| `overflowPriority` | `ToolbarItemOverflowBehavior` | Property used to define the access of the item to the overflow Popover. If "NeverOverflow" option is set, the item never goes in the Popover, if "AlwaysOverflow" - it never comes out of it. |
| `preventOverflowClosing` | `boolean` | Defines if the toolbar overflow popup should close upon interaction with the item. It will close by default. |
| `value` | `string \| undefined` | Defines the value of the component: |
| `valueState` | `ValueState` | Defines the value state of the component. |
| `width` | `string \| undefined` | Defines the width of the select. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the component options.

**Note:** Only one selected option is allowed.
If more than one option is defined as selected, the last one would be considered as the selected one.

**Note:** Use the `ui5-toolbar-select-option` component to define the desired options.

### `label`

Defines the HTML element that will be displayed in the component input part,
representing the selected option.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `change` | `CustomEvent<ToolbarSelectChangeEventDetail>` | Fired when the selected option changes. |
| `close` | `CustomEvent` | Fired after the component's dropdown menu closes. |
| `open` | `CustomEvent` | Fired after the component's dropdown menu opens. |
