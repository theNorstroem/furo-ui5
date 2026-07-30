---
title: furo-ui5-navigation-layout
tags: [layout, navigation, shell, sidebar, app, frame]
category: PageStructure
use-when: Use as the top-level frame of an application with a collapsible side navigation.
---

# furo-ui5-navigation-layout

> App shell combining a shellbar, side navigation and content.

**Class:** `FuroUi5NavigationLayout`
**Import:** `import "@furo/ui5/navigation-layout"`
**Extends:** `NavigationLayout`
**Category:** PageStructure

**Related:** [`furo-ui5-side-navigation`](furo-ui5-side-navigation.md), [`furo-ui5-shellbar`](furo-ui5-shellbar.md), [`furo-ui5-flexible-column-layout`](furo-ui5-flexible-column-layout.md)

## Overview

The application frame: a `header` slot for the shellbar, a `sideContent` slot for the side navigation and a default slot for the page content.

```html
<furo-ui5-navigation-layout style="height:320px">
  <furo-ui5-shellbar slot="header" primary-title="My App"></furo-ui5-shellbar>
  <furo-ui5-side-navigation slot="sideContent">
    <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
    <furo-ui5-side-navigation-item text="Reports" icon="bar-chart"></furo-ui5-side-navigation-item>
  </furo-ui5-side-navigation>
  <div style="padding:1rem">Page content</div>
</furo-ui5-navigation-layout>
```

This is a pass-through wrapper around `furo-ui5-navigation-layout`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `furo-ui5-navigation-layout` is a container component that can be used to
create a layout with a header, a side navigation and a content area.

### Usage

Use the `furo-ui5-navigation-layout` to create whole screen of an application with vertical navigation.

### Responsive Behavior

On larger screens with a width of 600px or more, excluding mobile phone devices, the side navigation is visible
by default and can be expanded or collapsed using the `mode` property.
On mobile phone devices and screens with a width of 599px or less, the side navigation is hidden by
default and can be displayed using the `mode` property.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `mode` | `"Auto" \| "Collapsed" \| "Expanded"` | "Auto" | Specifies the navigation layout mode. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `mode` | `NavigationLayoutMode` | Specifies the navigation layout mode. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the content.

### `header`

Defines the header.

### `sideContent`

Defines the side content.

## Methods

### `isSideCollapsed(): boolean`

Gets whether the side navigation is collapsed.
