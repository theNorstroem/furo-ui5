---
title: furo-ui5-menu-separator
tags: [menu, separator, divider, rule, group]
category: Navigation
use-when: Use between furo-ui5-menu-item elements to visually separate action groups.
---

# furo-ui5-menu-separator

> Horizontal rule between context menu items.

**Class:** `FuroUi5MenuSeparator`
**Import:** `import "@furo/ui5/menu-separator"`
**Extends:** `MenuSeparator`
**Category:** Navigation

**Related:** [`furo-ui5-context-menu`](furo-ui5-context-menu.md), [`furo-ui5-menu-item`](furo-ui5-menu-item.md), [`furo-ui5-menu-item-group`](furo-ui5-menu-item-group.md)

## Overview

A thin divider used to separate groups of actions inside a `furo-ui5-context-menu`.

```html
<furo-ui5-context-menu open opener="anchor">
  <furo-ui5-menu-item text="Open" icon="open-folder"></furo-ui5-menu-item>
  <furo-ui5-menu-separator></furo-ui5-menu-separator>
  <furo-ui5-menu-item text="Delete" icon="delete"></furo-ui5-menu-item>
</furo-ui5-context-menu>
<div id="anchor">Right-click target</div>
```

This is a pass-through wrapper around `furo-ui5-menu-separator`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

The `furo-ui5-menu-separator` represents a horizontal line to separate menu items inside a `furo-ui5-menu`.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `click` | `CustomEvent<ListItemBaseClickEventDetail>` | Fired when the component is activated either with a mouse/tap or by using the Enter or Space key. |
