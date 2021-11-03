---
title: furo-tree
description: tree navigation menu
weight: 50
---

# furo-tree
**@furo/components** <small>v1.0.0-alpha.2</small>
<br>`import '@furo/components/src/furo-tree.js';`<small>
<br>exports *FuroTree* js
<br>exports `<furo-tree>` custom-element-definition
<br>superclass *LitElement*
<br> mixes *FBP*</small>

{{% api "_furo-tree-head.md" %}}

**tree navigation menu**

`furo-tree`
renders a tree structure

{{% api "_furo-tree-description.md" %}}


## Attributes and Properties
{{% api "_furo-tree-properties.md" %}}








































### **tabindex**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">tabindex</span> <small>**reflects**</small>
<small>`number` default: **0**</small>

Sets the tabindex
<br><br>

### **_searchTerm**
default: **&#39;&#39;**</small>


<br><br>

### **expandDepth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">expand-depth</span>
<small>`number` default: **2**</small>

Sets the maximal expand level relative from the current node.

Expanding is a expensive operation.
<br><br>

### **_searchIsActive**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">searching</span> <small>**reflects**</small>
<small>`boolean` default: **false**</small>

indicator for searching. Maybe you want style your item depending on this attribute
<br><br>

### **treeItemComponent**
</small>

If you want to use a custom component for the tree-item, set this attribute.
The default item component is **furo-tree-item**.
<br><br>

### **_treeItemTepmplate**
</small>


<br><br>

### **depth**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">depth</span>
</small>

Maximal depth for the tree. Default is infinite.
<br><br>

### **qp**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">qp</span>
</small>

Query param to watch. If you set this attribute, the node-selected event will only be fired on `ƒ-qp-in` or `ƒ-select-by-id`.
If you select an item the `qp-change-request` will be fired.
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

### **nobgonhead**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">no-bg-on-header</span>
</small>

disables the background color on focus, selected, ... on header node

Works only with `root-as-header` enabled
<br><br>

### **focused**

<span  style="border-width:2px; border-style: solid;border-color:  rgb(255, 182, 91);font-family:monospace; padding:2px 4px;">focused</span> <small>**reflects**</small>
</small>

indicates that the element is focused
<br><br>
## Events
{{% api "_furo-tree-events.md" %}}

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
{{% api "_furo-tree-methods.md" %}}


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

### **_resetSearch**
<small>**_resetSearch**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--reset-search</span>



<br><br>

### **_updateSearchmatchAttributesOnItems**
<small>**_updateSearchmatchAttributesOnItems**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--update-searchmatch-attributes-on-items</span>



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
<small>**bindData**(*treeNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-bind-data</span>

Binds a FieldNode with a tree signature.

A sample and usable signature can be found in ./specs/

- <small>treeNode </small>
<br><br>

### **_setTitle**
<small>**_setTitle**(*treeNode* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--set-title</span>



- <small>treeNode </small>
<br><br>

### **focusSelected**
<small>**focusSelected**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ-focus-selected</span>

Focuses the currently selected tree item.

The tree item will also scrollIntoViewIfNeeded() (on all platforms which support this method).

<br><br>

### **_init**
<small>**_init**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--init</span>



<br><br>

### **_initFocusAndSelectEvents**
<small>**_initFocusAndSelectEvents**() ⟹ `void`</small>

<small>`*`</small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--init-focus-and-select-events</span>



<br><br>

### **_buildFlatTree**
<small>**_buildFlatTree**(*tree* `` ) ⟹ `void`</small>

<small>`` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--build-flat-tree</span>



- <small>tree </small>
<br><br>

### **_parseTreeRecursive**
<small>**_parseTreeRecursive**(*tree* `` *level* `` *maxdepth* `` ) ⟹ `void`</small>

<small>`` `` `` </small> →
<span  style="border-width:2px 2px 2px 10px; border-style: solid;border-color:  rgb(76, 175, 80);font-family:monospace; padding:2px 4px;">ƒ--parse-tree-recursive</span>



- <small>tree </small>
- <small>level </small>
- <small>maxdepth </small>
<br><br>


















## Styling
{{% api "_furo-tree-styling.md" %}}

The following custom properties  available for styling:

Custom property | Description
----------------|-------------
`--surface` | background color <hr> <small>default: `white`</small> <small>fallback: `N/A`</small>
`--on-surface` | foreground color <hr> <small>default: `#333333`</small> <small>fallback: `N/A`</small>

{{% api "_furo-tree-footer.md" %}}
{{% api "_furo-tree-scripts.md" %}}
