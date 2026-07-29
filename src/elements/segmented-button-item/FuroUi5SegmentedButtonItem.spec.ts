/**
 * Spec for `FuroUi5SegmentedButtonItem`.
 *
 * The element extends the UI5 `SegmentedButtonItem` and binds any `OptionLike`
 * field node (`id`, `displayName` and the optional `icon` / `tooltip`). It is a
 * one-way binding element: the model drives `data-id`, the light-DOM text label,
 * `icon` and `tooltip`, but the item itself never writes back — the selection
 * round-trip lives in the parent `furo-ui5-segmented-button`, which maps items to
 * model entries through the `data-id` attribute this element maintains.
 *
 * Consequences for the `[TEMPLATE]` blocks of `FuroUi5TextInput.spec.ts`:
 * `UI → model value sync`, `model-driven state` and `FAT attribute mapping` do
 * not apply — the element has no `value`, no `FatHandler`, no `ValueState` and no
 * `ModelReaderWriter`. The remaining template blocks are kept.
 */
import "@/Assets";
import "@/Icons";
import "../segmented-button/index";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { renderFinished } from "@ui5/webcomponents-base/dist/Render.js";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5SegmentedButtonItem } from "./FuroUi5SegmentedButtonItem";

import type { FuroUi5SegmentedButton } from "@/elements/segmented-button/FuroUi5SegmentedButton";
import { Menuitem } from "@/models/furoui5/Menuitem";
import { CubeOptions, type ICubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const createOption = (init: ICubeOptions): CubeOptions => new CubeOptions(init);

const itemFixture = async (): Promise<FuroUi5SegmentedButtonItem> => {
  const el: FuroUi5SegmentedButtonItem = await fixture(html`<furo-ui5-segmented-button-item></furo-ui5-segmented-button-item>`);
  return el;
};

describe("FuroUi5SegmentedButtonItem", () => {
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5SegmentedButtonItem;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      // The item renders `role="option"`, which axe requires to sit inside a `group` /
      // `listbox`. Standalone it therefore fails `aria-required-parent` (and UI5 emits
      // `aria-posinset="0"` without a parent to number it). Both are properties of the
      // documented usage — the item is only meant to live inside a segmented button —
      // so the a11y fixture mirrors that.
      const group: FuroUi5SegmentedButton = await fixture(html`
        <furo-ui5-segmented-button>
          <furo-ui5-segmented-button-item data-testid="test">Label</furo-ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      `);
      const item = group.querySelector<FuroUi5SegmentedButtonItem>("furo-ui5-segmented-button-item");
      assert.isOk(item);
      el = item;
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-segmented-button-item element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-segmented-button-item");
    });

    it("should be ok", () => {
      assert.isOk(el);
      assert.instanceOf(el, FuroUi5SegmentedButtonItem);
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5SegmentedButtonItem;

    beforeEach(async () => {
      el = await itemFixture();
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes no model before binding", () => {
      // unlike the value-carrying elements this one has no default model
      assert.isUndefined(el.model);
    });

    it("bindData(undefined) is a no-op", () => {
      el.bindData(undefined);
      assert.isUndefined(el.model);
      assert.isUndefined(el.dataset.id);
    });

    it("setting model to undefined is a no-op", () => {
      el.model = undefined;
      assert.isUndefined(el.model);
    });

    it("keeps a bound model when undefined is assigned afterwards", () => {
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      el.bindData(undefined);
      assert.strictEqual(el.model, model);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI sync [TEMPLATE]", () => {
    let el: FuroUi5SegmentedButtonItem;

    beforeEach(async () => {
      el = await itemFixture();
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the whole option on bind", () => {
      const model = createOption({ id: "1", displayName: "One", icon: "accept", tooltip: "the first one" });
      el.bindData(model);
      assert.equal(el.dataset.id, "1");
      assert.equal(el.textContent, "One");
      assert.equal(el.icon, "accept");
      assert.equal(el.tooltip, "the first one");
    });

    it("exposes the bound model through the getter", () => {
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      assert.strictEqual(el.model, model);
    });

    it("binds through the model property as well", () => {
      const model = createOption({ id: "1", displayName: "One" });
      el.model = model;
      assert.strictEqual(el.model, model);
      assert.equal(el.textContent, "One");
    });

    it("propagates displayName changes to the label", () => {
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      model.displayName.value = "Uno";
      assert.equal(el.textContent, "Uno");
    });

    it("propagates id changes to data-id", () => {
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      model.id.value = "42";
      assert.equal(el.dataset.id, "42");
      assert.equal(el.getAttribute("data-id"), "42");
    });

    it("propagates icon changes", () => {
      const model = createOption({ id: "1", displayName: "One", icon: "accept" });
      el.bindData(model);
      model.icon.value = "decline";
      assert.equal(el.icon, "decline");
    });

    it("propagates tooltip changes", () => {
      const model = createOption({ id: "1", displayName: "One", tooltip: "first" });
      el.bindData(model);
      model.tooltip.value = "still first";
      assert.equal(el.tooltip, "still first");
    });

    it("renders an empty label for an option without a display name", () => {
      el.bindData(createOption({ id: "1" }));
      assert.equal(el.dataset.id, "1");
      assert.equal(el.textContent, "");
    });

    it("leaves tooltip untouched when the model has no tooltip field", () => {
      el.tooltip = "preset";
      // Menuitem satisfies OptionLike (id, displayName, icon) but has no tooltip field
      el.bindData(new Menuitem({ id: "m", displayName: "Menu", icon: "home" }));
      assert.equal(el.dataset.id, "m");
      assert.equal(el.textContent, "Menu");
      assert.equal(el.icon, "home");
      assert.equal(el.tooltip, "preset");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5SegmentedButtonItem;

    beforeEach(async () => {
      el = await itemFixture();
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the new model after rebinding", () => {
      el.bindData(createOption({ id: "a", displayName: "A" }));
      el.bindData(createOption({ id: "b", displayName: "B" }));
      assert.equal(el.dataset.id, "b");
      assert.equal(el.textContent, "B");
    });

    it("mutating the old model after rebind does not change the item", () => {
      const modelA = createOption({ id: "a", displayName: "A" });
      const modelB = createOption({ id: "b", displayName: "B" });
      el.bindData(modelA);
      el.bindData(modelB);
      modelA.displayName.value = "A-after";
      modelA.id.value = "a-after";
      assert.equal(el.textContent, "B");
      assert.equal(el.dataset.id, "b");
    });

    it("keeps following the new model after rebind", () => {
      const modelA = createOption({ id: "a", displayName: "A" });
      const modelB = createOption({ id: "b", displayName: "B" });
      el.bindData(modelA);
      el.bindData(modelB);
      modelB.displayName.value = "B-after";
      assert.equal(el.textContent, "B-after");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      // a second bind would re-run readFromModel and restore the label
      el.textContent = "clobbered";
      el.bindData(model);
      assert.strictEqual(el.model, model);
      assert.equal(el.textContent, "clobbered");
      // …and the single listener still works
      model.displayName.value = "One!";
      assert.equal(el.textContent, "One!");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  describe("lifecycle [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("carries the ui5-segmented-button-item marker attribute", async () => {
      const el = await itemFixture();
      assert.isTrue(el.hasAttribute("ui5-segmented-button-item"));
    });

    it("restores the marker attribute after a reconnect", async () => {
      const el = await itemFixture();
      const parent = el.parentElement;
      assert.isOk(parent);
      el.remove();
      el.removeAttribute("ui5-segmented-button-item");
      parent.appendChild(el);
      assert.isTrue(el.hasAttribute("ui5-segmented-button-item"));
    });

    it("keeps following the model while disconnected (the listener is not lifecycle-bound)", async () => {
      const el = await itemFixture();
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      el.remove();
      model.displayName.value = "Uno";
      assert.equal(el.textContent, "Uno");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  describe("inherited UI5 surface [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("keeps the inherited selected property", async () => {
      const el = await itemFixture();
      el.bindData(createOption({ id: "1", displayName: "One" }));
      assert.isFalse(el.selected);
      el.selected = true;
      await renderFinished();
      assert.isTrue(el.selected);
    });

    it("keeps the inherited disabled property", async () => {
      const el = await itemFixture();
      el.bindData(createOption({ id: "1", displayName: "One" }));
      el.disabled = true;
      await renderFinished();
      assert.isTrue(el.disabled);
    });

    it("does not clear a pre-set selection when the model updates", async () => {
      const el = await itemFixture();
      const model = createOption({ id: "1", displayName: "One" });
      el.bindData(model);
      el.selected = true;
      model.displayName.value = "Uno";
      await renderFinished();
      assert.isTrue(el.selected);
      assert.equal(el.textContent, "Uno");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  describe("integration with furo-ui5-segmented-button [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    /** Three author-declared items inside a segmented button, each bound to an option. */
    const authoredGroup = async (): Promise<{ group: FuroUi5SegmentedButton; items: FuroUi5SegmentedButtonItem[] }> => {
      const group: FuroUi5SegmentedButton = await fixture(html`
        <furo-ui5-segmented-button>
          <furo-ui5-segmented-button-item></furo-ui5-segmented-button-item>
          <furo-ui5-segmented-button-item></furo-ui5-segmented-button-item>
          <furo-ui5-segmented-button-item></furo-ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      `);
      const items = [...group.querySelectorAll<FuroUi5SegmentedButtonItem>("furo-ui5-segmented-button-item")];
      items[0].bindData(createOption({ id: "1", displayName: "One" }));
      items[1].bindData(createOption({ id: "2", displayName: "Two" }));
      items[2].bindData(createOption({ id: "3", displayName: "Three" }));
      return { group, items };
    };

    it("lets the parent map its model selection onto the bound data-id", async () => {
      const { group, items } = await authoredGroup();
      group.selectedId = "2";
      assert.deepEqual(
        items.map(item => item.selected),
        [false, true, false]
      );
    });

    it("reports the selected id from the bound model", async () => {
      const { group, items } = await authoredGroup();
      // UI5 adopts the first item when nothing is selected, so clear before selecting
      items.forEach(item => {
        item.selected = false;
      });
      items[2].selected = true;
      assert.equal(group.selectedId, "3");
    });

    it("follows a later id change of the bound model", async () => {
      const { group, items } = await authoredGroup();
      const model = items[1].model;
      assert.isOk(model);
      model.id.value = "two";
      group.selectedId = "two";
      assert.deepEqual(
        items.map(item => item.selected),
        [false, true, false]
      );
    });
  });
});
