/**
 * Spec for `FuroUi5MultiCombobox`. Mirrors the `[TEMPLATE]` describe-blocks from
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` (the canonical reference
 * spec for furo-ui5 binding elements) with these adaptations:
 *   - tag / class swap to `furo-ui5-multi-combobox` / `FuroUi5MultiCombobox`
 *   - the default model is an `ARRAY` (not a scalar) — `ARRAY.Builder(STRING, [])`
 *   - model → UI sync is selection-driven: `setSelectedItems()` toggles the
 *     `selected` attribute on the matching `furo-ui5-mcb-item` children, so
 *     value-sync assertions look at item selection rather than `el.value`
 *   - UI → model sync fires a `selection-change` event whose `detail.items`
 *     holds the currently-selected `furo-ui5-mcb-item` DOM elements; the
 *     element extracts each `.id` and pushes them back into the bound array
 *   - FAT attribute mapping is intentionally not wired (the previous
 *     `FatHandler` plumbing was dead code and was removed); only the
 *     `accessibleName ??= model.__label` fallback is covered in the
 *     FAT-mapping block
 *   - constraints test drops `max_length` (multi-combobox doesn't apply it)
 *   - lifecycle block skipped (multi-combobox registers no listeners in
 *     lifecycle hooks)
 * Blocks tagged `[element-specific]` cover multi-combobox-only surface:
 * `clear()`, `bindOptions()` / `optionsModel`, `renderOptionList()` /
 * `optionList`, and `setSelectedItems()`.
 */
import "@/Assets";
import "@/Icons";
import "../mcb-item/index";
import "./index";

import { ARRAY, STRING, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5MultiCombobox } from "./FuroUi5MultiCombobox";

import type { IdentifiableList, McbItem } from "@/lib/open-models/signatures";
import { FuroFatString, type IFuroFatString } from "@/models";
import { CubeOptions, type ICubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const stringArray = (items: string[]): ARRAY<STRING, string> => ARRAY.Builder(STRING, items);

const fatStringArray = (items: string[]): ARRAY<FuroFatString, IFuroFatString> =>
  ARRAY.Builder(
    FuroFatString,
    items.map((v) => ({ value: v }))
  );

const identifiableList = (items: ICubeOptions[]): IdentifiableList => ARRAY.Builder(CubeOptions, items);

const selectedIds = (el: FuroUi5MultiCombobox): string[] => [...el.querySelectorAll("furo-ui5-mcb-item[selected]")].map((node) => node.id);

describe("FuroUi5MultiCombobox", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5MultiCombobox;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox accessible-name="name" data-testid="test"></furo-ui5-multi-combobox>`);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-multi-combobox element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-multi-combobox");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Default model state
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default ARRAY model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "primitives.ARRAY<>");
      assert.equal(el.model.length, 0);
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync
  //
  // For multi-combobox, model → UI sync means: when an item's id matches an
  // entry in the bound array, the matching `furo-ui5-mcb-item` child gets the
  // `selected` attribute via `setSelectedItems()`.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
      // give the element three selectable items to choose from
      el.renderOptionList([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
        { id: "3", displayName: "Three" },
      ]);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("selects items matching an ARRAY<STRING> on bind", () => {
      const model = stringArray(["1", "3"]);
      el.bindData(model);
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });

    it("re-selects items when an ARRAY<STRING> entry is added", () => {
      const model = stringArray(["1"]);
      el.bindData(model);
      assert.deepEqual(selectedIds(el), ["1"]);
      model.add("2", false);
      assert.deepEqual(selectedIds(el).sort(), ["1", "2"]);
    });

    it("selects items matching an ARRAY<FuroFatString> on bind", () => {
      const model = fatStringArray(["2", "3"]);
      el.bindData(model);
      assert.deepEqual(selectedIds(el).sort(), ["2", "3"]);
    });

    it("selects items matching an IdentifiableList on bind", () => {
      const model = identifiableList([
        { id: "1", displayName: "One" },
        { id: "3", displayName: "Three" },
      ]);
      el.bindData(model);
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });

    it("deselects all items when bound to an empty ARRAY", () => {
      // first bind a populated array so something becomes selected
      const populated = stringArray(["1", "2"]);
      el.bindData(populated);
      assert.equal(selectedIds(el).length, 2);
      // rebind to an empty array — `setSelectedItems` should clear selection
      const empty = stringArray([]);
      el.bindData(empty);
      assert.equal(selectedIds(el).length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  //
  // The multi-combobox listens for `selection-change` and pushes the ids of
  // the currently-selected items in `event.detail.items` back into the bound
  // array. The model is cleared first, then rebuilt — listener detach/re-attach
  // around the mutation prevents the update → setSelectedItems
  // feedback loop.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
      el.renderOptionList([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    const fireSelectionChange = (host: FuroUi5MultiCombobox, selectedItemIds: string[]) => {
      const items = selectedItemIds.map((id) => host.querySelector(`furo-ui5-mcb-item[id="${id}"]`));
      host.dispatchEvent(new CustomEvent("selection-change", { bubbles: true, composed: true, detail: { items } }));
    };

    it("writes selected ids back to an ARRAY<STRING> model", () => {
      const model = stringArray([]);
      el.bindData(model);
      fireSelectionChange(el, ["1", "2"]);
      assert.deepEqual(model.__toLiteral(), ["1", "2"]);
    });

    it("replaces existing entries in the ARRAY<STRING> model on each selection-change", () => {
      const model = stringArray(["1", "2"]);
      el.bindData(model);
      fireSelectionChange(el, ["2"]);
      assert.deepEqual(model.__toLiteral(), ["2"]);
    });

    it("clears the ARRAY<STRING> model when selection-change has no items", () => {
      const model = stringArray(["1", "2"]);
      el.bindData(model);
      fireSelectionChange(el, []);
      assert.equal(model.length, 0);
    });

    it("writes selected ids back to an ARRAY<FuroFatString> model as { value }", () => {
      const model = fatStringArray([]);
      el.bindData(model);
      fireSelectionChange(el, ["1", "2"]);
      assert.deepEqual(
        model.map((item) => item.value.toString()),
        ["1", "2"]
      );
    });

    it("writes selected ids back to an IdentifiableList by looking up the options model", () => {
      const options: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
      el.bindOptions(options);
      const model = identifiableList([]);
      el.bindData(model);
      fireSelectionChange(el, ["2"]);
      assert.equal(model.length, 1);
      assert.equal(model.at(0)?.id.toString(), "2");
      assert.equal(model.at(0)?.displayName.toString(), "Two");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = stringArray([]);
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = stringArray([]);
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = stringArray([]);
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = stringArray([]);
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = stringArray([]);
      // monkey-patch __getConstraints so the element sees a parent-supplied constraint set
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      assert.equal(el.readonly, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] FAT attribute mapping
  //
  // Multi-combobox does NOT use a `FatHandler` — the previous plumbing was
  // dead code (no `*ReaderWriters` class to route FAT through, and an `ARRAY`
  // model is not itself FAT-shaped). Only the `accessibleName ??= model.__label`
  // fallback wired in `bindData` is covered here.
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5MultiCombobox = await fixture(html`<furo-ui5-multi-combobox accessible-name="preset"></furo-ui5-multi-combobox>`);
      const model = stringArray([]);
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5MultiCombobox = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
      const model = stringArray([]);
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
      el.renderOptionList([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
        { id: "3", displayName: "Three" },
      ]);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("rebinding refreshes UI selection to reflect the new model only", () => {
      const modelA = stringArray(["1"]);
      const modelB = stringArray(["2"]);
      el.bindData(modelA);
      assert.deepEqual(selectedIds(el), ["1"]);
      el.bindData(modelB);
      // `setSelectedItems` clears stale selections first, then re-applies the
      // current model — so only modelB's selections remain on the DOM.
      assert.deepEqual(selectedIds(el), ["2"]);
      modelA.add("3", false);
      // the detached modelA listener must NOT re-render through the element.
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = stringArray(["1"]);
      const modelB = stringArray(["2"]);
      el.bindData(modelA);
      el.bindData(modelB);
      el.dispatchEvent(new CustomEvent("selection-change", { bubbles: true, composed: true, detail: { items: [] } }));
      // writeToModel clears the currently-bound model only
      assert.equal(modelB.length, 0);
      assert.equal(modelA.length, 1);
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = stringArray(["1"]);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      el.dispatchEvent(new CustomEvent("selection-change", { bubbles: true, composed: true, detail: { items: [] } }));
      // a single bound listener clears the model exactly once
      assert.equal(model.length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("clear() [element-specific]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("empties the value and clears the bound model", () => {
      const model = stringArray(["1", "2", "3"]);
      el.bindData(model);
      assert.equal(model.length, 3);
      el.value = "typed";
      el.clear();
      assert.equal(el.value, "");
      assert.equal(model.length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] setSelectedItems()
  // ───────────────────────────────────────────────────────────────────────
  describe("setSelectedItems() [element-specific]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
      el.renderOptionList([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("selects nothing for a default (empty) model", () => {
      el.setSelectedItems();
      assert.equal(selectedIds(el).length, 0);
    });

    it("selects only items whose id appears in the ARRAY<STRING> model", () => {
      const model = stringArray(["2"]);
      el.bindData(model);
      // explicit call should leave selection idempotent
      el.setSelectedItems();
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("removes 'selected' from all items when the bound array is emptied", () => {
      const model = stringArray(["1", "2"]);
      el.bindData(model);
      assert.equal(selectedIds(el).length, 2);
      model.__clear();
      el.setSelectedItems();
      assert.equal(selectedIds(el).length, 0);
    });

    it("ignores ids that do not match any rendered item", () => {
      const model = stringArray(["1", "does-not-exist"]);
      el.bindData(model);
      assert.deepEqual(selectedIds(el), ["1"]);
    });

    it("removes 'selected' from items dropped from a shrunken model", () => {
      const model = stringArray(["1", "2"]);
      el.bindData(model);
      assert.deepEqual(selectedIds(el).sort(), ["1", "2"]);
      // shrink the bound array — id "2" should be deselected on the next sync
      model.delete(1);
      el.setSelectedItems();
      assert.deepEqual(selectedIds(el), ["1"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] bindOptions() / optionsModel
  // ───────────────────────────────────────────────────────────────────────
  describe("bindOptions / optionsModel [element-specific]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("bindOptions(undefined) is a no-op", () => {
      el.bindOptions(undefined);
      assert.equal(el.optionsModel, undefined);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 0);
    });

    it("renders one furo-ui5-mcb-item per option from the model", () => {
      const options: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "1", displayName: "First" },
        { id: "2", displayName: "Second" },
      ]);
      el.bindOptions(options);
      const items = el.querySelectorAll("furo-ui5-mcb-item");
      assert.equal(items.length, 2);
      assert.strictEqual(el.optionsModel, options);
    });

    it("re-renders when the underlying array changes (array-changed)", () => {
      const options: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "1", displayName: "First" },
        { id: "2", displayName: "Second" },
      ]);
      el.bindOptions(options);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 2);
      options.add({ id: "3", displayName: "Third" }, true);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 3);
    });

    it("rebinding to a fresh options array swaps the rendered items", () => {
      const optionsA: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "1", displayName: "First" },
        { id: "2", displayName: "Second" },
      ]);
      const optionsB: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "x", displayName: "X" },
        { id: "y", displayName: "Y" },
        { id: "z", displayName: "Z" },
      ]);
      el.bindOptions(optionsA);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 2);
      el.bindOptions(optionsB);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 3);
      // mutating the detached optionsA must not re-render through this element
      optionsA.add({ id: "stray", displayName: "Stray" }, true);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 3);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] renderOptionList() / optionList
  // ───────────────────────────────────────────────────────────────────────
  describe("renderOptionList / optionList [element-specific]", () => {
    let el: FuroUi5MultiCombobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-multi-combobox></furo-ui5-multi-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renderOptionList(undefined) is a no-op", () => {
      el.renderOptionList(undefined);
      assert.equal(el.optionList, undefined);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 0);
    });

    it("renders one furo-ui5-mcb-item per McbItem with text + additionalText", () => {
      const list: McbItem[] = [
        { id: "1", displayName: "A", additionalText: "extra" },
        { id: "2", displayName: "B" },
      ];
      el.renderOptionList(list);
      const items = el.querySelectorAll("furo-ui5-mcb-item");
      assert.equal(items.length, 2);
      const first: HTMLElement & { text?: string; additionalText?: string } = items[0];
      const second: HTMLElement & { text?: string; additionalText?: string } = items[1];
      assert.equal(first.text, "A");
      assert.equal(first.additionalText, "extra");
      assert.equal(second.text, "B");
      assert.strictEqual(el.optionList, list);
    });

    it("rebinding renderOptionList replaces the rendered items", () => {
      const listA: McbItem[] = [
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ];
      const listB: McbItem[] = [
        { id: "a", displayName: "A" },
        { id: "b", displayName: "B" },
        { id: "c", displayName: "C" },
      ];
      el.renderOptionList(listA);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 2);
      el.renderOptionList(listB);
      assert.equal(el.querySelectorAll("furo-ui5-mcb-item").length, 3);
    });
  });
});
