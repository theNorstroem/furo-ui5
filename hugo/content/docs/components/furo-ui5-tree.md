---
title: furo-ui5-tree
description: tree navigation menu
weight: 50
---

# furo-ui5-tree
**@furo/ui5** <small>v1.0.0-rc.17</small>
<br>`import '@furo/ui5/src/furo-ui5-tree.js';`<small>
<br>exports *FuroUi5Tree* js
<br>exports `<furo-ui5-tree>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

> **Summary:** tree navigation menu

## Description

`furo-tree`
renders a tree structure

## Data signature

```yaml
- type: 'tree.Tree #Navigation tree type with recursive navigation nodes'
  fields:
    root: 'tree.Navigationnode:1 #Root node of the tree'
    id: 'string:2 #[optional] Id of the tree'
    display_name: '- string:3 #[optional] String representation of the tree'
    description: 'string:4 #[optional] description of the tree'
```


```yaml
- type: 'tree.Navigationnode #Item of the navigationtree'
  fields:
    id: 'string:1 #Id of the node'
    display_name: '- string:2 #String representation of the node'
    children: '[] tree.Navigationnode:3 #Children of this node'
    open: 'bool:4 #node is open or not'
    secondary_text: 'string:5 #[optional] Secondary text of the node'
    description: 'string:6 #[optional] Searchable description of the node'
    icon: 'string:7 #[optional] icon of the node'
    key_words: 'string:8 #[optional] searchable key words of the node'
    has_error: 'bool:9 #[optional] error indicator'
    is_group_label: 'bool:10 #[optional] Mark node as group label'
```

{{% api "_furo-ui5-tree-head.md" %}}

## Attributes and Properties
{{% api "_furo-ui5-tree-properties.md" %}}








































### **tabindex**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tabindex</span> <small>**reflects**</small>
<small>`number` default: **0**</small>

Sets the tabindex
<br><br>


### **expandDepth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">expand-depth</span>
<small>`number` default: **2**</small>

Sets the maximal expand level relative from the current node.

Expanding is a expensive operation.
<br><br>


### **depth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">depth</span>
</small>

Maximal depth for the tree. Default is infinite.
<br><br>

### **qp**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">qp</span>
</small>

Query param to watch.  Set `qp` to have a deep linkable tree.

If you set this attribute, the node-selected event will only be fired on `ƒ-qp-in` or `ƒ-select-by-id`.

If you select an item the `qp-change-request` will be fired instead. With the qp-change-request event, you should update the url.
A `furo-location` should watch the url and update the location on the tree, which will trigger a node-selected event.

```html
<furo-location @-location-query-changed="--qp"></furo-location>
<furo-ui5-tree
   qp="panel"
   ƒ-location-in="--qp" @-qp-change-requested="--qpchangerequest"></furo-ui5-tree>
<!-- update the location with the selected tree item -->
<furo-location-updater ƒ-set-qp="--qpchangerequest"></furo-location-updater>
```
<br><br>

### **rootAsHeader**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">root-as-header</span>
</small>

Set this flag if you do not want a header-text section.
<br><br>

### **hideRootNode**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">hide-root-node</span>
</small>

Set this flag if you do not want to see the root node
<br><br>

### **headerText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">header-text</span>
</small>

Override display name from root object
<br><br>

### **secondaryText**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">secondary-text</span>
</small>

Override description from root object.
<br><br>

### **focused**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">focused</span> <small>**reflects**</small>
</small>

indicates that the element is focused
<br><br>
## Events
{{% api "_furo-ui5-tree-events.md" %}}

### **node-focused**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-node-focused</span>
→ <small>`focused field`</small>

 Fired when
<br><br>
### **branch-focused**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-branch-focused</span>
→ <small>`focused field`</small>

 Fired when
<br><br>
### **leaf-focused**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-leaf-focused</span>
→ <small>``</small>

 Fired when
<br><br>
### **node-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-node-selected</span>
→ <small>`selected field`</small>

 Fired when the item gets selected, does not fire when you work with query params
<br><br>
### **qp-change-requested**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-qp-change-requested</span>
→ <small>`Object {&#34;this.qp&#34;: this._selectedField.id._value}`</small>

 Fired when qp mode is enabled. Nodes are only selectable with qpIn or selectById
<br><br>
### **branch-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-branch-selected</span>
→ <small>`selected field`</small>

 Fired when
<br><br>
### **leaf-selected**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-leaf-selected</span>
→ <small>`selected field`</small>

 Fired when
<br><br>
### **node-opened**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-node-opened</span>
→ <small>``</small>

 Fired when a node is opened
<br><br>
### **node-closed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-node-closed</span>
→ <small>``</small>

 Fired when a node is closed
<br><br>
### **nodes-expanded**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-nodes-expanded</span>
→ <small>``</small>

 Fired when nodes are expanded recursive
<br><br>
### **nodes-collapsed**
<span  style="border-width:2px 10px 2px 2px; border-style: solid;border-color:  rgb(2, 168, 244);font-family:monospace; padding:2px 4px;">@-nodes-collapsed</span>
→ <small>``</small>

 Fired when nodes are collapsed recursive.
<br><br>

## Methods
{{% api "_furo-ui5-tree-methods.md" %}}


### **collapseFocused**
<small>**collapseFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-collapse-focused</span>

collapses the focused element. If it is closed the parent will be focused.

<br><br>

### **expandFocused**
<small>**expandFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-expand-focused</span>

expands the focused node, if it is opened the first child will be focused

<br><br>

### **expandFocusedRecursive**
<small>**expandFocusedRecursive**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-expand-focused-recursive</span>

expands the focused node recursive

<br><br>

### **collapseFocusedRecursive**
<small>**collapseFocusedRecursive**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-collapse-focused-recursive</span>

collapses the focused node recursive

<br><br>

### **selectFocused**
<small>**selectFocused**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-focused</span>

selects the focused element.

<br><br>

### **search**
<small>**search**(*term* `` ) ⟹ `[]`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-search</span>

Search in the visible nodes

- <small>term </small>
<br><br>

### **searchOpenTree**
<small>**searchOpenTree**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-search-open-tree</span>



<br><br>

### **resetSearch**
<small>**resetSearch**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-reset-search</span>

Disables the search mode and clears the term

<br><br>


### **focusParent**
<small>**focusParent**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-parent</span>

Focuses the parent tree node without selecting it.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>

### **focusPrevious**
<small>**focusPrevious**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-previous</span>

focus the previous visible node.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>

### **qpIn**
<small>**qpIn**(*qpObject* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-qp-in</span>

Selects the node which is defined on `qp`

Use this, if you do not have a location object.

- <small>qpObject </small>
<br><br>

### **locationIn**
<small>**locationIn**(*locationObject* `` ) ⟹ `*|boolean`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-location-in</span>

Inject a location object, which contains a query param property to select the current node.

- <small>locationObject </small>
<br><br>

### **selectById**
<small>**selectById**(*nodeID* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-by-id</span>



- <small>nodeID </small>
<br><br>

### **selectPrev**
<small>**selectPrev**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-prev</span>

select the previous visible item

<br><br>

### **expandNodeRecursive**
<small>**expandNodeRecursive**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-expand-node-recursive</span>

expands the currently selected node recursive

<br><br>

### **expandAll**
<small>**expandAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-expand-all</span>



<br><br>

### **collapseAll**
<small>**collapseAll**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-collapse-all</span>



<br><br>

### **collapseNodeRecursive**
<small>**collapseNodeRecursive**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-collapse-node-recursive</span>

expands the currently selected node recursive

<br><br>

### **toggle**
<small>**toggle**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-toggle</span>

toggles the currently selected node

<br><br>

### **addSubNode**
<small>**addSubNode**(*rawNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-add-sub-node</span>



- <small>rawNode </small>
<br><br>

### **deleteNode**
<small>**deleteNode**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-delete-node</span>



<br><br>

### **selectNext**
<small>**selectNext**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-select-next</span>

select the next visible item

<br><br>

### **triggerNavigation**
<small>**triggerNavigation**(*key* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-trigger-navigation</span>



- <small>key </small>
<br><br>

### **focusFirst**
<small>**focusFirst**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-first</span>

Focuses the first node in the tree without selecting it.

Use selectFocused to select the focused node.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>

### **focusLast**
<small>**focusLast**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-last</span>

Focuses the last node in the tree without selecting it.

Use selectFocused to select the focused node.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>

### **focusNext**
<small>**focusNext**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-next</span>

focuses the next visible tree node.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>

### **focus**
<small>**focus**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus</span>

focuses the tree itself. You can use this in combination with keyboard navigation (furo-navigation-pad)

<br><br>


### **bindData**
<small>**bindData**(*treeNode* `NavigationNode|Tree` ) ⟹ `void`</small>

<small>`NavigationNode|Tree` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a FieldNode.

Supported types: everything with a `tree.Tree` or `tree.Navigationnode` signature.

- <small>treeNode Fieldnode</small>
<br><br>


### **focusSelected**
<small>**focusSelected**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-selected</span>

Focuses the currently selected tree item.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>



















## Styling
{{% api "_furo-ui5-tree-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--surface` | background color <hr> <small>default: `white`</small> <small>fallback: `N/A`</small>
`--on-surface` | foreground color <hr> <small>default: `#333333`</small> <small>fallback: `N/A`</small>
`--tree-indentation-1` | tree indention level 1 <hr> <small>default: `16px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-2` | tree indention level 2 <hr> <small>default: `32px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-3` | tree indention level 3 <hr> <small>default: `48px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-4` | tree indention level 4 <hr> <small>default: `56px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-5` | tree indention level 5 <hr> <small>default: `64px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-6` | tree indention level 6 <hr> <small>default: `72px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-7` | tree indention level 7 <hr> <small>default: `80px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-8` | tree indention level 8 <hr> <small>default: `88px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-9` | tree indention level 9 <hr> <small>default: `92px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-10` | tree indention level 10 <hr> <small>default: `96px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-11` | tree indention level 11 <hr> <small>default: `100px`</small> <small>fallback: `N/A`</small>
`--tree-indentation-12` | tree indention level 12 <hr> <small>default: `104px`</small> <small>fallback: `N/A`</small>

{{% api "_furo-ui5-tree-footer.md" %}}
{{% api "_furo-ui5-tree-scripts.md" %}}
