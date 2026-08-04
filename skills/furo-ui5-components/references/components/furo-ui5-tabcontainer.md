---
title: furo-ui5-tabcontainer
tags: [tabs, tabcontainer, navigation, sections]
category: Container
use-when: Use to organize content into tabs; provide tabs as children.
---

# furo-ui5-tabcontainer

> Tab strip container (no data binding).

**Class:** `FuroUi5Tabcontainer`
**Import:** `import "@furo/ui5/tabcontainer"`
**Import type:** `import type { FuroUi5Tabcontainer } from "@furo/ui5/tabcontainer"`
**Extends:** `TabContainer`
**Category:** Container

**Related:** [`furo-ui5-tab`](furo-ui5-tab.md)

## Overview

The 'furo-ui5-tabcontainer' is a thin wrapper around the
[SAP ui5 TabContainer element](https://ui5.github.io/webcomponents/components/TabContainer/).

It exposes the full UI5 TabContainer API unchanged. There is intentionally **no data binding** —
place `furo-ui5-tab` children yourself.

### Overview

The `furo-ui5-tabcontainer` represents a collection of tabs with associated content.
Navigation through the tabs changes the content display of the currently active content area.
A tab can be labeled with text only, or icons with text.

### Structure

The `furo-ui5-tabcontainer` can hold two types of entities:

- `furo-ui5-tab` - contains all the information on an item (text and icon)
- `furo-ui5-tab-separator` - used to separate tabs with a line

### Hierarchies
Multiple sub tabs could be placed underneath one main tab. Nesting allows deeper hierarchies with indentations
to indicate the level of each nested tab. When a tab has both sub tabs and own content its click area is split
to allow the user to display the content or alternatively to expand / collapse the list of sub tabs.

### Keyboard Handling

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

)

)

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `all-items` | `any` | [] | Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. |
| `collapsed` | `boolean` | false | Defines whether the tab content is collapsed. |
| `content-background-design` | `"Transparent" \| "Solid" \| "Translucent"` | "Solid" | Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`. |
| `header-background-design` | `"Transparent" \| "Solid" \| "Translucent"` | "Solid" | Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`. |
| `no-auto-selection` | `boolean` | false | Defines if automatic tab selection is deactivated. |
| `overflow-mode` | `"End" \| "StartAndEnd"` | "End" | Defines the overflow mode of the header (the tab strip). |
| `tab-layout` | `"Standard" \| "Inline"` | "Standard" | Defines the alignment of the content and the `additionalText` of a tab. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `allItems` | `Array<ITab>` | Returns all slotted tabs and their subTabs in a flattened array. The order of tabs is depth-first. |
| `collapsed` | `boolean` | Defines whether the tab content is collapsed. |
| `contentBackgroundDesign` | `BackgroundDesign` | Sets the background color of the Tab Container's content as `Solid`, `Transparent`, or `Translucent`. |
| `headerBackgroundDesign` | `BackgroundDesign` | Sets the background color of the Tab Container's header as `Solid`, `Transparent`, or `Translucent`. |
| `noAutoSelection` | `boolean` | Defines if automatic tab selection is deactivated. |
| `overflowMode` | `OverflowMode` | Defines the overflow mode of the header (the tab strip). |
| `tabLayout` | `TabLayout` | Defines the alignment of the content and the `additionalText` of a tab. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.

Defines the tabs.

**Note:** Use `ui5-tab` and `ui5-tab-separator` for the intended design.

### `overflowButton`

Defines the button which will open the overflow menu. If nothing is provided to this slot,
the default button will be used.

### `startOverflowButton`

Defines the button which will open the start overflow menu if available. If nothing is provided to this slot,
the default button will be used.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `move` | `CustomEvent<TabContainerMoveEventDetail>` | Fired when element is moved to the tab container. |
| `move-over` | `CustomEvent<TabContainerMoveEventDetail>` | Fired when element is being moved over the tab container. |
| `tab-select` | `CustomEvent<TabContainerTabSelectEventDetail>` | Fired when a tab is selected. |

## CSS Parts

- `content`: Used to style the content of the component
- `tabstrip`: Used to style the tabstrip of the component
