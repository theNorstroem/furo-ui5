/**
 * Spec for `FuroUi5SegmentedButton`. The element wraps the UI5 SegmentedButton and supports three
 * binding shapes, so the suite is organised per mode rather than via the single-model `[TEMPLATE]`
 * blocks:
 *   - **ENUM** — single selection; items are auto-built from the enum descriptor (UNSPECIFIED is
 *     omitted unless `showUnspecifiedOption`)
 *   - **STRING | FuroFatString | StringValue** — single selection; items come from `optionList` /
 *     `optionsModel` / author HTML; selection maps to the bound string value
 *   - **ARRAY<STRING> | ARRAY<FuroFatString> | IdentifiableList** — multiple selection; selection
 *     maps to the bound array
 * Selection round-trips through a `selection-change` event whose `detail.selectedItems` holds the
 * selected item elements. Single-selection modes adopt the first item when the model is empty
 * (mirroring `furo-ui5-select`). Value-state is intentionally not wired (the UI5 component renders
 * none).
 */
import "@/Assets";
import "@/Icons";
import "../segmented-button-item/index";
import "./index";

import { ARRAY, ENUM, STRING } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5SegmentedButton } from "./FuroUi5SegmentedButton";

import type { SelectOption } from "@/lib/open-models/signatures";
import { Materials } from "@/models/furoui5test/cube/Materials";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const createEnum = (initial?: Materials): ENUM<Materials> => new ENUM<Materials>(initial, Materials, Materials.MATERIALS_UNSPECIFIED);

const createString = (initial?: string): STRING => {
  const s = new STRING();
  if (initial !== undefined) s.value = initial;
  return s;
};

const stringArray = (items: string[]): ARRAY<STRING, string> => ARRAY.Builder(STRING, items);

const OPTIONS: SelectOption[] = [
  { id: "1", displayName: "One" },
  { id: "2", displayName: "Two" },
  { id: "3", displayName: "Three" },
];

const items = (el: FuroUi5SegmentedButton): (HTMLElement & { selected: boolean; disabled: boolean })[] =>
  [...el.querySelectorAll("furo-ui5-segmented-button-item, ui5-segmented-button-item")] as (HTMLElement & { selected: boolean; disabled: boolean })[];

const selectedIds = (el: FuroUi5SegmentedButton): string[] =>
  items(el)
    .filter(i => i.selected)
    .map(i => i.getAttribute("data-id") ?? "");

/**
 * Drive a UI-side selection: clear the `selected` flag on every item, set it on the targets, then
 * dispatch the `selection-change` event the element listens for, carrying the selected items.
 */
const selectByIds = (el: FuroUi5SegmentedButton, ids: string[]): void => {
  const targets: (HTMLElement & { selected: boolean })[] = [];
  items(el).forEach(item => {
    const on = ids.includes(item.getAttribute("data-id") ?? "");
    item.selected = on;
    if (on) targets.push(item);
  });
  el.dispatchEvent(new CustomEvent("selection-change", { bubbles: true, composed: true, detail: { selectedItems: targets } }));
};

describe("FuroUi5SegmentedButton", () => {
  // ───────────────────────────────────────────────────────────────────────
  // element identity & a11y
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y", () => {
    let el: FuroUi5SegmentedButton;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-segmented-button accessible-name="name" data-testid="test">
          <ui5-segmented-button-item data-id="a">A</ui5-segmented-button-item>
          <ui5-segmented-button-item data-id="b">B</ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-segmented-button element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-segmented-button");
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // no binding — plain inherited behavior still works
  // ───────────────────────────────────────────────────────────────────────
  describe("without data binding", () => {
    afterEach(() => { fixtureCleanup(); });

    it("works as a plain segmented button (default selectionMode Single)", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`
        <furo-ui5-segmented-button accessible-name="map">
          <ui5-segmented-button-item data-id="map" selected>Map</ui5-segmented-button-item>
          <ui5-segmented-button-item data-id="sat">Satellite</ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      `);
      assert.equal(el.selectionMode, "Single");
      assert.deepEqual(selectedIds(el), ["map"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // ENUM binding (single)
  // ───────────────────────────────────────────────────────────────────────
  describe("ENUM binding", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="material"></furo-ui5-segmented-button>`);
    });

    afterEach(() => { fixtureCleanup(); });

    it("sets selectionMode=Single and builds one item per enum key (UNSPECIFIED omitted)", () => {
      el.bindData(createEnum(Materials.MATERIALS_GLASS));
      assert.equal(el.selectionMode, "Single");
      assert.equal(items(el).length, Object.keys(Materials).length - 1);
      assert.notInclude(
        items(el).map(i => i.getAttribute("data-id")),
        "MATERIALS_UNSPECIFIED"
      );
    });

    it("renders the bound enum value as the selected item", () => {
      el.bindData(createEnum(Materials.MATERIALS_GLASS));
      assert.deepEqual(selectedIds(el), ["MATERIALS_GLASS"]);
    });

    it("propagates ENUM.value changes to the selection", () => {
      const model = createEnum(Materials.MATERIALS_GLASS);
      el.bindData(model);
      model.value = Materials.MATERIALS_WOOD;
      assert.deepEqual(selectedIds(el), ["MATERIALS_WOOD"]);
    });

    it("writes the clicked item back to the enum model", () => {
      const model = createEnum(Materials.MATERIALS_GLASS);
      el.bindData(model);
      selectByIds(el, ["MATERIALS_METALS"]);
      assert.equal(model.value, Materials.MATERIALS_METALS);
    });

    it("adopts the first item and writes it back when the model is empty", () => {
      const model = createEnum();
      el.bindData(model);
      const firstId = items(el)[0]?.getAttribute("data-id") ?? "";
      assert.notEqual(firstId, "");
      assert.deepEqual(selectedIds(el), [firstId]);
      assert.equal(model.value, firstId);
    });

    it("includes UNSPECIFIED when showUnspecifiedOption is set", () => {
      el.showUnspecifiedOption = true;
      el.bindData(createEnum(Materials.MATERIALS_GLASS));
      assert.include(
        items(el).map(i => i.getAttribute("data-id")),
        "MATERIALS_UNSPECIFIED"
      );
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // STRING binding (single) with an optionList
  // ───────────────────────────────────────────────────────────────────────
  describe("STRING binding (single)", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choice"></furo-ui5-segmented-button>`);
    });

    afterEach(() => { fixtureCleanup(); });

    it("sets selectionMode=Single and selects the item matching the bound value", () => {
      el.optionList = OPTIONS;
      el.bindData(createString("2"));
      assert.equal(el.selectionMode, "Single");
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("propagates STRING.value changes to the selection", () => {
      const model = createString("2");
      el.optionList = OPTIONS;
      el.bindData(model);
      model.value = "3";
      assert.deepEqual(selectedIds(el), ["3"]);
    });

    it("writes the clicked item id back to the STRING model", () => {
      const model = createString("2");
      el.optionList = OPTIONS;
      el.bindData(model);
      selectByIds(el, ["1"]);
      assert.equal(model.value, "1");
    });

    it("adopts the first item when the model value is empty", () => {
      const model = createString("");
      el.bindData(model);
      el.optionList = OPTIONS;
      assert.deepEqual(selectedIds(el), ["1"]);
      assert.equal(model.value, "1");
    });

    it("clear() empties the model and selection on the next sync", () => {
      const model = createString("2");
      el.optionList = OPTIONS;
      el.bindData(model);
      el.clear();
      assert.equal(model.value, "");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // ARRAY binding (multiple)
  // ───────────────────────────────────────────────────────────────────────
  describe("ARRAY binding (multiple)", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choices"></furo-ui5-segmented-button>`);
    });

    afterEach(() => { fixtureCleanup(); });

    it("sets selectionMode=Multiple and selects every bound id", () => {
      el.optionList = OPTIONS;
      el.bindData(stringArray(["1", "3"]));
      assert.equal(el.selectionMode, "Multiple");
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });

    it("does not auto-select when the array is empty", () => {
      el.optionList = OPTIONS;
      el.bindData(stringArray([]));
      assert.deepEqual(selectedIds(el), []);
    });

    it("writes the selected ids back to the array", () => {
      const model = stringArray(["1"]);
      el.optionList = OPTIONS;
      el.bindData(model);
      selectByIds(el, ["2", "3"]);
      assert.deepEqual(model.__toLiteral().sort(), ["2", "3"]);
    });

    it("reflects array mutations in the selection", () => {
      const model = stringArray(["1"]);
      el.optionList = OPTIONS;
      el.bindData(model);
      model.push("2");
      assert.deepEqual(selectedIds(el).sort(), ["1", "2"]);
    });

    it("clear() empties the bound array", () => {
      const model = stringArray(["1", "2"]);
      el.optionList = OPTIONS;
      el.bindData(model);
      el.clear();
      assert.equal(model.length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // model-driven state & rebinding
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state & rebinding", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choice"></furo-ui5-segmented-button>`);
    });

    afterEach(() => { fixtureCleanup(); });

    it("UI writes go to the new model only after rebind", () => {
      const a = createString("1");
      const b = createString("1");
      el.optionList = OPTIONS;
      el.bindData(a);
      el.bindData(b);
      selectByIds(el, ["3"]);
      assert.equal(b.value, "3");
      assert.equal(a.value, "1");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = createString("2");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
