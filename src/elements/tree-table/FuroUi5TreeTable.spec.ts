/**
 * Element-specific spec for `FuroUi5TreeTable`.
 *
 * `FuroUi5TreeTable` extends `LitElement` (not a UI5 component) and is purely
 * presentational — it has no `bindData()`, no model, and no FAT/value-state
 * handling, so the binding-contract `[TEMPLATE]` blocks (and the `test-element`
 * skill) do not apply. It styles and drives a consumer's light-DOM `<table>`:
 * builds the tree from `aria-level`, injects expand/collapse icons, manages
 * focus / selection, and emits `row-click` / `selection-change` /
 * `node-focused` / `node-expanded` / `node-collapsed` events.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5TreeTable } from "./FuroUi5TreeTable";
import { TreeTableMode } from "./TreeTableMode";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

// A two-level tree: one parent ("Root", level 1) with a single child ("Child", level 2).
const parentChildTree = html`
  <furo-ui5-tree-table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr id="root" aria-level="1">
          <td>Root</td>
        </tr>
        <tr id="child" aria-level="2">
          <td>Child</td>
        </tr>
      </tbody>
    </table>
  </furo-ui5-tree-table>
`;

// A flat tree of three visible level-1 rows (all leaves, none hidden).
const flatTree = html`
  <furo-ui5-tree-table>
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr id="a" aria-level="1">
          <td>A</td>
        </tr>
        <tr id="b" aria-level="1">
          <td>B</td>
        </tr>
        <tr id="c" aria-level="1">
          <td>C</td>
        </tr>
      </tbody>
    </table>
  </furo-ui5-tree-table>
`;

describe("FuroUi5TreeTable", () => {
  // ───────────────────────────────────────────────────────────────────────
  // Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y", () => {
    let el: FuroUi5TreeTable;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(flatTree);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByText("A");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-tree-table element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-tree-table");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    it("marks the table as a treegrid", () => {
      assert.equal(el.querySelector("table")?.getAttribute("role"), "treegrid");
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Initial tree build
  // ───────────────────────────────────────────────────────────────────────
  describe("initial tree build", () => {
    let el: FuroUi5TreeTable;

    beforeEach(async () => {
      el = await fixture(parentChildTree);
      await delay(20);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("injects a tree icon into the parent's first cell", () => {
      const icon = el.querySelector("#root [tree-icon]");
      assert.isOk(icon);
      assert.equal(icon.getAttribute("name"), "slim-arrow-right");
    });

    it("marks leaf rows with is-leave and parents without it", () => {
      assert.isNull(el.querySelector("#root")?.getAttribute("is-leave"));
      assert.equal(el.querySelector("#child")?.getAttribute("is-leave"), "");
    });

    it("puts the first row into the tab order", () => {
      assert.equal(el.querySelector("#root")?.getAttribute("tabindex"), "0");
      assert.equal(el.querySelector("#child")?.getAttribute("tabindex"), "-1");
    });

    it("collapses unexpanded subnodes by default", () => {
      assert.equal(el.querySelector("#child")?.getAttribute("hidden"), "");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Expand / collapse
  // ───────────────────────────────────────────────────────────────────────
  describe("expand / collapse", () => {
    let el: FuroUi5TreeTable;

    beforeEach(async () => {
      el = await fixture(parentChildTree);
      await delay(20);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("expands when the tree icon is clicked", () => {
      const icon = el.querySelector<HTMLElement>("#root [tree-icon]");
      icon?.click();
      assert.isNull(el.querySelector("#child")?.getAttribute("hidden"));
      assert.equal(icon?.getAttribute("name"), "slim-arrow-down");
    });

    it("expands with ArrowRight and collapses with ArrowLeft", () => {
      const root = el.querySelector<HTMLElement>("#root")!;
      root.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, composed: true }));
      assert.isNull(el.querySelector("#child")?.getAttribute("hidden"), "child visible after ArrowRight");

      root.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true, composed: true }));
      assert.equal(el.querySelector("#child")?.getAttribute("hidden"), "", "child hidden after ArrowLeft");
    });

    it("expandAllNodes() reveals every node", () => {
      el.expandAllNodes();
      assert.isNull(el.querySelector("#child")?.getAttribute("hidden"));
    });

    it("collapseAllNodes() hides nodes below level 1", () => {
      el.expandAllNodes();
      el.collapseAllNodes();
      assert.equal(el.querySelector("#child")?.getAttribute("hidden"), "");
    });

    it("fires node-collapsed on ArrowLeft of an expanded node", () => {
      const root = el.querySelector<HTMLElement>("#root")!;
      root.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true, composed: true }));
      let collapsed = false;
      el.addEventListener("node-collapsed", () => {
        collapsed = true;
      });
      root.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowLeft", bubbles: true, composed: true }));
      assert.isTrue(collapsed);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Keyboard focus navigation
  // ───────────────────────────────────────────────────────────────────────
  describe("keyboard focus navigation", () => {
    let el: FuroUi5TreeTable;

    beforeEach(async () => {
      el = await fixture(flatTree);
      await delay(20);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("End focuses the last visible row", () => {
      const a = el.querySelector<HTMLElement>("#a")!;
      a.focus();
      a.dispatchEvent(new KeyboardEvent("keydown", { key: "End", bubbles: true, composed: true }));
      assert.equal(document.activeElement?.id, "c");
    });

    it("Home focuses the first body row", () => {
      const c = el.querySelector<HTMLElement>("#c")!;
      c.focus();
      c.dispatchEvent(new KeyboardEvent("keydown", { key: "Home", bubbles: true, composed: true }));
      assert.equal(document.activeElement?.id, "a");
    });

    it("ArrowDown moves focus to the next visible row", () => {
      const a = el.querySelector<HTMLElement>("#a")!;
      a.focus();
      a.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowDown", bubbles: true, composed: true }));
      assert.equal(document.activeElement?.id, "b");
    });

    it("ArrowUp moves focus to the previous visible row", () => {
      const b = el.querySelector<HTMLElement>("#b")!;
      b.focus();
      b.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowUp", bubbles: true, composed: true }));
      assert.equal(document.activeElement?.id, "a");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // SingleSelect selection
  // ───────────────────────────────────────────────────────────────────────
  describe("SingleSelect selection", () => {
    let el: FuroUi5TreeTable;

    beforeEach(async () => {
      el = await fixture(flatTree);
      el.mode = TreeTableMode.SingleSelect;
      await el.updateComplete;
      await delay(20);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("emits row-click when a row is clicked", () => {
      let clicked: HTMLTableRowElement | undefined;
      el.addEventListener("row-click", e => {
        clicked = (e as CustomEvent<HTMLTableRowElement>).detail;
      });
      el.querySelector<HTMLElement>("#a td")?.click();
      assert.equal(clicked?.id, "a");
    });

    it("emits selection-change and tracks selectedNodes", () => {
      let changed = false;
      el.addEventListener("selection-change", () => {
        changed = true;
      });
      el.querySelector<HTMLElement>("#b td")?.click();
      assert.isTrue(changed);
      assert.equal(el.selectedNodes.length, 1);
      assert.equal(el.selectedNodes[0].id, "b");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Debounced node-focused event
  // ───────────────────────────────────────────────────────────────────────
  describe("node-focused event", () => {
    let el: FuroUi5TreeTable;

    beforeEach(async () => {
      el = await fixture(flatTree);
      await delay(20);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("fires node-focused (debounced 250ms) when a row receives focus", async () => {
      let focused: HTMLTableRowElement | undefined;
      el.addEventListener("node-focused", e => {
        focused = (e as CustomEvent<HTMLTableRowElement>).detail;
      });
      el.querySelector<HTMLElement>("#a")?.dispatchEvent(new FocusEvent("focusin", { bubbles: true, composed: true }));
      assert.strictEqual(focused, undefined, "should be debounced, not fired synchronously");
      await delay(300);
      assert.equal(focused?.id, "a");
    });
  });
});
