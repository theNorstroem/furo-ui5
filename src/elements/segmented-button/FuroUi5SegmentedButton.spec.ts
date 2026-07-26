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

import { ARRAY, ENUM, STRING, StringValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5SegmentedButton } from "./FuroUi5SegmentedButton";

import type { IdentifiableList, OptionLikeList, SelectOption } from "@/lib/open-models/signatures";
import { FuroFatString, type IFuroFatString } from "@/models";
import { CubeOptions, type ICubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { Materials } from "@/models/furoui5test/cube/Materials";
import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const createEnum = (initial?: Materials): ENUM<Materials> => new ENUM<Materials>(initial, Materials, Materials.MATERIALS_UNSPECIFIED);

const createString = (initial?: string): STRING => {
  const s = new STRING();
  if (initial !== undefined) s.value = initial;
  return s;
};

const stringArray = (items: string[]): ARRAY<STRING, string> => ARRAY.Builder(STRING, items);

const fatArray = (values: string[]): ARRAY<FuroFatString, IFuroFatString> => ARRAY.Builder(FuroFatString, values.map(value => ({ value })));

/** An `IdentifiableList` built from the `CubeOptions` test model. */
const optionArray = (init: ICubeOptions[]): IdentifiableList => ARRAY.Builder(CubeOptions, init);

/** An `OptionLikeList` for the `optionsModel` / `bindOptions` binding. */
const optionsModel = (init: ICubeOptions[]): OptionLikeList => ARRAY.Builder(CubeOptions, init);

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

/** The `data-id` of every rendered item, in DOM order. */
const itemIds = (el: FuroUi5SegmentedButton): string[] => items(el).map(i => i.getAttribute("data-id") ?? "");

/** The label of every rendered item, in DOM order. */
const itemLabels = (el: FuroUi5SegmentedButton): string[] => items(el).map(i => i.textContent.trim());

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

    it("stops reacting to the old model after rebind", () => {
      const a = createString("1");
      const b = createString("2");
      el.optionList = OPTIONS;
      el.bindData(a);
      el.bindData(b);
      a.value = "3";
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("switches from Single to Multiple when an ARRAY is bound", () => {
      el.optionList = OPTIONS;
      el.bindData(createString("2"));
      assert.equal(el.selectionMode, "Single");
      el.bindData(stringArray(["1", "3"]));
      assert.equal(el.selectionMode, "Multiple");
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });

    it("switches from Multiple back to Single when a STRING is bound", () => {
      el.optionList = OPTIONS;
      el.bindData(stringArray(["1", "3"]));
      el.bindData(createString("2"));
      assert.equal(el.selectionMode, "Single");
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("rebuilds the items when an ENUM is bound over an optionList", () => {
      el.optionList = OPTIONS;
      el.bindData(createString("2"));
      el.bindData(createEnum(Materials.MATERIALS_WOOD));
      assert.notInclude(itemIds(el), "1");
      assert.deepEqual(selectedIds(el), ["MATERIALS_WOOD"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // default model state
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("should be ok", () => {
      assert.isOk(el);
      assert.instanceOf(el, FuroUi5SegmentedButton);
    });

    it("exposes a default STRING model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "primitives.STRING");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });

    it("exposes no optionList / optionsModel before they are set", () => {
      assert.isUndefined(el.optionList);
      assert.isUndefined(el.optionsModel);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // FuroFatString binding (single)
  // ───────────────────────────────────────────────────────────────────────
  describe("FuroFatString binding (single)", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choice"></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("selects the item matching the bound FAT value", () => {
      el.bindData(createFatString({ value: "2" }));
      assert.equal(el.selectionMode, "Single");
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("propagates FAT value changes to the selection", () => {
      const model = createFatString({ value: "2" });
      el.bindData(model);
      model.value = "3";
      assert.deepEqual(selectedIds(el), ["3"]);
    });

    it("writes the clicked item id back into the FAT wrapper", () => {
      const model = createFatString({ value: "2" });
      el.bindData(model);
      selectByIds(el, ["1"]);
      assert.equal(model.value.value, "1");
    });

    it("adopts the first item and writes it back when the FAT value is empty", () => {
      const model = createFatString();
      el.bindData(model);
      assert.deepEqual(selectedIds(el), ["1"]);
      assert.equal(model.value.value, "1");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // StringValue binding (single)
  // ───────────────────────────────────────────────────────────────────────
  describe("StringValue binding (single)", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choice"></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("selects the item matching the bound value", () => {
      el.bindData(new StringValue("3"));
      assert.deepEqual(selectedIds(el), ["3"]);
    });

    it("propagates StringValue changes to the selection", () => {
      const model = new StringValue("3");
      el.bindData(model);
      model.value = "1";
      assert.deepEqual(selectedIds(el), ["1"]);
    });

    it("writes the clicked item id back to the StringValue model", () => {
      const model = new StringValue("3");
      el.bindData(model);
      selectByIds(el, ["2"]);
      assert.equal(model.value, "2");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // ARRAY<FuroFatString> binding (multiple)
  // ───────────────────────────────────────────────────────────────────────
  describe("ARRAY<FuroFatString> binding (multiple)", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choices"></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("selects every bound FAT value", () => {
      el.bindData(fatArray(["1", "3"]));
      assert.equal(el.selectionMode, "Multiple");
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });

    it("writes the selection back as FAT literals", () => {
      const model = fatArray(["1"]);
      el.bindData(model);
      selectByIds(el, ["2", "3"]);
      assert.deepEqual(
        model.map(item => item.value.toString()).sort(),
        ["2", "3"]
      );
    });

    it("keeps the FAT item shape on write-back for an initially empty array", () => {
      const model = fatArray([]);
      el.bindData(model);
      selectByIds(el, ["2"]);
      assert.equal(model.length, 1);
      assert.equal(model.at(0)?.__meta.typeName, "furo.fat.String");
      assert.equal(model.at(0)?.value.toString(), "2");
    });

    it("reflects array mutations in the selection", () => {
      const model = fatArray(["1"]);
      el.bindData(model);
      model.push({ value: "3" });
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // IdentifiableList binding (multiple)
  // ───────────────────────────────────────────────────────────────────────
  describe("IdentifiableList binding (multiple)", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choices"></furo-ui5-segmented-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("selects the items whose id is in the bound list", () => {
      el.optionList = OPTIONS;
      el.bindData(optionArray([{ id: "1", displayName: "One" }, { id: "3", displayName: "Three" }]));
      assert.equal(el.selectionMode, "Multiple");
      assert.deepEqual(selectedIds(el).sort(), ["1", "3"]);
    });

    it("writes back the full option literal when an optionsModel is bound", () => {
      el.optionsModel = optionsModel([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
      const model = optionArray([]);
      el.bindData(model);
      selectByIds(el, ["2"]);
      assert.equal(model.length, 1);
      // the displayName is preserved because the literal is taken from the optionsModel
      assert.equal(model.at(0)?.id.toString(), "2");
      assert.equal(model.at(0)?.displayName.toString(), "Two");
    });

    it("falls back to a bare { id } literal without an optionsModel", () => {
      el.optionList = OPTIONS;
      const model = optionArray([]);
      el.bindData(model);
      selectByIds(el, ["2"]);
      assert.equal(model.length, 1);
      assert.equal(model.at(0)?.id.toString(), "2");
      assert.equal(model.at(0)?.displayName.toString(), "");
    });

    it("clear() empties the bound list", () => {
      el.optionList = OPTIONS;
      const model = optionArray([{ id: "1", displayName: "One" }]);
      el.bindData(model);
      el.clear();
      assert.equal(model.length, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // optionsModel / bindOptions
  // ───────────────────────────────────────────────────────────────────────
  describe("optionsModel binding", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choice"></furo-ui5-segmented-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("builds one item per option, with label, icon and tooltip", () => {
      el.optionsModel = optionsModel([
        { id: "1", displayName: "One", icon: "accept", tooltip: "the first" },
        { id: "2", displayName: "Two" },
      ]);
      assert.deepEqual(itemIds(el), ["1", "2"]);
      assert.deepEqual(itemLabels(el), ["One", "Two"]);
      const [first] = items(el) as unknown as { icon: string; tooltip: string }[];
      assert.equal(first.icon, "accept");
      assert.equal(first.tooltip, "the first");
    });

    it("exposes the bound options model through the getter", () => {
      const options = optionsModel([{ id: "1", displayName: "One" }]);
      el.optionsModel = options;
      assert.strictEqual(el.optionsModel, options);
    });

    it("bindOptions(undefined) is a no-op", () => {
      el.optionsModel = optionsModel([{ id: "1", displayName: "One" }]);
      el.bindOptions(undefined);
      assert.deepEqual(itemIds(el), ["1"]);
    });

    it("bindOptions(sameModel) is a no-op", () => {
      const options = optionsModel([{ id: "1", displayName: "One" }]);
      el.optionsModel = options;
      el.optionsModel = options;
      assert.deepEqual(itemIds(el), ["1"]);
    });

    it("appends an item when the options array grows", () => {
      const options = optionsModel([{ id: "1", displayName: "One" }]);
      el.optionsModel = options;
      options.push({ id: "2", displayName: "Two" });
      assert.deepEqual(itemIds(el), ["1", "2"]);
    });

    it("removes an item when the options array shrinks", () => {
      const options = optionsModel([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
      el.optionsModel = options;
      options.delete(0);
      assert.deepEqual(itemIds(el), ["2"]);
    });

    it("reuses the existing item element for an unchanged id", () => {
      const options = optionsModel([{ id: "1", displayName: "One" }]);
      el.optionsModel = options;
      const before = items(el)[0];
      options.push({ id: "2", displayName: "Two" });
      assert.strictEqual(items(el)[0], before);
    });

    it("re-orders the items when a differently ordered model is bound", () => {
      el.optionsModel = optionsModel([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
      el.optionsModel = optionsModel([
        { id: "2", displayName: "Two" },
        { id: "1", displayName: "One" },
      ]);
      assert.deepEqual(itemIds(el), ["2", "1"]);
    });

    it("re-applies the model selection onto freshly built items", () => {
      const model = createString("2");
      el.bindData(model);
      el.optionsModel = optionsModel([
        { id: "1", displayName: "One" },
        { id: "2", displayName: "Two" },
      ]);
      assert.deepEqual(selectedIds(el), ["2"]);
    });

    it("follows a later displayName change of a bound option", () => {
      const options = optionsModel([{ id: "1", displayName: "One" }]);
      el.optionsModel = options;
      const first = options.at(0);
      assert.isOk(first);
      first.displayName.value = "Uno";
      assert.deepEqual(itemLabels(el), ["Uno"]);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // optionList
  // ───────────────────────────────────────────────────────────────────────
  describe("optionList", () => {
    let el: FuroUi5SegmentedButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-segmented-button accessible-name="choice"></furo-ui5-segmented-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders one item per option and stores the list", () => {
      el.optionList = OPTIONS;
      assert.deepEqual(itemIds(el), ["1", "2", "3"]);
      assert.deepEqual(itemLabels(el), ["One", "Two", "Three"]);
      assert.strictEqual(el.optionList, OPTIONS);
    });

    it("maps icon and tooltip onto the items", () => {
      el.optionList = [{ id: "1", displayName: "One", icon: "accept", tooltip: "the first" }];
      const [first] = items(el) as unknown as { icon: string; tooltip: string }[];
      assert.equal(first.icon, "accept");
      assert.equal(first.tooltip, "the first");
    });

    it("replaces the items when a different list is set", () => {
      el.optionList = OPTIONS;
      el.optionList = [{ id: "9", displayName: "Nine" }];
      assert.deepEqual(itemIds(el), ["9"]);
    });

    it("reuses the item element of an id that survives the replacement", () => {
      el.optionList = OPTIONS;
      const before = items(el)[1];
      el.optionList = [
        { id: "2", displayName: "Two" },
        { id: "9", displayName: "Nine" },
      ];
      assert.strictEqual(items(el)[0], before);
    });

    it("setting optionList to undefined is a no-op", () => {
      el.optionList = OPTIONS;
      el.optionList = undefined;
      assert.deepEqual(itemIds(el), ["1", "2", "3"]);
      assert.strictEqual(el.optionList, OPTIONS);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // model-driven state
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    const plain = async (): Promise<FuroUi5SegmentedButton> => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      return el;
    };

    it("applies the FAT 'disabled' label on bind", async () => {
      const el = await plain();
      el.bindData(createFatString({ value: "1", labels: { disabled: true } }));
      assert.isTrue(el.hasAttribute("disabled"));
    });

    it("applies the FAT 'readonly' label on bind", async () => {
      const el = await plain();
      el.bindData(createFatString({ value: "1", labels: { readonly: true } }));
      assert.isTrue(el.hasAttribute("readonly"));
    });

    it("applies the FAT 'required' label on bind", async () => {
      const el = await plain();
      el.bindData(createFatString({ value: "1", labels: { required: true } }));
      assert.isTrue(el.hasAttribute("required"));
    });

    it("removes a FAT label again when it flips to false", async () => {
      const el = await plain();
      const model = createFatString({ value: "1", labels: { disabled: true } });
      el.bindData(model);
      assert.isTrue(el.hasAttribute("disabled"));
      model.labels.get("disabled")!.value = false;
      assert.isFalse(el.hasAttribute("disabled"));
    });

    it("a pre-set HTML attribute wins over the FAT label", async () => {
      // `readAttributes()` runs in the constructor, so attributes present in the markup are protected
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button disabled></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      const model = createFatString({ value: "1", labels: { disabled: false } });
      el.bindData(model);
      assert.isTrue(el.hasAttribute("disabled"));
    });

    it("applies the required field constraint on bind", async () => {
      const el = await plain();
      const model = createString("1");
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ required: true });
      el.bindData(model);
      assert.isTrue(el.hasAttribute("required"));
    });

    it("falls back to the model __label for accessibleName", async () => {
      const el = await plain();
      const model = createString("1");
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });

    it("a pre-set accessible-name wins over the model __label", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button accessible-name="preset"></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      el.bindData(createString("1"));
      assert.equal(el.accessibleName, "preset");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // selectedId accessor & clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("selectedId accessor & clear()", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("selectedId reports and drives the selection", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      el.selectedId = "3";
      assert.equal(el.selectedId, "3");
      assert.deepEqual(selectedIds(el), ["3"]);
    });

    it("selectedId is empty when nothing is selected", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      el.selectedId = "does-not-exist";
      assert.equal(el.selectedId, "");
    });

    it("falls back to the item label for items without a data-id", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`
        <furo-ui5-segmented-button>
          <ui5-segmented-button-item>Map</ui5-segmented-button-item>
          <ui5-segmented-button-item>Satellite</ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      `);
      el.selectedId = "Satellite";
      assert.equal(el.selectedId, "Satellite");
    });

    it("adopts an author-declared item by its label when the model is empty", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`
        <furo-ui5-segmented-button>
          <ui5-segmented-button-item>Map</ui5-segmented-button-item>
          <ui5-segmented-button-item>Satellite</ui5-segmented-button-item>
        </furo-ui5-segmented-button>
      `);
      const model = createString("");
      el.bindData(model);
      assert.equal(model.value, "Map");
    });

    it("clear() also drops the UI selection in single mode", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      el.bindData(createString("2"));
      el.clear();
      assert.deepEqual(selectedIds(el), []);
      assert.equal(el.selectedId, "");
    });

    it("clear() drops the model entries and the UI selection in multiple mode", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      const model = stringArray(["1", "2"]);
      el.bindData(model);
      el.clear();
      assert.equal(model.length, 0);
      // `_writeIdsToModel` detaches the model listener around the mutation, so `clear()` has to
      // drop the item selection itself — regression guard for that explicit resync.
      assert.deepEqual(selectedIds(el), []);
    });

    it("a subsequent model change resynchronises the UI after clear()", async () => {
      const el: FuroUi5SegmentedButton = await fixture(html`<furo-ui5-segmented-button></furo-ui5-segmented-button>`);
      el.optionList = OPTIONS;
      const model = stringArray(["1", "2"]);
      el.bindData(model);
      el.clear();
      // the listener is re-attached by `_writeIdsToModel`, so the next mutation repairs the UI
      model.push("3");
      assert.deepEqual(selectedIds(el), ["3"]);
    });
  });
});
