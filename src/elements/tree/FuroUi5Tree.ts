import "./tree-item";

import { css, html, LitElement } from "lit";
import { property, queryAll } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

import type { FuroUi5TreeItem, TreeSearchRequest } from "./tree-item/FuroUi5TreeItem";
import { getParentNode, isNodeVisible, treeNodeView } from "./tree-view-state";

import type { INavigationNode, NavigationNode } from "@/models/furoui5/NavigationNode";
import { RootNode } from "@/models/furoui5/RootNode";

/**
 * `furo-ui5-tree`
 * Renders a recursive navigation tree from a `tree.Tree` or `tree.NavigationNode` model.
 *
 * Each node is rendered as a `furo-ui5-tree-item`. Expand / collapse, selection and focus
 * are propagated through the open-models event tree (`__broadcastEvent` / `__dispatchEvent`),
 * mirroring the behavior of the original `@furo/data` based implementation.
 *
 * ## Data signature
 *
 * ```yaml
 * - type: 'tree.Tree #Navigation tree type with recursive navigation nodes'
 *   fields:
 *     root: 'tree.NavigationNode:1 #Root node of the tree'
 * ```
 *
 * @eventref node-focused - NavigationNode - "@/models/index.js"
 * @event {NavigationNode} node-focused - Fired when a node receives the focus.
 * @fires {NavigationNode} branch-focused - Fired when a node with children receives the focus.
 * @fires {NavigationNode} leaf-focused - Fired when a leaf receives the focus.
 * @fires {NavigationNode} node-selected - Fired when a node gets selected (not fired in `qp` mode).
 * @fires {NavigationNode} branch-selected - Fired when a node with children gets selected.
 * @fires {NavigationNode} leaf-selected - Fired when a leaf gets selected.
 * @fires {NavigationNode} node-opened - Fired when a node is opened.
 * @fires {NavigationNode} node-closed - Fired when a node is closed.
 * @fires {NavigationNode} nodes-expanded - Fired when nodes are expanded recursively.
 * @fires {NavigationNode} nodes-collapsed - Fired when nodes are collapsed recursively.
 *
 * @cssprop {N/A} [--tree-indentation-1=16px] - tree indention level 1
 * @cssprop {N/A} [--tree-indentation-2=32px] - tree indention level 2
 *
 * @summary Hierarchical tree view with expandable/collapsible nodes.
 * @keywords tree, hierarchy, nodes, expandable, collapsible, nested
 * @category List
 * @usecase Use for displaying hierarchical data structures with expand/collapse.
 * @related furo-ui5-tree-item
 * @tagname furo-ui5-tree
 */
export class FuroUi5Tree extends LitElement {
  /**
   * Maximal depth for the tree. `0` (default) means infinite.
   */
  @property({ type: Number })
  public depth = 0;

  /**
   * Maximal expand level relative to the current node when expanding recursively.
   * @attr {number} expand-depth
   */
  @property({ type: Number, attribute: "expand-depth" })
  public expandDepth = 2;

  /**
   * Render the root node as a header section.
   * @attr {boolean} root-as-header
   */
  @property({ type: Boolean, attribute: "root-as-header" })
  public rootAsHeader = false;

  /**
   * Hide the root node.
   * @attr {boolean} hide-root-node
   */
  @property({ type: Boolean, attribute: "hide-root-node" })
  public hideRootNode = false;

  /**
   * Override the display name of the root object.
   * @attr {string} header-text
   */
  @property({ type: String, attribute: "header-text" })
  public headerText = "";

  /**
   * Override the description of the root object.
   * @attr {string} secondary-text
   */
  @property({ type: String, attribute: "secondary-text" })
  public secondaryText = "";

  /**
   * Indicates an active search. Use it to style items depending on this attribute.
   * @attr {boolean} searching
   */
  @property({ type: Boolean, attribute: "searching", reflect: true })
  public _searchIsActive = false;

  /**
   * Indicates that the element is focused.
   */
  @property({ type: Boolean, reflect: true })
  public focused = false;

  private _rootNode: NavigationNode | undefined;

  private _flatTree: NavigationNode[] = [];

  private _focusedField: NavigationNode | undefined;

  private _selectedField: NavigationNode | undefined;

  private _searchTerm = "";

  private _foundSearchItems: NavigationNode[] = [];

  private readonly _wiredOpenNodes = new WeakSet<NavigationNode>();

  @queryAll("furo-ui5-tree-item")
  private _treeItems!: NodeListOf<FuroUi5TreeItem>;

  override connectedCallback() {
    super.connectedCallback();
    if (!this.hasAttribute("tabindex")) {
      this.setAttribute("tabindex", "0");
    }
    this.addEventListener("tree-select", this._onItemSelect);
    this.addEventListener("focusin", this._onFocusIn);
    this.addEventListener("focusout", this._onFocusOut);
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("tree-select", this._onItemSelect);
    this.removeEventListener("focusin", this._onFocusIn);
    this.removeEventListener("focusout", this._onFocusOut);
  }

  private readonly _onItemSelect = (e: Event): void => {
    this.selectNode((e as CustomEvent<NavigationNode>).detail);
  };

  private readonly _onFocusIn = (): void => {
    this.focused = true;
  };

  private readonly _onFocusOut = (): void => {
    this.focused = false;
  };

  private readonly _onTreeChanged = (): void => {
    if (this._rootNode !== undefined) {
      this._setTitle(this._rootNode);
      this._init();
    }
  };

  /**
   * Binds a `tree.Tree` or `tree.NavigationNode` FieldNode.
   * @paramref treeNode - Tree - "@/models/index.js"
   * @paramref treeNode - NavigationNode - "@/models/index.js"
   * @param treeNode
   */
  public bindData(treeNode: RootNode | NavigationNode | undefined): void {
    if (treeNode === undefined) {
      return;
    }
    const root = treeNode instanceof RootNode ? treeNode.root.value : treeNode;
    if (root === undefined) {
      return;
    }

    if (this._rootNode !== undefined) {
      this._rootNode.children.__removeEventListener("array-changed", this._onTreeChanged);
    }
    this._rootNode = root;
    this._rootNode.children.__addEventListener("array-changed", this._onTreeChanged);

    this._setTitle(this._rootNode);
    this._init();
  }

  private _setTitle(node: NavigationNode): void {
    if (this.headerText) {
      node.displayName.value = this.headerText;
    }
    if (this.secondaryText) {
      node.secondaryText.value = this.secondaryText;
    }
  }

  /**
   * Builds the flat tree and (re)renders.
   * @private
   */
  private _init(): void {
    if (this._rootNode === undefined) {
      return;
    }
    this._buildFlatTree(this._rootNode);
    this.requestUpdate();

    // initial visibility broadcast from the root's children
    this._rootNode.children.__broadcastEvent(new CustomEvent("ancestor-visible", { detail: this._rootNode }));

    if (this._focusedField === undefined && this._flatTree.length > 0) {
      this._focusedField = this._flatTree[0];
      this.focusNode(this._focusedField);
    }

  }

  private _buildFlatTree(root: NavigationNode): void {
    this._flatTree = [root];
    let startLevel = 0;
    let isRoot = false;
    if (this.hideRootNode) {
      startLevel = -1;
    } else {
      isRoot = true;
      root.open.value = true;
    }
    let rootAsHeader = false;
    if (this.rootAsHeader) {
      rootAsHeader = true;
      startLevel = -1;
    }
    treeNodeView.set(root, { depth: startLevel, flatIndex: 0, isRoot, rootAsHeader, visible: false });

    this._parseTreeRecursive(root, startLevel, this.depth);

    // wire open / close notifications for node-opened / node-closed events (once per node)
    this._flatTree.forEach(node => {
      if (!this._wiredOpenNodes.has(node)) {
        this._wiredOpenNodes.add(node);
        node.open.__addEventListener("this-field-value-changed", () => {
          this._fireOpenClose(node);
        });
      }
    });

    // always open the root node
    root.open.value = true;

    // compute initial visibility now that the flat tree + open states are known
    this._flatTree.forEach(node => {
      const view = treeNodeView.get(node);
      if (view !== undefined) {
        view.visible = isNodeVisible(node, root, this.hideRootNode);
      }
    });
  }

  private _parseTreeRecursive(node: NavigationNode, level: number, maxdepth: number): void {
    if (maxdepth > 0 && !(level < maxdepth)) {
      return;
    }
    let childLevel = level;
    // do not indent on group labels
    if (!node.isGroupLabel.value) {
      childLevel += 1;
    }
    node.children.value.forEach(child => {
      treeNodeView.set(child, { depth: childLevel, flatIndex: this._flatTree.length, isRoot: false, rootAsHeader: false, visible: false });
      this._flatTree.push(child);
      if (child.children.length > 0) {
        this._parseTreeRecursive(child, childLevel, maxdepth);
      }
    });
  }

  private static isBranch(node: NavigationNode): boolean {
    // legacy semantics: a node without children is a "branch"
    return node.children.length === 0;
  }

  private _isVisible(node: NavigationNode): boolean {
    return this._rootNode !== undefined && isNodeVisible(node, this._rootNode, this.hideRootNode);
  }

  private getNextVisibleElement(node: NavigationNode): NavigationNode | undefined {
    const idx = this._flatTree.indexOf(node);
    for (let i = idx + 1; i < this._flatTree.length; i += 1) {
      if (this._isVisible(this._flatTree[i])) {
        return this._flatTree[i];
      }
    }
    return undefined;
  }

  private getPrevElement(node: NavigationNode): NavigationNode | undefined {
    const idx = this._flatTree.indexOf(node);
    for (let i = idx - 1; i >= 0; i -= 1) {
      if (this._isVisible(this._flatTree[i])) {
        return this._flatTree[i];
      }
    }
    return undefined;
  }

  private _fire(name: string, detail: unknown, bubbles = true, composed = true): void {
    this.dispatchEvent(new CustomEvent(name, { detail, bubbles, composed }));
  }

  private _fireOpenClose(node: NavigationNode): void {
    this._fire(node.open.value ? "node-opened" : "node-closed", node, false, true);
  }

  private focusNode(node: NavigationNode): void {
    if (this._rootNode === undefined) {
      return;
    }
    this._rootNode.__broadcastEvent(new CustomEvent("tree-node-blur-requested"));
    this._focusedField = node;
    node.__dispatchEvent(new CustomEvent("this-node-focused", { detail: node, bubbles: false }));

    if (node.displayName.value) {
      this._fire("node-focused", node);
      this._fire(FuroUi5Tree.isBranch(node) ? "branch-focused" : "leaf-focused", node);
    }
  }

  private selectNode(node: NavigationNode): void {
    if (this._rootNode === undefined) {
      return;
    }
    this.focusNode(node);
    this._rootNode.__broadcastEvent(new CustomEvent("tree-node-unselection-requested"));
    this._selectedField = node;
    node.__dispatchEvent(new CustomEvent("this-node-selected", { detail: node, bubbles: false }));

    // open the path up to the selected node
    let parent = getParentNode(node);
    while (parent !== undefined) {
      parent.open.value = true;
      parent = getParentNode(parent);
    }

    this._fire(FuroUi5Tree.isBranch(node) ? "branch-selected" : "leaf-selected", node);
  }

  private static toggleNode(node: NavigationNode): void {
    node.open.value = !node.open.value;
  }

  private _walkSubtree(node: NavigationNode, fn: (n: NavigationNode) => void): void {
    fn(node);
    node.children.value.forEach(child => {
      this._walkSubtree(child, fn);
    });
  }

  private expandRecursive(node: NavigationNode): void {
    const baseDepth = treeNodeView.get(node)?.depth ?? 0;
    this._walkSubtree(node, sub => {
      const d = treeNodeView.get(sub)?.depth ?? 0;
      if (d <= baseDepth + this.expandDepth) {
        sub.open.value = true;
      }
    });
    this._fire("nodes-expanded", node, false, true);
  }

  private collapseRecursive(node: NavigationNode): void {
    this._walkSubtree(node, sub => {
      sub.open.value = false;
    });
    this._fire("nodes-collapsed", node, false, true);
  }

  // ---------------------------------------------------------------------------
  // public navigation / selection API (driven e.g. by a furo-navigation-pad)
  // ---------------------------------------------------------------------------

  /**
   * Collapses the focused node. If it is already closed, the parent is focused.
   */
  public collapseFocused(): void {
    if (this._focusedField === undefined) {
      return;
    }
    if (!FuroUi5Tree.isBranch(this._focusedField) && this._focusedField.open.value) {
      FuroUi5Tree.toggleNode(this._focusedField);
    } else {
      this.focusParent();
    }
  }

  /**
   * Expands the focused node. If it is already open, the next node is focused.
   */
  public expandFocused(): void {
    if (this._focusedField === undefined) {
      return;
    }
    if (!FuroUi5Tree.isBranch(this._focusedField) && !this._focusedField.open.value) {
      FuroUi5Tree.toggleNode(this._focusedField);
    } else {
      this.focusNext();
    }
  }

  /** Expands the focused node recursively. */
  public expandFocusedRecursive(): void {
    if (this._focusedField !== undefined) {
      this.expandRecursive(this._focusedField);
    }
  }

  /** Collapses the focused node recursively. */
  public collapseFocusedRecursive(): void {
    if (this._focusedField !== undefined) {
      this.collapseRecursive(this._focusedField);
    }
  }

  /** Selects the focused node. */
  public selectFocused(): void {
    if (this._focusedField !== undefined) {
      this.selectNode(this._focusedField);
    }
  }

  /** Focuses the parent of the focused node. */
  public focusParent(): void {
    if (this._focusedField === undefined) {
      return;
    }
    const parent = getParentNode(this._focusedField);
    if (parent !== undefined) {
      this.focusNode(parent);
    }
  }

  /** Focuses the previous visible node. */
  public focusPrevious(): void {
    if (this._focusedField === undefined) {
      return;
    }
    let prev: NavigationNode | undefined;
    if (this._searchIsActive) {
      const focusedIndex = treeNodeView.get(this._focusedField)?.flatIndex ?? 0;
      for (let i = 0; i < this._foundSearchItems.length; i += 1) {
        if ((treeNodeView.get(this._foundSearchItems[i])?.flatIndex ?? 0) >= focusedIndex) {
          prev = this._foundSearchItems[i - 1];
          break;
        }
      }
      if (prev === undefined && this._foundSearchItems.length > 0) {
        prev = this._foundSearchItems[this._foundSearchItems.length - 1];
      }
    } else {
      prev = this.getPrevElement(this._focusedField);
    }
    if (prev !== undefined) {
      this.focusNode(prev);
    }
  }

  /** Focuses the next visible node. */
  public focusNext(): void {
    if (this._focusedField === undefined) {
      return;
    }
    let next: NavigationNode | undefined;
    if (this._searchIsActive) {
      const focusedIndex = treeNodeView.get(this._focusedField)?.flatIndex ?? 0;
      for (let i = this._foundSearchItems.length - 1; i >= 0; i -= 1) {
        if ((treeNodeView.get(this._foundSearchItems[i])?.flatIndex ?? 0) <= focusedIndex) {
          next = this._foundSearchItems[i + 1];
          break;
        }
      }
      if (next === undefined && this._foundSearchItems.length > 0) {
        [next] = this._foundSearchItems;
      }
    } else {
      next = this.getNextVisibleElement(this._focusedField);
    }
    if (next !== undefined) {
      this.focusNode(next);
    }
  }

  /** Focuses the first node. */
  public focusFirst(): void {
    if (this._flatTree.length > 0) {
      this.focusNode(this._flatTree[0]);
    }
  }

  /** Focuses the last visible node. */
  public focusLast(): void {
    const visible = this._flatTree.filter(node => this._isVisible(node));
    if (visible.length > 0) {
      this.focusNode(visible[visible.length - 1]);
    }
  }

  /** Focuses the currently selected node. */
  public focusSelected(): void {
    if (this._selectedField !== undefined) {
      this.focusNode(this._selectedField);
    }
  }

  /** Selects the previous visible node. */
  public selectPrev(): void {
    this._focusedField = this._selectedField ?? this._focusedField;
    this.focusPrevious();
    if (this._focusedField !== undefined) {
      this.selectNode(this._focusedField);
    }
  }

  /** Selects the next visible node. */
  public selectNext(): void {
    this._focusedField = this._selectedField ?? this._focusedField;
    this.focusNext();
    if (this._focusedField !== undefined) {
      this.selectNode(this._focusedField);
    }
  }

  /** Expands the currently selected node recursively. */
  public expandNodeRecursive(): void {
    if (this._selectedField !== undefined) {
      this.expandRecursive(this._selectedField);
    }
  }

  /** Collapses the currently selected node recursively. */
  public collapseNodeRecursive(): void {
    if (this._selectedField !== undefined) {
      this.collapseRecursive(this._selectedField);
    }
  }

  /** Expands the whole tree (from the root). */
  public expandAll(): void {
    if (this._flatTree.length > 0) {
      this.expandRecursive(this._flatTree[0]);
    }
  }

  /** Collapses the whole tree (from the root). */
  public collapseAll(): void {
    if (this._flatTree.length > 0) {
      this.collapseRecursive(this._flatTree[0]);
    }
  }

  /** Toggles the currently selected node. */
  public toggle(): void {
    if (this._selectedField !== undefined) {
      FuroUi5Tree.toggleNode(this._selectedField);
    }
  }

  /** Adds a sub node to the currently selected node and selects it. */
  public addSubNode(rawNode: INavigationNode): void {
    if (this._selectedField === undefined) {
      return;
    }
    const newNode = this._selectedField.children.add(rawNode);
    this._init();
    setTimeout(() => {
      this.selectNode(newNode);
    }, 0);
  }

  /** Deletes the currently selected node. */
  public deleteNode(): void {
    if (this._selectedField === undefined) {
      return;
    }
    this._selectedField.__meta.deleteArrayNode?.();
    this.selectPrev();
    this._init();
  }

  /**
   * Dispatches a keyboard navigation by key name. Intended to be wired to an external
   * navigation pad.
   */
  public triggerNavigation(key: string): void {
    switch (key) {
      case "Enter":
        if (this._focusedField !== undefined) {
          if (this._focusedField === this._selectedField) {
            FuroUi5Tree.toggleNode(this._focusedField);
          } else {
            this.selectNode(this._focusedField);
          }
        }
        break;
      case "ArrowDown":
        this.focusNext();
        break;
      case "ArrowUp":
        this.focusPrevious();
        break;
      case "PageDown":
        for (let i = 0; i < 10; i += 1) {
          this.focusNext();
        }
        break;
      case "PageUp":
        for (let i = 0; i < 10; i += 1) {
          this.focusPrevious();
        }
        break;
      case "End":
        this.focusLast();
        break;
      case "Home":
        this.focusFirst();
        break;
      case "ArrowLeft":
        this.collapseFocused();
        break;
      case "ArrowRight":
        this.expandFocused();
        break;
      default:
    }
  }

  // ---------------------------------------------------------------------------
  // search
  // ---------------------------------------------------------------------------

  /**
   * Searches the visible nodes. Returns the matching nodes.
   */
  public search(term: string): NavigationNode[] {
    if (term.length > 1) {
      this._searchTerm = term;
      this.searchOpenTree();
    } else {
      this.resetSearch();
    }
    return this._foundSearchItems;
  }

  private searchOpenTree(): void {
    this._searchIsActive = true;
    const request: TreeSearchRequest = { term: this._searchTerm, results: [] };
    this._foundSearchItems = request.results;
    this._treeItems.forEach(item => {
      item.search(request);
    });

    if (request.results.length > 0) {
      this.focusNode(request.results[0]);
    }
    this._updateSearchmatchAttributesOnItems();
    this.requestUpdate();
  }

  /** Disables search mode and clears the term. */
  public resetSearch(): void {
    this._searchIsActive = false;
    this._searchTerm = "";
    this._foundSearchItems = [];
    this._updateSearchmatchAttributesOnItems();
  }

  private _updateSearchmatchAttributesOnItems(): void {
    if (this._rootNode === undefined) {
      return;
    }
    this._rootNode.__broadcastEvent(new CustomEvent("search-didnt-match", { detail: this._rootNode }));
    this._foundSearchItems.forEach(node => {
      node.__dispatchEvent(new CustomEvent("search-matched", { detail: node, bubbles: false }));
    });
  }

  /**
   * Selects a node by its id. Returns the node, or `false` when not found.
   */
  public selectById(nodeID: string): NavigationNode | false {
    for (let i = this._flatTree.length - 1; i >= 0; i -= 1) {
      const node = this._flatTree[i];
      if (node.id.value === nodeID) {
        this.selectNode(node);
        this._focusedField = this._selectedField ?? this._focusedField;
          this._fire("node-selected", this._selectedField);
        return node;
      }
    }
    return false;
  }

  static override styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100%;
      outline: none;
      position: relative;
      color: var(--sapTextColor, #32363a);
      font-size: var(--sapFontSize);
      font-family: var(--sapFontFamily), sans-serif;
    }

    :host([hidden]) {
      display: none;
    }

    .tablewrapper {
      overflow: auto;
    }

    td {
      padding: 0;
    }

    table {
      border-spacing: 0;
      min-width: 100%;
      padding: 0.25rem 1rem;
      box-sizing: border-box;
    }

    tr:first-child *[is-group-label] {
      border-top: none;
    }

    td > furo-ui5-tree-item:hover,
    :host([focused]) td > furo-ui5-tree-item[focused] {
      background: var(--sapList_Hover_Background);
    }

    :host([focused]) td > furo-ui5-tree-item[focused] {
      background: var(--sapList_Hover_SelectionBackground);
    }

    td > furo-ui5-tree-item[selected],
    :host(:not([focused])) td > furo-ui5-tree-item[selected] {
      background: var(--sapList_SelectionBackgroundColor);
    }

    :host([focused]) td > furo-ui5-tree-item[selected] {
      background: var(--sapList_Hover_SelectionBackground);
    }

    td:hover > furo-ui5-tree-item[selected][focused] {
      background: var(--sapList_Hover_SelectionBackground);
    }

    :host([focused]) td > furo-ui5-tree-item[selected][focused] {
      background: var(--sapList_Hover_SelectionBackground);
    }

    :host([root-as-header]) td furo-ui5-tree-item[selected][isheader],
    :host([root-as-header]) td furo-ui5-tree-item[selected][focused][isheader],
    :host([root-as-header]) td furo-ui5-tree-item[focused][isheader] {
      background-color: unset;
    }
  `;

  override render() {
    // language=HTML
    return html`
      <div class="tablewrapper">
        <table>
          ${repeat(
            this._flatTree,
            node => node,
            node => html`
              <tr>
                <td><furo-ui5-tree-item .fieldNode="${node}"></furo-ui5-tree-item></td>
              </tr>
            `
          )}
        </table>
      </div>
    `;
  }
}
