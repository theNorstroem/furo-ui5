import "@/Assets";
import "@/Icons";
import "./index";

import { ARRAY } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import type { MenuItemClickEventDetail } from "@ui5/webcomponents/dist/Menu.js";
import type MenuItem from "@ui5/webcomponents/dist/MenuItem.js";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";

import type { FuroUi5ContextMenu} from "./FuroUi5ContextMenu";
import type { MenuItemSelectedEventDetail } from "./FuroUi5ContextMenu";

import { type IMenuitem, Menuitem } from "@/models/furoui5/Menuitem";

chai.use(chaiA11yAxe);

const sampleItems: IMenuitem[] = [
  { id: "new", displayName: "New", icon: "create", command: "Ctrl+N" },
  { id: "open", displayName: "Open…", icon: "open-folder" },
  { id: "duplicate", displayName: "Duplicate", leadingDivider: true },
  { id: "delete", displayName: "Delete", disabled: true },
];

const buildSample = (): ARRAY<Menuitem, IMenuitem> =>
  ARRAY.Builder(
    Menuitem,
    sampleItems.map(i => ({ ...i }))
  );

const nestedItems: IMenuitem[] = [
  { id: "edit", displayName: "Edit" },
  {
    id: "share",
    displayName: "Share",
    children: [
      { id: "share-link", displayName: "Copy link" },
      {
        id: "share-team",
        displayName: "Team",
        children: [
          { id: "team-mkt", displayName: "Marketing" },
          { id: "team-eng", displayName: "Engineering" },
        ],
      },
    ],
  },
];

describe("FuroUi5ContextMenu", () => {
  // ───────────────────────────────────────────────────────────────────────
  // Element identity & accessibility — smoke
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y", () => {
    let el: FuroUi5ContextMenu;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-context-menu data-testid="test"></furo-ui5-context-menu> `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-context-menu element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-context-menu");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Default model state
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("has no model bound initially", () => {
      assert.isUndefined(el.model);
    });

    it("renders no items when no model is bound", () => {
      assert.equal(el.querySelectorAll("ui5-menu-item").length, 0);
      assert.equal(el.querySelectorAll("ui5-menu-separator").length, 0);
    });

    it("bindData(undefined) is a no-op", () => {
      el.bindData(undefined);
      assert.isUndefined(el.model);
      assert.equal(el.querySelectorAll("ui5-menu-item").length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // bindData(ARRAY<Menuitem,...>) renders items
  // ───────────────────────────────────────────────────────────────────────
  describe("bindData with ARRAY", () => {
    let el: FuroUi5ContextMenu;
    let model: ARRAY<Menuitem, IMenuitem>;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
      model = buildSample();
      el.bindData(model);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("stores the bound model on el.model", () => {
      assert.strictEqual(el.model, model);
    });

    it("renders one ui5-menu-item per item in order", () => {
      const items = el.querySelectorAll("ui5-menu-item");
      assert.equal(items.length, 4);
      assert.equal((items[0] as MenuItem).text, "New");
      assert.equal((items[1] as MenuItem).text, "Open…");
      assert.equal((items[2] as MenuItem).text, "Duplicate");
      assert.equal((items[3] as MenuItem).text, "Delete");
    });

    it("maps icon, additionalText, disabled, and tooltip from the model", () => {
      const items = Array.from(el.querySelectorAll<MenuItem>("ui5-menu-item"));

      assert.equal(items[0].icon, "create", "first item has its icon set");
      assert.equal(items[0].additionalText, "Ctrl+N", "first item carries the command hint");
      assert.equal(items[0].disabled, false, "first item is enabled");
      assert.equal(items[0].tooltip, "New", "tooltip mirrors the display name");

      assert.equal(items[1].icon, "open-folder");
      assert.isUndefined(items[1].additionalText, "no command → no additionalText");

      assert.isUndefined(items[2].icon, "no icon → property left unset");

      assert.equal(items[3].disabled, true, "the delete item is rendered disabled");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // bindData with a single Menuitem root — uses its children ARRAY
  // ───────────────────────────────────────────────────────────────────────
  describe("bindData with single Menuitem root", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("uses the root's children array as the root items", () => {
      const root = new Menuitem({ children: sampleItems.map(i => ({ ...i })) });
      el.bindData(root);
      const items = el.querySelectorAll("ui5-menu-item");
      assert.equal(items.length, 4);
      assert.equal((items[0] as MenuItem).text, "New");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // leadingDivider → <ui5-menu-separator>
  // ───────────────────────────────────────────────────────────────────────
  describe("leadingDivider rendering", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
      el.bindData(buildSample());
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("inserts a ui5-menu-separator before items flagged leadingDivider", () => {
      const children = Array.from(el.children);
      const duplicateIdx = children.findIndex(c => c.tagName.toLowerCase() === "ui5-menu-item" && (c as MenuItem).text === "Duplicate");
      assert.isAbove(duplicateIdx, 0, "Duplicate item is present");
      assert.equal(children[duplicateIdx - 1].tagName.toLowerCase(), "ui5-menu-separator", "separator immediately precedes the flagged item");
    });

    it("does not insert a separator before items without the flag", () => {
      const children = Array.from(el.children);
      const newIdx = children.findIndex(c => c.tagName.toLowerCase() === "ui5-menu-item" && (c as MenuItem).text === "New");
      assert.equal(newIdx, 0, "first item is at index 0 — no leading separator");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Nested submenus — recursive rendering
  // ───────────────────────────────────────────────────────────────────────
  describe("nested submenus", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
      el.bindData(ARRAY.Builder(Menuitem, nestedItems));
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders child items as light-DOM children of the parent item", () => {
      const share = Array.from(el.querySelectorAll(":scope > ui5-menu-item")).find(i => (i as MenuItem).text === "Share") as MenuItem | undefined;
      assert.isOk(share, "Share item rendered at root level");

      const shareChildren = Array.from(share.querySelectorAll<MenuItem>(":scope > ui5-menu-item"));
      assert.equal(shareChildren.length, 2, "Share has two direct children");
      assert.equal(shareChildren[0].text, "Copy link");
      assert.equal(shareChildren[1].text, "Team");
    });

    it("recurses at least two levels deep", () => {
      const share = Array.from(el.querySelectorAll(":scope > ui5-menu-item")).find(i => (i as MenuItem).text === "Share") as MenuItem | undefined;
      const team = Array.from(share!.querySelectorAll(":scope > ui5-menu-item")).find(i => (i as MenuItem).text === "Team") as MenuItem | undefined;
      assert.isOk(team, "Team submenu rendered");
      const teamChildren = Array.from(team.querySelectorAll<MenuItem>(":scope > ui5-menu-item"));
      assert.equal(teamChildren.length, 2);
      assert.equal(teamChildren[0].text, "Marketing");
      assert.equal(teamChildren[1].text, "Engineering");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // model setter delegates to bindData
  // ───────────────────────────────────────────────────────────────────────
  describe("model setter", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the same items whether assigned via .model = or .bindData()", () => {
      const a = buildSample();
      const b = buildSample();
      el.model = a;
      const countViaSetter = el.querySelectorAll("ui5-menu-item").length;

      el.bindData(b);
      const countViaBind = el.querySelectorAll("ui5-menu-item").length;

      assert.equal(countViaSetter, countViaBind);
      assert.strictEqual(el.model, b);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // show / showAt / trigger / close — only assert el.open
  // ───────────────────────────────────────────────────────────────────────
  describe("show / showAt / trigger / close", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
      el.bindData(buildSample());
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("show() opens; close() resets", () => {
      el.show();
      assert.equal(el.open, true);
      el.close();
      assert.equal(el.open, false);
    });

    it("trigger() opens the menu", () => {
      el.trigger();
      assert.equal(el.open, true);
      el.close();
    });

    it("showAt(opener) assigns opener and opens", () => {
      el.showAt("some-id");
      assert.equal(el.opener, "some-id");
      assert.equal(el.open, true);
      el.close();
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // trigger before bindData is queued and replayed
  // ───────────────────────────────────────────────────────────────────────
  describe("queued trigger", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("trigger() before bindData does not open immediately", () => {
      el.trigger();
      assert.equal(el.open, false, "stays closed while no model is bound");
    });

    it("subsequent bindData replays the queued trigger", () => {
      el.trigger();
      el.bindData(buildSample());
      assert.equal(el.open, true);
      el.close();
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // menu-item-selected dispatch (translation of item-click)
  // ───────────────────────────────────────────────────────────────────────
  describe("menu-item-selected event", () => {
    let el: FuroUi5ContextMenu;
    let model: ARRAY<Menuitem, IMenuitem>;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
      model = buildSample();
      el.bindData(model);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    const dispatchItemClick = (item: MenuItem, text: string) => {
      el.dispatchEvent(
        new CustomEvent<MenuItemClickEventDetail>("item-click", {
          detail: { item, text },
        })
      );
    };

    it("dispatches menu-item-selected with the source Menuitem and current context", () => {
      const firstItem = el.querySelectorAll("ui5-menu-item")[0] as MenuItem;
      let received: MenuItemSelectedEventDetail | undefined;
      el.addEventListener("menu-item-selected", e => {
        received = (e as CustomEvent<MenuItemSelectedEventDetail>).detail;
      });

      el.setContext({ row: 7 });
      dispatchItemClick(firstItem, "New");

      assert.isOk(received);
      assert.deepEqual(received.context, { row: 7 });
      assert.strictEqual(received.menuitem, model.atT(0), "carries the source Menuitem field node");
    });

    it("triggerContext sets the context observed by a subsequent selection", () => {
      const firstItem = el.querySelectorAll("ui5-menu-item")[0] as MenuItem;
      let received: MenuItemSelectedEventDetail | undefined;
      el.addEventListener("menu-item-selected", e => {
        received = (e as CustomEvent<MenuItemSelectedEventDetail>).detail;
      });

      el.triggerContext({ a: 1 });
      assert.equal(el.open, true, "triggerContext also opens the menu");
      dispatchItemClick(firstItem, "New");
      el.close();

      assert.deepEqual(received!.context, { a: 1 });
    });

    it("ignores item-click whose item is not in the WeakMap", () => {
      const stray = document.createElement("ui5-menu-item") as MenuItem;
      let fired = false;
      el.addEventListener("menu-item-selected", () => {
        fired = true;
      });
      dispatchItemClick(stray, "stranger");
      assert.isFalse(fired);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("after rebind, mutating the previous model does not re-render", () => {
      const a = buildSample();
      const b = ARRAY.Builder(Menuitem, [{ id: "only", displayName: "OnlyInB" }] as IMenuitem[]);
      el.bindData(a);
      el.bindData(b);

      const beforeMutation = el.querySelectorAll("ui5-menu-item").length;
      a.push({ id: "extra", displayName: "Extra-In-A" });
      const afterMutation = el.querySelectorAll("ui5-menu-item").length;

      assert.equal(beforeMutation, afterMutation, "no listener on the old model");
      assert.equal(beforeMutation, 1, "render came from b");
      assert.equal((el.querySelectorAll("ui5-menu-item")[0] as MenuItem).text, "OnlyInB");
    });

    it("after rebind, mutating the new model does re-render", () => {
      const a = buildSample();
      const b = ARRAY.Builder(Menuitem, [{ id: "only", displayName: "OnlyInB" }] as IMenuitem[]);
      el.bindData(a);
      el.bindData(b);

      b.push({ id: "extra", displayName: "Extra-In-B" });
      const texts = Array.from(el.querySelectorAll("ui5-menu-item")).map(i => (i as MenuItem).text);
      assert.deepEqual(texts, ["OnlyInB", "Extra-In-B"]);
    });

    it("bindData(sameInstance) is a no-op", () => {
      const a = buildSample();
      el.bindData(a);
      const countBefore = el.querySelectorAll("ui5-menu-item").length;
      el.bindData(a);
      const countAfter = el.querySelectorAll("ui5-menu-item").length;
      assert.equal(countBefore, countAfter);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // Reactivity — pushing into the bound array re-renders
  // ───────────────────────────────────────────────────────────────────────
  describe("reactivity", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders newly pushed items", () => {
      const model = buildSample();
      el.bindData(model);
      const before = el.querySelectorAll("ui5-menu-item").length;
      model.push({ id: "extra", displayName: "Extra" });
      const after = el.querySelectorAll("ui5-menu-item").length;
      assert.equal(after, before + 1);
      const last = el.querySelectorAll("ui5-menu-item")[after - 1] as MenuItem;
      assert.equal(last.text, "Extra");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // disconnectedCallback detaches model listeners
  // ───────────────────────────────────────────────────────────────────────
  describe("disconnectedCallback", () => {
    let el: FuroUi5ContextMenu;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-context-menu></furo-ui5-context-menu>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("removes model listeners so subsequent mutations are ignored", () => {
      const model = buildSample();
      el.bindData(model);
      const beforeRemoval = el.querySelectorAll("ui5-menu-item").length;
      el.remove();

      // mutating the model now should NOT throw, and the (detached) element should
      // be unaffected.
      model.push({ id: "extra", displayName: "Extra" });
      assert.equal(el.querySelectorAll("ui5-menu-item").length, beforeRemoval);
    });
  });
});
