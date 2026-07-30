---
title: furo-ui5-tree-table
tags: [tree-table, hierarchical, nested, expandable, parent-child, table, tree]
category: Table
use-when: Use when tabular data has parent-child relationships requiring expansion.
---

# furo-ui5-tree-table

> Hierarchical table with expandable parent-child rows.

**Class:** `FuroUi5TreeTable`
**Import:** `import "@furo/ui5/tree-table"`
**Category:** Table

**Related:** [`furo-ui5-tree`](furo-ui5-tree.md), [`furo-ui5-tree-item`](furo-ui5-tree-item.md)

## Overview

### Overview
A tree table contains a hierarchical set of data structured in rows and columns and grouped into nodes.

Trees are used to display and work with large amounts of hierarchical data. They have a high data density and therefore convey an immediate feeling of complexity. Ideally, you should only show trees with a lot of hierarchical data as a last resort. Try the following instead:

Break down the data into manageable chunks and allow the user to navigate or drill down between them.
Use charts with drilldown functionality until the amount of data is more manageable.

### Responsiveness
A tree table is available for desktops and tablets, but not in smartphone sizes.
It supports touch interaction devices, but is not optimized for small screens.
For smartphones, you need to take an adaptive approach by offering an additional UI.

Possible solutions are as follows:

- Use navigation to different pages instead of a tree structure. This works well for structures that are no more than four levels deep.
- Remove levels until only one or two remain. Replace a single-level tree by a table, and a two-level tree by a grouped table or a split-screen layout.
- Use filtering instead of a tree structure.

You can try to create a fallback based on these ideas, but a completely different solution, such as showing charts in a read-only case, might be more appropriate.

### Value State
Set the value-state attribute to mark a row with following states: Information, Positive, Negative, Critical.

```html
<tr aria-level="2" value-state="Danger">
        <td>New Paperclips</td>
        <td >1 Lorem ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
        <td >0.01</td>
 </tr>
```

> Aria level counting is one-based.
> Root rows have aria-level="1".

### Expanded nodes

If you want that a node is open from the init, add the `[aria-expanded=true]` attribute.

```html
<tr aria-level="1" aria-expanded="true">
      <td colspan="3">Paperclips</td>
 </tr>
 <tr aria-level="2">
      <td>New Paperclips</td>
      <td >1 Lorem ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
      <td >0.01</td>
 </tr>
```

### Group headers
To get a group header set the attribute `group-header` or the class `group-header` to the row.
Add a `td` for the tree and a `td` with `colspan="99"` to keep the line on the right side of the tree.

```html
<tr aria-level="1" aria-expanded="true" group-header="">
      <td>Paperclips</td>
      <td colspan="2"></td>
 </tr>
 <tr aria-level="2" >
      <td>New Paperclips</td>
      <td >1 Lorem ipsum dolor sit amet, consectetur adipisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.</td>
      <td >0.01</td>
 </tr>
```

### Additional sticky features

**[sticky-top]**

Set the `sticky-top` on the `tr` to get a stickiness at the top.

**[sticky-bottom]**

Set the `sticky-bottom` on the `tr` to get a stickiness at the bottom.

**[sticky-left]**

Set the `sticky-left` attribute on every `td` you want to stick on the left side. Do not forget to set this to the `thead>tr` too.

**[sticky-right]**

Set the `sticky-right` attribute on every `td` you want to stick on the right side. Do not forget to set this to the `thead>tr` too.

### Keyboard navigation

The `furo-ui5-tree-table` provides advanced keyboard handling. We follow the rules from
[ARIA: treegrid role - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role#keyboard_interactions)
and [Treegrid Pattern | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/). Cell navigation is not supported at the moment.

The user can use the following keyboard shortcuts in order to navigate through the tree (cell navigation is not yet supported):

- [UP/DOWN] - Navigates up and down the tree items that are currently visible.
- [RIGHT] - Opens a node when it is not expanded and drills down the tree when the node is already opened.
- [SHIFT + RIGHT] - Opens **all sub nodes** of the focused node. The focus stays on the current node. This is an additional key command.
- [LEFT] - Collapses an open node and otherwise goes up the tree to the parent node and collapses the tree nodes.
- [HOME] - Focuses the first visible row.
- [END] - Focuses the last visible row

### Styling

The tree table styles the consumer's light-DOM ``, so importing this element adopts a global
stylesheet (`TreeTableCSS`) into `document`. If you render a `furo-ui5-tree-table` inside another
web-component's shadow DOM, adopt `TreeTableCSS` into that shadow root as well.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `busy` | `boolean` | false | Defines if the table is in busy state. |
| `mode` | `"None" \| "SingleSelect" \| "MultiSelect"` | None | Defines the mode of the component. |
| `show-selected-row` | `boolean` | false | Set this to true, to keep the selection marker on focus out. |
| `sticky-column-header` | `boolean` | false | Determines whether the column headers remain fixed at the top of the page during vertical scrolling as long as the Web Component is in the viewport. |
| `sticky-tree` | `boolean` | false | Makes the tree sticky to the left. |

## Slots

### Default Slot (unnamed)

> **Usage:** Place content directly inside the component without a `slot` attribute.
**Type:** `HTMLElement[]`

Add your table with `thead` and `tbody` here.

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `load-more` | `CustomEvent<FuroUi5TreeTable>` | Fired when the user scrolls to the table's end. Also fired after 1 second if you start with an empty list or a list which to small to scroll. |
| `node-collapsed` | `CustomEvent<HTMLTableRowElement>` | Is fired when a node was collapsed. |
| `node-expanded` | `CustomEvent<HTMLTableRowElement>` | Is fired when a node was expanded. |
| `node-focused` | `CustomEvent<HTMLTableRowElement>` | Is fired when a node or a child of it receives the focus. The event detail contains the focused row. This event is trailing debounced with 250ms. |
| `row-click` | `CustomEvent<HTMLTableRowElement>` | Fired when the tree table is in SingleSelect and a row is clicked or `Enter` key is pressed. |
| `selection-change` | `CustomEvent<TreeTableSelectionChange>` | Fired when a row is selected. |

## Methods

### `collapseAllNodes(): void`

Collapses all nodes to level 1.

### `expandAllNodes(): void`

Expands every node in full depth.
