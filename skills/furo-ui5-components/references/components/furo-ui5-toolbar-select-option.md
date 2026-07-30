---
title: furo-ui5-toolbar-select-option
tags: [toolbar, select, option, dropdown, choice]
category: Layout
use-when: Use as a child of furo-ui5-toolbar-select to offer one choice.
---

# furo-ui5-toolbar-select-option

> Single option of a toolbar select.

**Class:** `FuroUi5ToolbarSelectOption`
**Import:** `import "@furo/ui5/toolbar-select-option"`
**Extends:** `ToolbarSelectOption`
**Category:** Layout

**Related:** [`furo-ui5-toolbar-select`](furo-ui5-toolbar-select.md), [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-option`](furo-ui5-option.md)

## Overview

One option of a `furo-ui5-toolbar-select`. Its label comes from the default slot.

```html
<furo-ui5-toolbar>
  <furo-ui5-toolbar-select>
    <furo-ui5-toolbar-select-option selected>All</furo-ui5-toolbar-select-option>
    <furo-ui5-toolbar-select-option>Open</furo-ui5-toolbar-select-option>
  </furo-ui5-toolbar-select>
</furo-ui5-toolbar>
```

This is a pass-through wrapper around `furo-ui5-toolbar-select-option`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-toolbar-select-option` component defines the content of an option in the `furo-ui5-toolbar-select`.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `selected` | `any` | false | Defines the selected state of the component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `selected` | `boolean` | Defines the selected state of the component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.
