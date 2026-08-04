---
title: furo-ui5-tree-item
tags: [tree-item, node, leaf, branch, hierarchy, expandable, indentation, tree, item]
category: List
use-when: Use as the child of furo-ui5-tree to render one node of a hierarchy.
---

# furo-ui5-tree-item

> Single node of a furo-ui5-tree, with expand/collapse and indentation.

**Class:** `FuroUi5TreeItem`
**Import:** `import "@furo/ui5/tree"`
**Import type:** `import type { FuroUi5TreeItem } from "@furo/ui5/tree"`
**Category:** List

**Related:** [`furo-ui5-tree`](furo-ui5-tree.md), [`furo-ui5-tree-table`](furo-ui5-tree-table.md)

## Overview

`furo-ui5-tree-item`

# INTERNAL COMPONENT
Row of a `furo-ui5-tree`. Renders a single `tree.NavigationNode`, reflects its
visible / selected / focused / search-match state, and emits a `tree-select` intent
when its label is clicked. Open / close is delegated to the embedded
`furo-ui5-bool-icon`, which writes back to the node's `open` field.

## Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `focused` | `boolean` | false |  |
| `haserror` | `boolean` | false |  |
| `inedit` | `boolean` | false |  |
| `is-group-label` | `boolean` | false |  |
| `noicon` | `boolean` | false |  |
| `searchmatch` | `boolean` | false |  |
| `selected` | `boolean` | false |  |

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `fieldNode` | `NavigationNode \| undefined` | Setter for the bound navigation node. |

## Methods

### `bindData(node: NavigationNode): void`

Binds a navigation node to this item.

### `search(event: TreeSearchRequest): void`

Tests this item against a search request and, on a match, pushes its `fieldNode`
onto `event.results`.
