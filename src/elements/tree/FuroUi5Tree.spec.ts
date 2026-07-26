/**
 * Element-specific spec for `FuroUi5Tree`.
 *
 * `FuroUi5Tree` extends `LitElement` (not a UI5 component). It has no `model`
 * accessor, no `FatHandler`, no `ModelReaderWriter` and no UI → model value
 * round-trip, so the binding-contract `[TEMPLATE]` blocks from
 * `FuroUi5TextInput.spec.ts` (and the `test-element` skill) do not apply — the
 * same situation as `FuroUi5TreeTable`. What it does have is a flat rendering of
 * a recursive `tree.RootNode` model plus expand / collapse, focus, selection,
 * keyboard navigation and search driven through the open-models event bus.
 *
 * Note on `branch-*` / `leaf-*` events: `FuroUi5Tree.isBranch()` returns `true`
 * for a node *without* children (documented in the source as intentional legacy
 * semantics). The assertions below therefore expect `branch-focused` /
 * `branch-selected` on leaves and `leaf-focused` / `leaf-selected` on nodes that
 * have children. This pins the current behaviour; it is not a typo.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterEach, assert, chai, describe, it, test } from "vitest";

import { FuroUi5Tree } from "./FuroUi5Tree";
import type { FuroUi5TreeItem } from "./tree-item/FuroUi5TreeItem";

import type { NavigationNode } from "@/models/furoui5/NavigationNode";
import { RootNode } from "@/models/furoui5/RootNode";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

/**
 * A fresh model per test is mandatory: `treeNodeView` is a module-global WeakMap
 * keyed by node identity, so two trees bound to the same model instance would
 * overwrite each other's depth / visibility.
 *
 * ```
 * Project                      depth 0   visible
 *   src               (open)   depth 1   visible
 *     app.ts                   depth 2   visible
 *     utils                    depth 2   visible
 *       math.ts                depth 3   hidden (utils closed)
 *       string.ts              depth 3   hidden
 *   docs                       depth 1   visible
 *     README.md                depth 2   hidden (docs closed)
 *   package.json    (error)    depth 1   visible
 *   Settings   (group label)   depth 1   visible
 *     config.json              depth 1   hidden (Settings closed)
 * ```
 */
const makeTree = (): RootNode =>
  new RootNode({
    id: "demo-tree",
    displayName: "Project",
    root: {
      id: "root",
      displayName: "Project",
      secondaryText: "sample structure",
      icon: "folder",
      open: true,
      children: [
        {
          id: "src",
          displayName: "src",
          icon: "folder",
          open: true,
          children: [
            { id: "app", displayName: "app.ts", icon: "document" },
            {
              id: "utils",
              displayName: "utils",
              icon: "folder",
              children: [
                { id: "math", displayName: "math.ts", icon: "document" },
                { id: "str", displayName: "string.ts", icon: "document" },
              ],
            },
          ],
        },
        {
          id: "docs",
          displayName: "docs",
          icon: "folder",
          secondaryText: "markdown",
          children: [{ id: "readme", displayName: "README.md", icon: "document" }],
        },
        { id: "pkg", displayName: "package.json", icon: "document", secondaryText: "has issues", hasError: true },
        {
          id: "settings",
          displayName: "Settings",
          isGroupLabel: true,
          children: [{ id: "config", displayName: "config.json", icon: "document" }],
        },
      ],
    },
  });

/** Total number of nodes in `makeTree()` (root included). */
const NODE_COUNT = 11;

/** Labels of the nodes that are visible right after binding `makeTree()`. */
const INITIALLY_VISIBLE = ["Project", "src", "app.ts", "utils", "docs", "package.json", "Settings"];

const rootOf = (tree: RootNode): NavigationNode => {
  const root = tree.root.value;
  assert.isOk(root, "the fixture tree must have a root node");
  return root;
};

/** Depth-first lookup of a node by its `id`. */
const nodeById = (tree: RootNode, id: string): NavigationNode => {
  const walk = (node: NavigationNode): NavigationNode | undefined => {
    if (node.id.value === id) {
      return node;
    }
    let hit: NavigationNode | undefined;
    node.children.value.forEach(child => {
      hit ??= walk(child);
    });
    return hit;
  };
  const found = walk(rootOf(tree));
  assert.isOk(found, `node "${id}" must exist in the fixture tree`);
  return found;
};

const itemsOf = (el: FuroUi5Tree): FuroUi5TreeItem[] => [...(el.shadowRoot?.querySelectorAll<FuroUi5TreeItem>("furo-ui5-tree-item") ?? [])];

const visibleOf = (el: FuroUi5Tree): FuroUi5TreeItem[] => itemsOf(el).filter(item => !item.hidden);

const labelsOf = (items: FuroUi5TreeItem[]): string[] => items.map(item => item.fieldNode?.displayName.value ?? "");

const itemFor = (el: FuroUi5Tree, node: NavigationNode): FuroUi5TreeItem => {
  const item = itemsOf(el).find(candidate => candidate.fieldNode === node);
  assert.isOk(item, `no rendered item found for node "${node.id.value}"`);
  return item;
};

/** Indentation depth taken from the `indentation-N` class on the item's row. */
const indentationOf = (item: FuroUi5TreeItem): number => {
  const cls = item.shadowRoot?.querySelector(".row")?.className ?? "";
  return Number(/indentation-(-?\d+)/.exec(cls)?.[1] ?? NaN);
};

/** Awaits the tree's render *and* the render of every item it produced. */
const settle = async (el: FuroUi5Tree): Promise<void> => {
  await el.updateComplete;
  await Promise.all(itemsOf(el).map(item => item.updateComplete));
};

/** Configuration properties a test may set before binding. */
type TreeProps = Partial<Pick<FuroUi5Tree, "depth" | "expandDepth" | "headerText" | "hideRootNode" | "rootAsHeader" | "secondaryText">>;

/** Creates an (unbound) tree fixture with the given configuration applied. */
const treeFixture = async (props: TreeProps = {}): Promise<FuroUi5Tree> => {
  const el: FuroUi5Tree = await fixture(html`<furo-ui5-tree></furo-ui5-tree>`);
  Object.assign(el, props);
  return el;
};

/** Creates a tree fixture and binds a fresh model to it. */
const boundFixture = async (props: TreeProps = {}): Promise<{ el: FuroUi5Tree; tree: RootNode }> => {
  const el = await treeFixture(props);
  const tree = makeTree();
  el.bindData(tree);
  await settle(el);
  return { el, tree };
};

const press = (el: FuroUi5Tree, key: string, shiftKey = false): KeyboardEvent => {
  const event = new KeyboardEvent("keydown", { key, shiftKey, bubbles: true, composed: true, cancelable: true });
  el.dispatchEvent(event);
  return event;
};

/** Collects the `detail` of every occurrence of `type` on `el`. */
const collect = (el: FuroUi5Tree, type: string): NavigationNode[] => {
  const seen: NavigationNode[] = [];
  el.addEventListener(type, event => {
    seen.push((event as CustomEvent<NavigationNode>).detail);
  });
  return seen;
};

/**
 * Compares two node lists by identity. `assert.deepEqual` is unusable here: FieldNodes
 * hold parent back-references, so a structural comparison would recurse endlessly.
 */
const assertNodes = (actual: NavigationNode[], expected: NavigationNode[], msg = "node list"): void => {
  assert.deepEqual(
    actual.map(node => node.id.value),
    expected.map(node => node.id.value),
    msg
  );
  expected.forEach((node, index) => {
    assert.strictEqual(actual[index], node, `${msg}[${String(index)}]`);
  });
};

describe("FuroUi5Tree", () => {
  // ---------------------------------------------------------------------------
  describe("element identity & a11y [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-tree element", async () => {
      // keep this test on top, so you can recognize a wrong assignment
      const { el } = await boundFixture();
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-tree");
    });

    it("should be ok", async () => {
      const { el } = await boundFixture();
      assert.isOk(el);
      assert.instanceOf(el, FuroUi5Tree);
    });

    it("gets a tabindex so it can receive keyboard focus", async () => {
      const el = await treeFixture();
      assert.equal(el.getAttribute("tabindex"), "0");
    });

    it("keeps a pre-set tabindex", async () => {
      const el = await fixture<FuroUi5Tree>(html`<furo-ui5-tree tabindex="-1"></furo-ui5-tree>`);
      assert.equal(el.getAttribute("tabindex"), "-1");
    });

    test("a11y", async () => {
      const { el } = await boundFixture();
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ---------------------------------------------------------------------------
  describe("binding [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("renders one item per node of a bound RootNode", async () => {
      const { el } = await boundFixture();
      assert.lengthOf(itemsOf(el), NODE_COUNT);
    });

    it("accepts a bare NavigationNode as well", async () => {
      const el = await treeFixture();
      const tree = makeTree();
      el.bindData(rootOf(tree));
      await settle(el);
      assert.lengthOf(itemsOf(el), NODE_COUNT);
      assert.deepEqual(labelsOf(visibleOf(el)), INITIALLY_VISIBLE);
    });

    it("bindData(undefined) is a no-op", async () => {
      const el = await treeFixture();
      el.bindData(undefined);
      await settle(el);
      assert.lengthOf(itemsOf(el), 0);
    });

    it("bindData on a RootNode without a root node is a no-op", async () => {
      const el = await treeFixture();
      el.bindData(new RootNode({ id: "empty" }));
      await settle(el);
      assert.lengthOf(itemsOf(el), 0);
    });

    it("renders nothing before bindData", async () => {
      const el = await treeFixture();
      await settle(el);
      assert.lengthOf(itemsOf(el), 0);
    });
  });

  // ---------------------------------------------------------------------------
  describe("flat rendering & indentation [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the nodes flat, in depth-first pre-order", async () => {
      const { el } = await boundFixture();
      assert.deepEqual(labelsOf(itemsOf(el)), [
        "Project",
        "src",
        "app.ts",
        "utils",
        "math.ts",
        "string.ts",
        "docs",
        "README.md",
        "package.json",
        "Settings",
        "config.json",
      ]);
    });

    it("shows only the nodes whose ancestors are all open", async () => {
      const { el } = await boundFixture();
      assert.deepEqual(labelsOf(visibleOf(el)), INITIALLY_VISIBLE);
    });

    it("assigns the indentation from the node depth", async () => {
      const { el, tree } = await boundFixture();
      assert.equal(indentationOf(itemFor(el, rootOf(tree))), 0);
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "src"))), 1);
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "app"))), 2);
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "math"))), 3);
    });

    it("does not indent the children of a group label", async () => {
      const { el, tree } = await boundFixture();
      const settings = nodeById(tree, "settings");
      assert.isTrue(itemFor(el, settings).isGroupLabel);
      assert.equal(indentationOf(itemFor(el, settings)), 1);
      // config.json stays on the group label's own level
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "config"))), 1);
    });

    it("caps the rendered levels with the depth attribute", async () => {
      const { el } = await boundFixture({ depth: 1 });
      assert.deepEqual(labelsOf(itemsOf(el)), ["Project", "src", "docs", "package.json", "Settings"]);
    });
  });

  // ---------------------------------------------------------------------------
  describe("root display flags [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("shows the root row and forces it open by default", async () => {
      const { el, tree } = await boundFixture();
      const root = rootOf(tree);
      assert.isTrue(root.open.value);
      assert.isFalse(itemFor(el, root).hidden);
      assert.isFalse(itemFor(el, root).hasAttribute("isheader"));
    });

    it("hide-root-node hides the root row and lifts its children to depth 0", async () => {
      const { el, tree } = await boundFixture({ hideRootNode: true });
      assert.isTrue(itemFor(el, rootOf(tree)).hidden);
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "src"))), 0);
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "app"))), 1);
      assert.notInclude(labelsOf(visibleOf(el)), "Project");
    });

    it("root-as-header marks the root item as header and keeps it visible", async () => {
      const { el, tree } = await boundFixture({ rootAsHeader: true });
      const rootItem = itemFor(el, rootOf(tree));
      assert.isTrue(rootItem.hasAttribute("isheader"));
      assert.isFalse(rootItem.hidden);
      // the header row is lifted out of the indentation scale
      assert.equal(indentationOf(rootItem), -1);
      assert.equal(indentationOf(itemFor(el, nodeById(tree, "src"))), 0);
    });

    it("header-text and secondary-text are written into the model", async () => {
      const el = await treeFixture({ headerText: "Custom title", secondaryText: "Custom subtitle" });
      const tree = makeTree();
      el.bindData(tree);
      await settle(el);
      const root = rootOf(tree);
      assert.equal(root.displayName.value, "Custom title");
      assert.equal(root.secondaryText.value, "Custom subtitle");
    });

    it("keeps the model title when header-text is not set", async () => {
      const { tree } = await boundFixture();
      assert.equal(rootOf(tree).displayName.value, "Project");
    });
  });

  // ---------------------------------------------------------------------------
  describe("expand / collapse [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("hides the whole subtree when a node is closed", async () => {
      const { el, tree } = await boundFixture();
      nodeById(tree, "src").open.value = false;
      await settle(el);
      // src itself stays visible, its whole subtree disappears
      assert.deepEqual(labelsOf(visibleOf(el)), ["Project", "src", "docs", "package.json", "Settings"]);
    });

    it("restores the subtree when the node is opened again", async () => {
      const { el, tree } = await boundFixture();
      const src = nodeById(tree, "src");
      src.open.value = false;
      await settle(el);
      src.open.value = true;
      await settle(el);
      assert.deepEqual(labelsOf(visibleOf(el)), INITIALLY_VISIBLE);
    });

    it("keeps a closed grandchild hidden when its parent reopens", async () => {
      const { el, tree } = await boundFixture();
      const src = nodeById(tree, "src");
      src.open.value = false;
      await settle(el);
      src.open.value = true;
      await settle(el);
      // utils is still closed, so math.ts must stay hidden
      assert.isTrue(itemFor(el, nodeById(tree, "math")).hidden);
    });

    it("opens a node and reveals its children", async () => {
      const { el, tree } = await boundFixture();
      nodeById(tree, "docs").open.value = true;
      await settle(el);
      assert.include(labelsOf(visibleOf(el)), "README.md");
    });

    it("expandAll() opens the tree within expand-depth", async () => {
      const { el } = await boundFixture({ expandDepth: 9 });
      el.expandAll();
      await settle(el);
      assert.deepEqual(labelsOf(visibleOf(el)), labelsOf(itemsOf(el)));
    });

    it("collapseAll() leaves only the root visible", async () => {
      const { el } = await boundFixture();
      el.collapseAll();
      await settle(el);
      assert.deepEqual(labelsOf(visibleOf(el)), ["Project"]);
    });

    it("expandFocusedRecursive() respects expand-depth", async () => {
      const { el } = await boundFixture({ expandDepth: 0 });
      el.collapseAll();
      await settle(el);
      el.selectById("src");
      el.expandFocusedRecursive();
      await settle(el);
      // src (depth 1) opens, utils (depth 2) does not
      assert.include(labelsOf(visibleOf(el)), "utils");
      assert.notInclude(labelsOf(visibleOf(el)), "math.ts");
    });

    it("fires node-opened / node-closed", async () => {
      const { el, tree } = await boundFixture();
      const opened = collect(el, "node-opened");
      const closed = collect(el, "node-closed");
      const docs = nodeById(tree, "docs");
      docs.open.value = true;
      docs.open.value = false;
      assertNodes(opened, [docs]);
      assertNodes(closed, [docs]);
    });

    it("fires nodes-expanded / nodes-collapsed on the recursive calls", async () => {
      const { el, tree } = await boundFixture();
      const expanded = collect(el, "nodes-expanded");
      const collapsed = collect(el, "nodes-collapsed");
      el.expandAll();
      el.collapseAll();
      assertNodes(expanded, [rootOf(tree)]);
      assertNodes(collapsed, [rootOf(tree)]);
    });

    it("toggle() flips the selected node", async () => {
      const { el, tree } = await boundFixture();
      const docs = nodeById(tree, "docs");
      el.selectById("docs");
      // selecting opens the *ancestor path*, the selected node itself stays closed
      assert.isFalse(docs.open.value);
      el.toggle();
      assert.isTrue(docs.open.value);
      el.toggle();
      assert.isFalse(docs.open.value);
    });
  });

  // ---------------------------------------------------------------------------
  describe("focus [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("focuses the root right after binding", async () => {
      const el = await treeFixture();
      const focused = collect(el, "node-focused");
      const tree = makeTree();
      // the initial focus is dispatched during bindData, before the first render,
      // so the listener has to be attached beforehand
      el.bindData(tree);
      await settle(el);
      assertNodes(focused, [rootOf(tree)]);
    });

    it("focusFirst() focuses the first item", async () => {
      const { el, tree } = await boundFixture();
      el.focusNext();
      el.focusFirst();
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).focused);
    });

    it("focusNext() / focusPrevious() walk the visible items", async () => {
      const { el, tree } = await boundFixture();
      el.focusNext();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "src")).focused);
      el.focusPrevious();
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).focused);
    });

    it("focusNext() skips hidden nodes", async () => {
      const { el, tree } = await boundFixture();
      // Project -> src -> app.ts -> utils -> docs (README.md is hidden)
      el.focusNext();
      el.focusNext();
      el.focusNext();
      el.focusNext();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "docs")).focused);
    });

    it("focusLast() focuses the last visible item", async () => {
      const { el, tree } = await boundFixture();
      el.focusLast();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "settings")).focused);
    });

    it("focusParent() walks up the tree", async () => {
      const { el, tree } = await boundFixture();
      el.selectById("app");
      el.focusParent();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "src")).focused);
    });

    it("keeps exactly one item focused", async () => {
      const { el } = await boundFixture();
      el.focusNext();
      el.focusNext();
      await settle(el);
      assert.lengthOf(
        itemsOf(el).filter(item => item.focused),
        1
      );
    });

    it("focusSelected() returns the focus to the selection", async () => {
      const { el, tree } = await boundFixture();
      el.selectById("docs");
      el.focusFirst();
      el.focusSelected();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "docs")).focused);
    });

    it("fires branch-focused for a childless node (legacy naming)", async () => {
      const { el, tree } = await boundFixture();
      const branch = collect(el, "branch-focused");
      const leaf = collect(el, "leaf-focused");
      // package.json has no children -> `isBranch()` is true -> `branch-focused`
      el.selectById("pkg");
      assertNodes(branch, [nodeById(tree, "pkg")]);
      assertNodes(leaf, []);
    });

    it("fires leaf-focused for a node with children (legacy naming)", async () => {
      const { el, tree } = await boundFixture();
      const branch = collect(el, "branch-focused");
      const leaf = collect(el, "leaf-focused");
      el.selectById("docs");
      assertNodes(leaf, [nodeById(tree, "docs")]);
      assertNodes(branch, []);
    });

    it("does not fire focus events for a node without a display name", async () => {
      const el = await treeFixture();
      const focused = collect(el, "node-focused");
      el.bindData(new RootNode({ root: { id: "nameless" } }));
      await settle(el);
      assertNodes(focused, []);
    });

    it("reflects focusin / focusout on the host", async () => {
      const { el } = await boundFixture();
      assert.isFalse(el.focused);
      el.dispatchEvent(new FocusEvent("focusin", { bubbles: true, composed: true }));
      assert.isTrue(el.focused);
      el.dispatchEvent(new FocusEvent("focusout", { bubbles: true, composed: true }));
      assert.isFalse(el.focused);
    });
  });

  // ---------------------------------------------------------------------------
  describe("selection [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("selects the node carried by a bubbled tree-select", async () => {
      const { el, tree } = await boundFixture();
      const docs = nodeById(tree, "docs");
      itemFor(el, docs).dispatchEvent(new CustomEvent("tree-select", { detail: docs, bubbles: true, composed: true }));
      await settle(el);
      assert.isTrue(itemFor(el, docs).selected);
    });

    it("keeps exactly one item selected", async () => {
      const { el } = await boundFixture();
      el.selectById("docs");
      el.selectById("pkg");
      await settle(el);
      assert.lengthOf(
        itemsOf(el).filter(item => item.selected),
        1
      );
    });

    it("opens the whole ancestor path of the selected node", async () => {
      const { el, tree } = await boundFixture();
      el.selectById("math");
      await settle(el);
      assert.isTrue(nodeById(tree, "utils").open.value);
      assert.isTrue(nodeById(tree, "src").open.value);
      assert.include(labelsOf(visibleOf(el)), "math.ts");
    });

    it("fires branch-selected for a childless node and leaf-selected for a parent", async () => {
      const { el, tree } = await boundFixture();
      const branch = collect(el, "branch-selected");
      const leaf = collect(el, "leaf-selected");
      el.selectById("pkg");
      el.selectById("docs");
      assertNodes(branch, [nodeById(tree, "pkg")]);
      assertNodes(leaf, [nodeById(tree, "docs")]);
    });

    it("selectById() returns the node and fires node-selected", async () => {
      const { el, tree } = await boundFixture();
      const selected = collect(el, "node-selected");
      const result = el.selectById("utils");
      assert.strictEqual(result, nodeById(tree, "utils"));
      assertNodes(selected, [nodeById(tree, "utils")]);
    });

    it("selectById() returns false for an unknown id", async () => {
      const { el } = await boundFixture();
      const selected = collect(el, "node-selected");
      assert.isFalse(el.selectById("does-not-exist"));
      assertNodes(selected, []);
    });

    it("selectNext() / selectPrev() move the selection", async () => {
      const { el, tree } = await boundFixture();
      el.selectById("root");
      el.selectNext();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "src")).selected);
      el.selectPrev();
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).selected);
    });

    it("selectFocused() selects the focused node", async () => {
      const { el, tree } = await boundFixture();
      el.focusNext();
      el.selectFocused();
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "src")).selected);
    });
  });

  // ---------------------------------------------------------------------------
  describe("keyboard navigation [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("ArrowDown / ArrowUp move the focus", async () => {
      const { el, tree } = await boundFixture();
      press(el, "ArrowDown");
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "src")).focused);
      press(el, "ArrowUp");
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).focused);
    });

    it("Home / End jump to the first and last visible item", async () => {
      const { el, tree } = await boundFixture();
      press(el, "End");
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "settings")).focused);
      press(el, "Home");
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).focused);
    });

    it("ArrowRight opens a closed node and descends into an open one", async () => {
      const { el, tree } = await boundFixture();
      const docs = nodeById(tree, "docs");
      el.selectById("docs");
      press(el, "ArrowRight");
      await settle(el);
      assert.isTrue(docs.open.value);
      press(el, "ArrowRight");
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "readme")).focused);
    });

    it("ArrowLeft collapses an open node, then walks to the parent", async () => {
      const { el, tree } = await boundFixture();
      const src = nodeById(tree, "src");
      el.selectById("src");
      press(el, "ArrowLeft");
      await settle(el);
      assert.isFalse(src.open.value);
      press(el, "ArrowLeft");
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).focused);
    });

    it("Shift+ArrowRight expands recursively", async () => {
      const { el, tree } = await boundFixture({ expandDepth: 9 });
      el.collapseAll();
      await settle(el);
      el.selectById("src");
      press(el, "ArrowRight", true);
      await settle(el);
      assert.isTrue(nodeById(tree, "utils").open.value);
      assert.include(labelsOf(visibleOf(el)), "math.ts");
    });

    it("Enter selects the focused node and toggles it when already selected", async () => {
      const { el, tree } = await boundFixture();
      const docs = nodeById(tree, "docs");
      el.focusFirst();
      press(el, "ArrowDown");
      press(el, "ArrowDown");
      press(el, "ArrowDown");
      press(el, "ArrowDown");
      await settle(el);
      assert.isTrue(itemFor(el, docs).focused);
      press(el, "Enter");
      await settle(el);
      assert.isTrue(itemFor(el, docs).selected);
      const openState = docs.open.value;
      press(el, "Enter");
      assert.equal(docs.open.value, !openState);
    });

    it("Space behaves like Enter", async () => {
      const { el, tree } = await boundFixture();
      press(el, "ArrowDown");
      press(el, " ");
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "src")).selected);
    });

    it("prevents the default only for handled keys", async () => {
      const { el } = await boundFixture();
      assert.isTrue(press(el, "ArrowDown").defaultPrevented);
      assert.isFalse(press(el, "a").defaultPrevented);
    });

    it("triggerNavigation() is usable as public API", async () => {
      const { el, tree } = await boundFixture();
      el.triggerNavigation("End");
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "settings")).focused);
      el.triggerNavigation("unknown-key");
      await settle(el);
      assert.isTrue(itemFor(el, nodeById(tree, "settings")).focused);
    });
  });

  // ---------------------------------------------------------------------------
  describe("search [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    /** The items build their token index in a `setTimeout(…, 50)`. */
    const boundAndIndexed = async (props: TreeProps = {}): Promise<{ el: FuroUi5Tree; tree: RootNode }> => {
      const bound = await boundFixture(props);
      await delay(60);
      return bound;
    };

    it("returns the matching nodes and activates search mode", async () => {
      const { el, tree } = await boundAndIndexed();
      const hits = el.search("pack");
      await settle(el);
      assertNodes(hits, [nodeById(tree, "pkg")]);
      assert.isTrue(el.searchIsActive);
      assert.isTrue(el.hasAttribute("searching"));
    });

    it("marks the matching items and focuses the first hit", async () => {
      const { el, tree } = await boundAndIndexed();
      el.search("pack");
      await settle(el);
      const pkg = itemFor(el, nodeById(tree, "pkg"));
      assert.isTrue(pkg.searchmatch);
      assert.isTrue(pkg.focused);
      assert.lengthOf(
        itemsOf(el).filter(item => item.searchmatch),
        1
      );
    });

    it("requires every space separated token to match", async () => {
      const { el, tree } = await boundAndIndexed();
      assertNodes(el.search("pack json"), [nodeById(tree, "pkg")]);
      assertNodes(el.search("pack nope"), []);
    });

    it("matches a single letter token against the first letter of a word", async () => {
      const { el, tree } = await boundAndIndexed();
      assertNodes(el.search("pack p"), [nodeById(tree, "pkg")]);
    });

    it("never matches a hidden node", async () => {
      const { el, tree } = await boundAndIndexed();
      // README.md lives in the closed `docs` node
      assertNodes(el.search("read"), []);
      nodeById(tree, "docs").open.value = true;
      await settle(el);
      assertNodes(el.search("read"), [nodeById(tree, "readme")]);
    });

    it("resets instead of searching for a term of one character", async () => {
      const { el } = await boundAndIndexed();
      el.search("pack");
      assertNodes(el.search("p"), []);
      assert.isFalse(el.searchIsActive);
    });

    it("resetSearch() clears the mode and all search-match flags", async () => {
      const { el } = await boundAndIndexed();
      el.search("pack");
      await settle(el);
      el.resetSearch();
      await settle(el);
      assert.isFalse(el.searchIsActive);
      assert.isFalse(el.hasAttribute("searching"));
      assert.lengthOf(
        itemsOf(el).filter(item => item.searchmatch),
        0
      );
    });
  });

  // ---------------------------------------------------------------------------
  describe("structural mutation [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("addSubNode() appends to the selection and selects the new node", async () => {
      const { el, tree } = await boundFixture();
      el.selectById("docs");
      el.addSubNode({ id: "guide", displayName: "guide.md" });
      // the new node is selected in a setTimeout(…, 0)
      await delay(20);
      await settle(el);
      assert.lengthOf(itemsOf(el), NODE_COUNT + 1);
      assert.equal(nodeById(tree, "docs").children.length, 2);
      const guide = nodeById(tree, "guide");
      assert.isTrue(itemFor(el, guide).selected);
    });

    it("addSubNode() is a no-op without a selection", async () => {
      const { el } = await boundFixture();
      el.addSubNode({ id: "guide", displayName: "guide.md" });
      await delay(20);
      await settle(el);
      assert.lengthOf(itemsOf(el), NODE_COUNT);
    });

    it("deleteNode() removes the selected node and its subtree", async () => {
      const { el, tree } = await boundFixture();
      el.selectById("docs");
      el.deleteNode();
      await settle(el);
      assert.equal(rootOf(tree).children.length, 3);
      assert.notInclude(labelsOf(itemsOf(el)), "docs");
      assert.notInclude(labelsOf(itemsOf(el)), "README.md");
    });

    it("deleteNode() is a no-op without a selection", async () => {
      const { el } = await boundFixture();
      el.deleteNode();
      await settle(el);
      assert.lengthOf(itemsOf(el), NODE_COUNT);
    });

    it("rebuilds when the bound array changes from the outside", async () => {
      const { el, tree } = await boundFixture();
      rootOf(tree).children.push({ id: "extra", displayName: "extra.md" });
      await settle(el);
      assert.lengthOf(itemsOf(el), NODE_COUNT + 1);
      assert.include(labelsOf(visibleOf(el)), "extra.md");
    });
  });

  // ---------------------------------------------------------------------------
  describe("rebinding & lifecycle [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the new tree after rebinding", async () => {
      const { el } = await boundFixture();
      el.bindData(new RootNode({ root: { id: "b", displayName: "Other", children: [{ id: "b1", displayName: "only child" }] } }));
      await settle(el);
      assert.deepEqual(labelsOf(itemsOf(el)), ["Other", "only child"]);
    });

    it("stops reacting to the previous model after rebinding", async () => {
      const { el, tree } = await boundFixture();
      el.bindData(new RootNode({ root: { id: "b", displayName: "Other" } }));
      await settle(el);
      rootOf(tree).children.push({ id: "extra", displayName: "extra.md" });
      await settle(el);
      assert.deepEqual(labelsOf(itemsOf(el)), ["Other"]);
    });

    it("does not navigate anymore after the element is removed", async () => {
      const { el, tree } = await boundFixture();
      el.focusFirst();
      await settle(el);
      el.remove();
      press(el, "ArrowDown");
      await settle(el);
      assert.isTrue(itemFor(el, rootOf(tree)).focused);
    });
  });
});
