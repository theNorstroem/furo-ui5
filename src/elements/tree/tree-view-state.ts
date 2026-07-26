import type { NavigationNode } from "@/models/furoui5/NavigationNode";

/**
 * Per-node view metadata for the rendered tree.
 *
 * The legacy `furo-ui5-tree.js` stored these values directly on the (old `@furo/data`)
 * FieldNode instances (`node.depth`, `node._isRoot`, `node.__flatTreeIndex`, …). The
 * open-models nodes are strictly typed, so we keep the view metadata in this side-table
 * instead of monkey-patching the model. Both `FuroUi5Tree` (writer) and `FuroUi5TreeItem`
 * (reader) share it.
 */
export interface TreeNodeView {
  /** Indentation depth of the node (root is 0, or -1 when hidden / used as header). */
  depth: number;
  /** Position of the node in the flat tree array. */
  flatIndex: number;
  /** `true` for the root node of the bound tree. */
  isRoot: boolean;
  /** `true` when the root is rendered as a header (`root-as-header`). */
  rootAsHeader: boolean;
  /** Initial visibility of the node (computed from ancestor open-state + root flags). */
  visible: boolean;
}

/**
 * Side-table holding the {@link TreeNodeView} for every node of the currently bound tree.
 */
export const treeNodeView = new WeakMap<NavigationNode, TreeNodeView>();

/**
 * Returns the parent navigation node of `node`, skipping the intermediate `children`
 * ARRAY node (`node.__parentNode` is the ARRAY, its `__parentNode` is the real parent).
 */
export const getParentNode = (node: NavigationNode): NavigationNode | undefined => node.__parentNode?.__parentNode as NavigationNode | undefined;

/**
 * A node is visible when every ancestor up to (and including) the root is open.
 *
 * @param node - the node to test
 * @param rootNode - the root node of the bound tree
 * @param hideRootNode - whether the root row itself is hidden
 */
export const isNodeVisible = (node: NavigationNode, rootNode: NavigationNode, hideRootNode: boolean): boolean => {
  if (node === rootNode) {
    return !hideRootNode;
  }
  let parent = getParentNode(node);
  while (parent !== undefined) {
    if (!parent.open.value) {
      return false;
    }
    if (parent === rootNode) {
      return true;
    }
    parent = getParentNode(parent);
  }
  return true;
};
