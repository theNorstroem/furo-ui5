---
title: furo-ui5-side-navigation
tags: [navigation, side, menu, sidebar, vertical, tree]
category: Navigation
use-when: Use as the main navigation of an application, usually inside furo-ui5-navigation-layout.
---

# furo-ui5-side-navigation

> Collapsible vertical application navigation.

**Class:** `FuroUi5SideNavigation`
**Import:** `import "@furo/ui5/side-navigation"`
**Import type:** `import type { FuroUi5SideNavigation } from "@furo/ui5/side-navigation"`
**Extends:** `SideNavigation`
**Category:** Navigation

**Related:** [`furo-ui5-side-navigation-item`](furo-ui5-side-navigation-item.md), [`furo-ui5-side-navigation-group`](furo-ui5-side-navigation-group.md)

## Overview

The vertical application navigation. It has a main area (default slot) and a `fixedItems` area pinned to the bottom, and can be collapsed to icons only.

```html
<furo-ui5-side-navigation style="height:260px">
  <furo-ui5-side-navigation-item text="Home" icon="home" selected></furo-ui5-side-navigation-item>
  <furo-ui5-side-navigation-item text="Reports" icon="bar-chart">
    <furo-ui5-side-navigation-sub-item text="Monthly"></furo-ui5-side-navigation-sub-item>
  </furo-ui5-side-navigation-item>
  <furo-ui5-side-navigation-item slot="fixedItems" text="Help" icon="sys-help"></furo-ui5-side-navigation-item>
</furo-ui5-side-navigation>
```

This is a pass-through wrapper around `furo-ui5-side-navigation`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `SideNavigation` is used as a standard menu in applications.
It consists of three containers: header (top-aligned), main navigation section (top-aligned) and the secondary section (bottom-aligned).

 - The header is meant for displaying user related information - profile data, avatar, etc.
 - The main navigation section is related to the user's current work context.
 - The secondary section is mostly used to link additional information that may be of interest (legal information, developer communities, external help, contact information and so on).

### Usage

Use the available `furo-ui5-side-navigation-group`, `furo-ui5-side-navigation-item`
and `furo-ui5-side-navigation-sub-item` components to build your menu.
The items can consist of text only or an icon with text. The use or non-use of icons must be consistent for all items on one level.
You must not combine entries with and without icons on the same level. We strongly recommend that you do not use icons on the second level.

The `furo-ui5-side-navigation` component is designed to be used within a `furo-ui5-navigation-layout` component to ensure an optimal user experience.

Using it standalone may not match the intended design and functionality.
For example, the side navigation may not exhibit the correct behavior on smaller screens.
Additionally, the padding of the `furo-ui5-shellbar` will not match the padding of the side navigation.

### Keyboard Handling

### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

)

)

)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessible-name` | `string \| undefined` | undefined | Defines the accessible ARIA name of the component. |
| `collapsed` | `boolean` | false | Defines whether the `furo-ui5-side-navigation` is expanded or collapsed. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibleName` | `string \| undefined` | Defines the accessible ARIA name of the component. |
| `collapsed` | `boolean` | Defines whether the `furo-ui5-side-navigation` is expanded or collapsed. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the main items of the component.

### `fixedItems`

Defines the fixed items at the bottom of the component.

**Note:** In order to achieve the best user experience, it is recommended that you keep the fixed items "flat" (do not pass sub-items)

### `header`

Defines the header of the `ui5-side-navigation`.

**Note:** The header is displayed when the component is expanded - the property `collapsed` is false;

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `item-click` | `CustomEvent<SideNavigationItemClickEventDetail>` | Fired when an item is clicked. |
| `selection-change` | `CustomEvent<SideNavigationSelectionChangeEventDetail>` | Fired when the selection has changed via user interaction. |
