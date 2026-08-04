---
title: furo-ui5-flexible-column-layout
tags: [layout, columns, master-detail, split, responsive, fcl, flexible, column]
category: PageStructure
use-when: Use for list-detail screens where the number of visible columns changes with the workflow.
---

# furo-ui5-flexible-column-layout

> One-, two- or three-column master-detail layout.

**Class:** `FuroUi5FlexibleColumnLayout`
**Import:** `import "@furo/ui5/flexible-column-layout"`
**Import type:** `import type { FuroUi5FlexibleColumnLayout } from "@furo/ui5/flexible-column-layout"`
**Extends:** `FlexibleColumnLayout`
**Category:** PageStructure

**Related:** [`furo-ui5-dynamic-side-content`](furo-ui5-dynamic-side-content.md)

## Overview

Implements the SAP Fiori Flexible Column Layout: up to three columns whose widths follow the current `layout` value.

```html
<furo-ui5-flexible-column-layout layout="TwoColumnsMidExpanded" style="height:300px">
  <div slot="startColumn" style="padding:1rem">Master</div>
  <div slot="midColumn" style="padding:1rem">Detail</div>
</furo-ui5-flexible-column-layout>
```

This is a pass-through wrapper around `furo-ui5-flexible-column-layout`: the UI5 API (properties, events,
slots) is inherited unchanged and no data binding is added.

### Overview

The `FlexibleColumnLayout` implements the list-detail-detail paradigm by displaying up to three pages in separate columns.
There are several possible layouts that can be changed either with the component API, or by dragging the column separators.

### Usage

Use this component for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.).
The Component is flexible in a sense that the application can focus the user's attention on one particular column.

### Responsive Behavior

The `FlexibleColumnLayout` automatically displays the maximum possible number of columns based on `layout` property and the window size.
The component would display 1 column for window size smaller than 599px, up to two columns between 599px and 1023px,
and 3 columns for sizes bigger than 1023px.

**Note:** When the component displays more than one column, the minimal width of each column is 248px. Consequently, when the user drags a column separator to resize the columns, the minimal allowed width of any resized column is 248px.

### Keyboard Handling

#### Basic Navigation

When a column separator is focused,  the following keyboard
shortcuts allow the user to resize the columns and change the layout:

- [Shift] + [Left] or [Shift] + [Right] - Moves the separator to the left or right, which resizes the columns accordingly.
- [Left] or [Right] - Moves the separator to the left or right with a bigger step, which resizes the columns accordingly.
- [Home] - Moves the separator to the start position.
- [End] - Moves the separator to the end position.
- This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

#### Fast Navigation
This component provides a build in fast navigation group which can be used via [F6] / [Shift] + [F6] / [Ctrl] + [Alt/Option] / [Down] or [Ctrl] + [Alt/Option] + [Up].
In order to use this functionality, you need to import the following module:

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `accessibility-attributes` | `FCLAccessibilityAttributes` | {} | Defines additional accessibility attributes on different areas of the component. |
| `column-layout` | `any` | undefined | Returns the current column layout, based on both the `layout` property and the screen size. |
| `disable-resizing` | `boolean` | false | Specifies if the user is allowed to change the columns layout by dragging the separator between the columns. |
| `end-column-visible` | `any` | false | Returns if the `end` column is visible. |
| `layout` | `"OneColumn" \| "TwoColumnsStartExpanded" \| "TwoColumnsMidExpanded" \| "ThreeColumnsMidExpanded" \| "ThreeColumnsEndExpanded" \| "ThreeColumnsStartExpandedEndHidden" \| "ThreeColumnsMidExpandedEndHidden" \| "ThreeColumnsStartHiddenMidExpanded" \| "ThreeColumnsStartHiddenEndExpanded" \| "MidColumnFullScreen" \| "EndColumnFullS...` | "OneColumn" | Defines the columns layout and their proportion. |
| `layouts-configuration` | `LayoutConfiguration` | {} | Allows to customize the column proportions per screen size and layout. If no custom proportion provided for a specific layout, the default will be used. |
| `mid-column-visible` | `any` | false | Returns if the `middle` column is visible. |
| `start-column-visible` | `any` | true | Returns if the `start` column is visible. |
| `visible-columns` | `any` | 1 | Returns the number of currently visible columns. |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `accessibilityAttributes` | `FCLAccessibilityAttributes` | Defines additional accessibility attributes on different areas of the component. |
| `columnLayout` | `FlexibleColumnLayoutColumnLayout \| undefined` | Returns the current column layout, based on both the `layout` property and the screen size. |
| `disableResizing` | `boolean` | Specifies if the user is allowed to change the columns layout by dragging the separator between the columns. |
| `endColumnVisible` | `boolean` | Returns if the `end` column is visible. |
| `layout` | `FCLLayout` | Defines the columns layout and their proportion. |
| `layoutsConfiguration` | `LayoutConfiguration` | Allows to customize the column proportions per screen size and layout. If no custom proportion provided for a specific layout, the default will be used. |
| `midColumnVisible` | `boolean` | Returns if the `middle` column is visible. |
| `startColumnVisible` | `boolean` | Returns if the `start` column is visible. |
| `visibleColumns` | `number` | Returns the number of currently visible columns. |

## Slots

### `endColumn`

Defines the content in the end column.

### `midColumn`

Defines the content in the middle column.

### `startColumn`

Defines the content in the start column.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `layout-change` | `CustomEvent<FlexibleColumnLayoutLayoutChangeEventDetail>` | Fired when the layout changes via user interaction by dragging the separators or by changing the component size due to resizing. |
| `layout-configuration-change` | `CustomEvent<FlexibleColumnLayoutLayoutConfigurationChangeEventDetail>` | Fired when the `layoutsConfiguration` changes via user interaction by dragging the separators. |
