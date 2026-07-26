/**
 * Element-specific spec for `FuroUi5TreeItem`.
 *
 * `FuroUi5TreeItem` extends `LitElement` and is the internal row of a
 * `furo-ui5-tree`. It has no `model` accessor, no `FatHandler` and no UI → model
 * value round-trip, so the binding-contract `[TEMPLATE]` blocks from
 * `FuroUi5TextInput.spec.ts` (and the `test-element` skill) do not apply. It
 * binds a single `tree.NavigationNode`, reflects its visible / selected /
 * focused / search-match state — all of which the host tree drives through the
 * open-models event bus — and emits a `tree-select` intent.
 *
 * The item reads its indentation and initial visibility from the `treeNodeView`
 * side-table, which is normally filled in by `FuroUi5Tree._buildFlatTree()`.
 * Since these tests bind items directly, they seed that side-table themselves
 * via the `bindItem()` helper below.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterEach, assert, chai, describe, it, test } from "vitest";

import { FuroUi5TreeItem, type TreeSearchRequest } from "./FuroUi5TreeItem";

import { type TreeNodeView, treeNodeView } from "@/elements/tree/tree-view-state";
import type { INavigationNode, NavigationNode } from "@/models/furoui5/NavigationNode";
import { RootNode } from "@/models/furoui5/RootNode";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

/** Wraps a literal node in a `RootNode` so `__parentNode` chains (and `getParentNode`) work. */
const makeNode = (literal: INavigationNode): NavigationNode => {
  const tree = new RootNode({ root: literal });
  const root = tree.root.value;
  assert.isOk(root, "the fixture must have a root node");
  return root;
};

/** A parent with one child, both reachable — needed for the `ancestor-visible` cascade. */
const makeParentChild = (): { parent: NavigationNode; child: NavigationNode } => {
  const parent = makeNode({ id: "parent", displayName: "parent", open: true, children: [{ id: "child", displayName: "child" }] });
  const child = parent.children.atT(0);
  assert.isOk(child, "the fixture must have a child node");
  return { parent, child };
};

const itemFixture = async (): Promise<FuroUi5TreeItem> => {
  const el: FuroUi5TreeItem = await fixture(html`<furo-ui5-tree-item></furo-ui5-tree-item>`);
  return el;
};

/** Seeds the view side-table the way `FuroUi5Tree` would, then binds the node. */
const bindItem = (item: FuroUi5TreeItem, node: NavigationNode, view: Partial<TreeNodeView> = {}): void => {
  treeNodeView.set(node, { depth: 0, flatIndex: 0, isRoot: false, rootAsHeader: false, visible: true, ...view });
  item.bindData(node);
};

/** Creates an item fixture with a seeded + bound node. */
const boundItem = async (literal: INavigationNode, view: Partial<TreeNodeView> = {}): Promise<{ item: FuroUi5TreeItem; node: NavigationNode }> => {
  const item = await itemFixture();
  const node = makeNode(literal);
  bindItem(item, node, view);
  await item.updateComplete;
  return { item, node };
};

const rowOf = (item: FuroUi5TreeItem): HTMLElement | null => item.shadowRoot?.querySelector<HTMLElement>(".row") ?? null;

const labelOf = (item: FuroUi5TreeItem): HTMLElement | null => item.shadowRoot?.querySelector<HTMLElement>(".label") ?? null;

/** Indentation depth taken from the `indentation-N` class on the item's row. */
const indentationOf = (item: FuroUi5TreeItem): number => Number(/indentation-(-?\d+)/.exec(rowOf(item)?.className ?? "")?.[1] ?? NaN);

/** Fires the custom event the host tree would dispatch on the node. */
const notify = (node: NavigationNode, type: string): void => {
  node.__dispatchEvent(new CustomEvent(type, { detail: node, bubbles: false }));
};

describe("FuroUi5TreeItem", () => {
  // ---------------------------------------------------------------------------
  describe("element identity & a11y [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-tree-item element", async () => {
      // keep this test on top, so you can recognize a wrong assignment
      const { item } = await boundItem({ id: "n", displayName: "node" });
      assert.equal(item.nodeName.toLowerCase(), "furo-ui5-tree-item");
    });

    it("should be ok", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" });
      assert.isOk(item);
      assert.instanceOf(item, FuroUi5TreeItem);
    });

    test("a11y", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node", icon: "folder" });
      await delay(100);
      await assert.isAccessible(item);
    });
  });

  // ---------------------------------------------------------------------------
  describe("unbound state [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("renders nothing without a bound node", async () => {
      const item = await itemFixture();
      await item.updateComplete;
      assert.isNull(rowOf(item));
    });

    it("exposes no fieldNode", async () => {
      const item = await itemFixture();
      assert.isUndefined(item.fieldNode);
    });

    it("setting fieldNode to undefined does not bind", async () => {
      const item = await itemFixture();
      item.fieldNode = undefined;
      await item.updateComplete;
      assert.isUndefined(item.fieldNode);
      assert.isNull(rowOf(item));
    });
  });

  // ---------------------------------------------------------------------------
  describe("binding & initial reflection [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("the fieldNode setter binds the node", async () => {
      const item = await itemFixture();
      const node = makeNode({ id: "n", displayName: "node" });
      treeNodeView.set(node, { depth: 0, flatIndex: 0, isRoot: false, rootAsHeader: false, visible: true });
      item.fieldNode = node;
      await item.updateComplete;
      assert.strictEqual(item.fieldNode, node);
      assert.isOk(rowOf(item));
    });

    it("renders the display name and the secondary text", async () => {
      const { item } = await boundItem({ id: "n", displayName: "package.json", secondaryText: "has issues" });
      const label = labelOf(item);
      assert.isOk(label);
      assert.include(label.textContent, "package.json");
      assert.include(label.textContent, "has issues");
    });

    it("takes the indentation from the view depth", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" }, { depth: 3 });
      assert.equal(indentationOf(item), 3);
    });

    it("renders the node icon", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node", icon: "folder" });
      assert.isFalse(item.noicon);
      assert.equal(item.shadowRoot?.querySelector("ui5-icon")?.getAttribute("name"), "folder");
    });

    it("falls back to the placeholder icon when the node has none", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" });
      assert.isTrue(item.noicon);
      assert.equal(item.shadowRoot?.querySelector("ui5-icon")?.getAttribute("name"), "border");
    });

    it("reflects hasError", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node", icon: "folder", hasError: true });
      assert.isTrue(item.haserror);
      assert.isTrue(item.hasAttribute("haserror"));
      assert.isTrue(item.shadowRoot?.querySelector("ui5-icon")?.hasAttribute("error"));
    });

    it("reflects isGroupLabel", async () => {
      const { item } = await boundItem({ id: "n", displayName: "Settings", isGroupLabel: true });
      assert.isTrue(item.isGroupLabel);
      assert.isTrue(item.hasAttribute("is-group-label"));
    });

    it("is hidden when the view marks it invisible", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" }, { visible: false });
      assert.isTrue(item.hidden);
    });

    it("is hidden when there is no view entry at all", async () => {
      const item = await itemFixture();
      item.bindData(makeNode({ id: "n", displayName: "node" }));
      await item.updateComplete;
      assert.isTrue(item.hidden);
    });

    it("a root node is never hidden", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" }, { isRoot: true, visible: false });
      assert.isFalse(item.hidden);
      assert.isFalse(item.hasAttribute("isheader"));
    });

    it("a root node rendered as header gets the isheader attribute", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" }, { isRoot: true, rootAsHeader: true, depth: -1 });
      assert.isTrue(item.hasAttribute("isheader"));
      assert.isFalse(item.hidden);
    });

    it("starts without selection, focus or search-match", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" });
      assert.isFalse(item.selected);
      assert.isFalse(item.focused);
      assert.isFalse(item.searchmatch);
      assert.isFalse(item.inedit);
    });
  });

  // ---------------------------------------------------------------------------
  describe("model-driven state [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("this-node-selected / tree-node-unselection-requested drive `selected`", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" });
      notify(node, "this-node-selected");
      await item.updateComplete;
      assert.isTrue(item.selected);
      assert.isTrue(item.hasAttribute("selected"));
      notify(node, "tree-node-unselection-requested");
      await item.updateComplete;
      assert.isFalse(item.selected);
    });

    it("this-node-focused / tree-node-blur-requested drive `focused`", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" });
      notify(node, "this-node-focused");
      await item.updateComplete;
      assert.isTrue(item.focused);
      assert.isTrue(item.hasAttribute("focused"));
      notify(node, "tree-node-blur-requested");
      await item.updateComplete;
      assert.isFalse(item.focused);
    });

    it("search-matched / search-didnt-match drive `searchmatch`", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" });
      notify(node, "search-matched");
      await item.updateComplete;
      assert.isTrue(item.searchmatch);
      assert.isTrue(item.hasAttribute("searchmatch"));
      notify(node, "search-didnt-match");
      await item.updateComplete;
      assert.isFalse(item.searchmatch);
    });

    it("ancestor-invisible hides the item", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" });
      notify(node, "ancestor-invisible");
      await item.updateComplete;
      assert.isTrue(item.hidden);
    });

    it("ancestor-visible shows the item when its parent is open", async () => {
      const item = await itemFixture();
      const { parent, child } = makeParentChild();
      bindItem(item, child, { depth: 1, visible: false });
      await item.updateComplete;
      assert.isTrue(item.hidden);

      parent.open.value = true;
      notify(child, "ancestor-visible");
      await item.updateComplete;
      assert.isFalse(item.hidden);
    });

    it("ancestor-visible keeps the item hidden while its parent is closed", async () => {
      const item = await itemFixture();
      const { parent, child } = makeParentChild();
      parent.open.value = false;
      bindItem(item, child, { depth: 1, visible: false });
      await item.updateComplete;

      notify(child, "ancestor-visible");
      await item.updateComplete;
      assert.isTrue(item.hidden);
    });

    it("updates haserror when the node value changes later", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node", icon: "folder" });
      assert.isFalse(item.haserror);
      node.hasError.value = true;
      await item.updateComplete;
      assert.isTrue(item.haserror);
      assert.isTrue(item.shadowRoot?.querySelector("ui5-icon")?.hasAttribute("error"));
    });

    it("re-renders the label when the display name changes", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "old" });
      node.displayName.value = "new";
      await item.updateComplete;
      assert.include(labelOf(item)?.textContent, "new");
    });
  });

  // ---------------------------------------------------------------------------
  describe("expand affordance [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("renders a bool-icon bound to `open` when the node has children", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node", children: [{ id: "c", displayName: "child" }] });
      const icon = item.shadowRoot?.querySelector("furo-ui5-bool-icon");
      assert.isOk(icon);
      assert.strictEqual((icon as HTMLElement & { model?: unknown }).model, node.open);
    });

    it("renders a spacer instead of a bool-icon for a childless node", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" });
      assert.isNull(item.shadowRoot?.querySelector("furo-ui5-bool-icon") ?? null);
    });

    it("broadcasts the visibility change to the children when `open` flips", async () => {
      const item = await itemFixture();
      const { parent, child } = makeParentChild();
      bindItem(item, parent, { isRoot: true });
      await item.updateComplete;

      const seen: string[] = [];
      child.__addCustomEventListener("ancestor-invisible", () => {
        seen.push("ancestor-invisible");
      });
      child.__addCustomEventListener("ancestor-visible", () => {
        seen.push("ancestor-visible");
      });

      parent.open.value = false;
      parent.open.value = true;
      assert.deepEqual(seen, ["ancestor-invisible", "ancestor-visible"]);
    });
  });

  // ---------------------------------------------------------------------------
  describe("interaction [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    /** Listens for `tree-select` on the item and returns the collected details. */
    const collectSelects = (item: FuroUi5TreeItem): { detail: NavigationNode; bubbles: boolean; composed: boolean }[] => {
      const seen: { detail: NavigationNode; bubbles: boolean; composed: boolean }[] = [];
      item.addEventListener("tree-select", event => {
        const custom = event as CustomEvent<NavigationNode>;
        seen.push({ detail: custom.detail, bubbles: custom.bubbles, composed: custom.composed });
      });
      return seen;
    };

    it("emits a bubbling, composed tree-select on a label click", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" });
      const seen = collectSelects(item);
      labelOf(item)?.click();
      assert.lengthOf(seen, 1);
      assert.strictEqual(seen[0].detail, node);
      assert.isTrue(seen[0].bubbles);
      assert.isTrue(seen[0].composed);
    });

    it("emits tree-select on an indentation click as well", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" });
      const seen = collectSelects(item);
      item.shadowRoot?.querySelector<HTMLElement>(".indentation")?.click();
      assert.lengthOf(seen, 1);
      assert.strictEqual(seen[0].detail, node);
    });

    it("emits tree-select on Enter and Space and prevents the default", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" });
      const seen = collectSelects(item);
      const label = labelOf(item);
      assert.isOk(label);

      const enter = new KeyboardEvent("keydown", { key: "Enter", bubbles: true, composed: true, cancelable: true });
      label.dispatchEvent(enter);
      const space = new KeyboardEvent("keydown", { key: " ", bubbles: true, composed: true, cancelable: true });
      label.dispatchEvent(space);

      assert.lengthOf(seen, 2);
      assert.isTrue(enter.defaultPrevented);
      assert.isTrue(space.defaultPrevented);
    });

    it("ignores other keys", async () => {
      const { item } = await boundItem({ id: "n", displayName: "node" });
      const seen = collectSelects(item);
      const event = new KeyboardEvent("keydown", { key: "a", bubbles: true, composed: true, cancelable: true });
      labelOf(item)?.dispatchEvent(event);
      assert.lengthOf(seen, 0);
      assert.isFalse(event.defaultPrevented);
    });

    it("toggles `open` on a double click", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node", children: [{ id: "c", displayName: "child" }] });
      assert.isFalse(node.open.value);
      rowOf(item)?.dispatchEvent(new MouseEvent("dblclick", { bubbles: true, composed: true }));
      assert.isTrue(node.open.value);
      rowOf(item)?.dispatchEvent(new MouseEvent("dblclick", { bubbles: true, composed: true }));
      assert.isFalse(node.open.value);
    });
  });

  // ---------------------------------------------------------------------------
  describe("search [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    const request = (term: string): TreeSearchRequest => ({ term, results: [] });

    /** The token index is built in a `setTimeout(…, 50)`. */
    const indexedItem = async (
      literal: INavigationNode,
      view: Partial<TreeNodeView> = {}
    ): Promise<{ item: FuroUi5TreeItem; node: NavigationNode }> => {
      const bound = await boundItem(literal, view);
      await delay(60);
      return bound;
    };

    it("matches a full word", async () => {
      const { item, node } = await indexedItem({ id: "pkg", displayName: "package.json" });
      const req = request("package");
      item.search(req);
      assert.deepEqual(req.results, [node]);
    });

    it("matches a substring of at least two characters", async () => {
      const { item, node } = await indexedItem({ id: "pkg", displayName: "package.json" });
      const req = request("acka");
      item.search(req);
      assert.deepEqual(req.results, [node]);
    });

    it("matches a single character against the first letter of a word", async () => {
      const { item, node } = await indexedItem({ id: "pkg", displayName: "package.json" });
      const req = request("p");
      item.search(req);
      assert.deepEqual(req.results, [node]);
    });

    it("searches the other string fields of the node too", async () => {
      const { item, node } = await indexedItem({ id: "n", displayName: "node", description: "quarterly report", keyWords: "finance" });
      const description = request("quarterly");
      item.search(description);
      assert.deepEqual(description.results, [node]);

      const keywords = request("finance");
      item.search(keywords);
      assert.deepEqual(keywords.results, [node]);
    });

    it("requires every space separated token to match", async () => {
      const { item, node } = await indexedItem({ id: "pkg", displayName: "package.json" });
      const both = request("package json");
      item.search(both);
      assert.deepEqual(both.results, [node]);

      const partial = request("package nope");
      item.search(partial);
      assert.deepEqual(partial.results, []);
    });

    it("does not match an unrelated term", async () => {
      const { item } = await indexedItem({ id: "pkg", displayName: "package.json" });
      const req = request("zzz");
      item.search(req);
      assert.deepEqual(req.results, []);
    });

    it("never matches while the item is hidden", async () => {
      const { item } = await indexedItem({ id: "pkg", displayName: "package.json" }, { visible: false });
      assert.isTrue(item.hidden);
      const req = request("package");
      item.search(req);
      assert.deepEqual(req.results, []);
    });

    it("ignores an empty term", async () => {
      const { item } = await indexedItem({ id: "pkg", displayName: "package.json" });
      const req = request("");
      item.search(req);
      assert.deepEqual(req.results, []);
    });

    it("does nothing when the item is unbound", async () => {
      const item = await itemFixture();
      const req = request("package");
      item.search(req);
      assert.deepEqual(req.results, []);
    });
  });

  // ---------------------------------------------------------------------------
  describe("rebinding [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("binding the same node again is a no-op", async () => {
      const { item, node } = await boundItem({ id: "n", displayName: "node" }, { depth: 2 });
      // a second bind would re-read a (meanwhile changed) view entry
      treeNodeView.set(node, { depth: 7, flatIndex: 0, isRoot: false, rootAsHeader: false, visible: true });
      item.bindData(node);
      await item.updateComplete;
      assert.equal(indentationOf(item), 2);
    });

    it("re-reads depth and flags when a different node is bound", async () => {
      const { item } = await boundItem({ id: "a", displayName: "a" }, { depth: 1 });
      const other = makeNode({ id: "b", displayName: "b", icon: "folder", hasError: true });
      bindItem(item, other, { depth: 4 });
      await item.updateComplete;
      assert.strictEqual(item.fieldNode, other);
      assert.equal(indentationOf(item), 4);
      assert.isTrue(item.haserror);
      assert.include(labelOf(item)?.textContent, "b");
    });

    it("still reacts to the previously bound node (known listener leak)", async () => {
      const { item, node } = await boundItem({ id: "a", displayName: "a" }, { depth: 1 });
      bindItem(item, makeNode({ id: "b", displayName: "b" }), { depth: 1 });
      await item.updateComplete;

      // `bindData` never removes the listeners of the previous node. This test pins the
      // current behaviour so that fixing the leak shows up as a deliberate change.
      notify(node, "this-node-selected");
      await item.updateComplete;
      assert.isTrue(item.selected);
    });
  });
});
