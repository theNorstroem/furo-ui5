---
title: furo-ui5-li-group-header
tags: [list, group, header, separator, category]
category: List
use-when: Use inside furo-ui5-list as a standalone group heading between items.
---

# furo-ui5-li-group-header

> Header row that separates list items into logical groups.

**Class:** `FuroUi5LiGroupHeader`
**Import:** `import "@furo/ui5/li-group-header"`
**Extends:** `ListItemGroupHeader`
**Category:** List

**Related:** [`furo-ui5-list`](furo-ui5-list.md), [`furo-ui5-li-group`](furo-ui5-li-group.md), [`furo-ui5-li`](furo-ui5-li.md)

## Overview

A special, non-interactive list item used only to separate other list items into logical groups.

```html
<furo-ui5-list header-text="Sectioned">
  <furo-ui5-li-group-header>Europe</furo-ui5-li-group-header>
  <furo-ui5-li>Zurich</furo-ui5-li>
  <furo-ui5-li-group-header>Asia</furo-ui5-li-group-header>
  <furo-ui5-li>Tokyo</furo-ui5-li>
</furo-ui5-list>
```

This is a pass-through wrapper around `furo-ui5-li-group-header`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-li-group-header` is a special list item, used only to separate other list items into logical groups.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the text alternative of the component. |
| `wrapping-type` | `"None" \| "Normal"` | "None" | Defines if the text of the component should wrap when it's too long. When set to "Normal", the content (title, description) will be wrapped using the `furo-ui5-expandable-text` component. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the text alternative of the component. |
| `wrappingType` | `WrappingType` | Defines if the text of the component should wrap when it's too long. When set to "Normal", the content (title, description) will be wrapped using the `furo-ui5-expandable-text` component. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the text of the component.

**Note:** Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
