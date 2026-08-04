---
title: furo-ui5-tree
tags: [tree, hierarchy, nodes, expandable, collapsible, nested]
category: List
use-when: Use for displaying hierarchical data structures with expand/collapse.
---

# furo-ui5-tree

> Hierarchical tree view with expandable/collapsible nodes.

**Class:** `FuroUi5Tree`
**Import:** `import "@furo/ui5/tree"`
**Import type:** `import type { FuroUi5Tree } from "@furo/ui5/tree"`
**Category:** List

**Related:** [`furo-ui5-tree-item`](furo-ui5-tree-item.md)

## Overview

`furo-ui5-tree`
Renders a recursive navigation tree from a `tree.Tree` or `tree.NavigationNode` model.

Each node is rendered as a `furo-ui5-tree-item`. Expand / collapse, selection and focus
are propagated through the open-models event tree (`__broadcastEvent` / `__dispatchEvent`),
mirroring the behavior of the original `@furo/data` based implementation.

### Keyboard navigation

The `furo-ui5-tree` provides advanced keyboard handling.

We follow the rules from
[ARIA: treegrid role - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/treegrid_role#keyboard_interactions)
and [Treegrid Pattern | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/patterns/treegrid/). Cell navigation is not supported at the moment.

The user can use the following keyboard shortcuts in order to navigate through the tree (cell navigation is not yet supported):

- [UP/DOWN] - Navigates up and down the tree items that are currently visible.
- [RIGHT] - Opens a node when it is not expanded and drills down the tree when the node is already opened.
- [SHIFT + RIGHT] - Opens **all sub nodes** of the focused node while respecting the `expandDepth` attribute. The focus stays on the current node. This is an additional key command.
- [LEFT] - Collapses an open node, on a closed node goes up the tree to the parent node.
- [HOME] - Focuses the first visible item.
- [END] - Focuses the last visible item.
- [ENTER] - Selects the focused node. If the node is already selected, toggles its open/close state.
- [SPACE] - Same as [ENTER].

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `depth` | `number` | 0 | Maximal depth for the tree. `0` (default) means infinite. |
| `expand-depth` | `number` | 2 | Maximal expand level relative to the current node when expanding recursively. |
| `focused` | `boolean` | false | Indicates that the element is focused. |
| `header-text` | `string` | "" | Override the display name of the root object. |
| `hide-root-node` | `boolean` | false | Hide the root node. |
| `root-as-header` | `boolean` | false | Render the root node as a header section. |
| `searching` | `boolean` | false | Indicates an active search. Use it to style items depending on this attribute. |
| `secondary-text` | `string` | "" | Override the description of the root object. |

## Events

| Event | Detail Type | Description |
|-------|-------------|-------------|
| `branch-focused` | `NavigationNode` | Fired when a node with children receives the focus. |
| `branch-selected` | `NavigationNode` | Fired when a node with children gets selected. |
| `leaf-focused` | `NavigationNode` | Fired when a leaf receives the focus. |
| `leaf-selected` | `NavigationNode` | Fired when a leaf gets selected. |
| `name` | `CustomEvent` |  |
| `node-closed` | `NavigationNode` | Fired when a node is closed. |
| `node-focused` | `NavigationNode` | Fired when a node receives the focus. |
| `node-opened` | `NavigationNode` | Fired when a node is opened. |
| `node-selected` | `NavigationNode` | Fired when a node gets selected (not fired in `qp` mode). |
| `nodes-collapsed` | `NavigationNode` | Fired when nodes are collapsed recursively. |
| `nodes-expanded` | `NavigationNode` | Fired when nodes are expanded recursively. |

## Methods

### `addSubNode(rawNode: INavigationNode): void`

Adds a sub node to the currently selected node and selects it.

### `bindData(treeNode: RootNode | NavigationNode | undefined): void`

Binds a `tree.Tree` or `tree.NavigationNode` FieldNode.

### `collapseAll(): void`

Collapses the whole tree (from the root).

### `collapseFocused(): void`

Collapses the focused node. If it is already closed, the parent is focused.

### `collapseFocusedRecursive(): void`

Collapses the focused node recursively.

### `collapseNodeRecursive(): void`

Collapses the currently selected node recursively.

### `deleteNode(): void`

Deletes the currently selected node.

### `expandAll(): void`

Expands the whole tree (from the root).

### `expandFocused(): void`

Expands the focused node. If it is already open, the next node is focused.

### `expandFocusedRecursive(): void`

Expands the focused node recursively.

### `expandNodeRecursive(): void`

Expands the currently selected node recursively.

### `focusFirst(): void`

Focuses the first node.

### `focusLast(): void`

Focuses the last visible node.

### `focusNext(): void`

Focuses the next visible node.

### `focusParent(): void`

Focuses the parent of the focused node.

### `focusPrevious(): void`

Focuses the previous visible node.

### `focusSelected(): void`

Focuses the currently selected node.

### `resetSearch(): void`

Disables search mode and clears the term.

### `search(term: string): NavigationNode[]`

Searches the visible nodes. Returns the matching nodes.

### `selectById(nodeID: string): NavigationNode | false`

Selects a node by its id. Returns the node, or `false` when not found.

### `selectFocused(): void`

Selects the focused node.

### `selectNext(): void`

Selects the next visible node.

### `selectPrev(): void`

Selects the previous visible node.

### `toggle(): void`

Toggles the currently selected node.

### `triggerNavigation(key: string, shiftKey: any): void`

Dispatches a keyboard navigation by key name. Intended to be wired to an external
navigation pad.
