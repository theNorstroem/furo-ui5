---
title: furo-ui5-table-toolbar
tags: [table-toolbar, toolbar, actions, filter, sort, controls, table]
category: Table
use-when: Use above tables for table-specific actions like filter and sort.
---

# furo-ui5-table-toolbar

> Toolbar specifically designed for table actions and controls.

**Class:** `FuroUi5TableToolbar`
**Import:** `import "@furo/ui5/table-toolbar"`
**Import type:** `import type { FuroUi5TableToolbar } from "@furo/ui5/table-toolbar"`
**Category:** Table

**Related:** [`furo-ui5-table-toolbar-separator`](furo-ui5-table-toolbar-separator.md), [`furo-ui5-toolbar`](furo-ui5-toolbar.md), [`furo-ui5-toolbar-button`](furo-ui5-toolbar-button.md), [`furo-ui5-title`](furo-ui5-title.md)

## Overview

### Description

The table toolbar always appears above the table. The control is used for key actions that impact the entire table.

> Hint: Use a `furo-ui5-toolbar` in the action slot to have the menu feature on small screens.

### Usage

#### Use the table toolbar if:
- There are multiple objects on your page and you need to edit only a single table.
- You want to show actions as close to their corresponding controls as possible.
- You need a title for your table.

#### Do not use the table toolbar if:
- You are using single selection and have only one or two actions. In this case, place the actions on each line.

### Components
The table toolbar can contain several components, including a title and several types of button. Actions are grouped by the following action types:

- Finalizing actions, such as Save or Cancel. Finalizing actions are app-specific and are used only if the table is editable.
- Business actions, such as Edit or Create. Business actions can be app-specific or general object management actions.
- Actions for managing the content, such as Sort or Filter. These settings are also known as "view settings".
- Generic actions, such as Export to Spreadsheet.

Between the groups, add a separator line (`furo-ui5-table-toolbar-separator`).

The following content can be part of the table toolbar. Use only the content your users really need. For the remaining content, keep the order shown below:

- Title
- Variant management or content switch (for example, as used to switch between multiple views in a list report)
- Search
- Finalizing actions:
  - Save
  - Cancel

- Business actions: Use this action type for app-specific actions. This group contains:
- App-specific business actions
- Actions for object management
  - Create (for new items) or Add (for existing items)
  - Edit
  - Delete (if the object itself is deleted) or Remove (if the reference to an item is removed)
  - Paste

 The order of actions in this group is not "fixed". Place all the business actions, except for Paste, in the order of their importance for the use case. Always keep Paste as the last business action in the group.

 Try to keep Create/Add, Edit, and Delete/Remove together, but only if this is meaningful in your app.

- Actions for content management (view settings)
  - Show Details / Hide Details
  - Sort
  - Filter
  - Group
  - Column Settings
- Generic actions
  - Export to Spreadsheet
  - Print
- Maximize / Minimize
- View switch (for example, to switch between table and chart view)

### Empty areas collapse by themselves

The middle and the action area are removed from the layout when nothing is slotted into them, and the
start column stops claiming the free space when there is no middle area. The component tracks this on
`slotchange` and mirrors it onto itself as the read-only `has-middle` / `has-action` attributes, which
are what the internal stylesheet keys off. Do not set them by hand.

This is not doable in CSS alone: `:has()` is invalid inside `:host()`, and `:host:has(...)`, while it
parses, never matches -- a selector in a shadow stylesheet cannot reach across the shadow boundary to
the host's light-DOM children.

## Slots

### `middle`
**Type:** `HTMLElement[]`

Defines the content in the middle column, like a search field or a variant switch.

### `action`
**Type:** `HTMLElement[]`

Defines the content in the action area (on the right).

## CSS Parts

- `default`: Use this to format the start container `div` inside the shadow root of the component, which surrounds the default slot.
- `middle`: Use this to format the middle container `div` inside the shadow root of the component, which surrounds the `middle` slot.
- `action`: Use this to format the action container `div` inside the shadow root of the component, which surrounds the `action` slot.
