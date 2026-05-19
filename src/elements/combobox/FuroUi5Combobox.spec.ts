/**
 * Spec for `FuroUi5Combobox`. Mirrors the `[TEMPLATE]` describe-blocks from
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` (the canonical reference
 * spec for furo-ui5 binding elements) with these adaptations:
 *   - tag / class swap to `furo-ui5-combobox` / `FuroUi5Combobox`
 *   - FAT attribute list reduced to `placeholder` (the only attribute combobox maps)
 *   - constraints test drops `max_length` (combobox doesn't apply it)
 *   - lifecycle block skipped (combobox registers no listeners in lifecycle hooks)
 * Blocks tagged `[element-specific]` cover combobox-only surface: `clear()`,
 * `bindOptions()` / `optionsModel`, and `renderOptionList()` / `optionList`.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { ARRAY, STRING, StringValue, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Combobox } from "./FuroUi5Combobox";

import type { SelectOption } from "@/lib/open-models/signatures";
import { CubeOptions, type ICubeOptions } from "@/models/furoui5test/cube/CubeOptions";
import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5Combobox", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Combobox;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-combobox accessible-name="name" data-testid="test"></furo-ui5-combobox> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-combobox element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-combobox");
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
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
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
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("initial");
      el.bindData(model);
      assert.equal(el.value, "initial");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "from-model";
      assert.equal(el.value, "from-model");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "fat-initial" });
      el.bindData(model);
      assert.equal(el.value, "fat-initial");
    });

    it("propagates FuroFatString value changes to el.value", () => {
      const model = createFatString();
      el.bindData(model);
      model.value = "fat-update";
      assert.equal(el.value, "fat-update");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("sv-initial");
      el.bindData(model);
      assert.equal(el.value, "sv-initial");
    });

    it("propagates StringValue value changes to el.value", () => {
      const model = new StringValue();
      el.bindData(model);
      model.value = "sv-update";
      assert.equal(el.value, "sv-update");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on user input", () => {
      const model = new STRING();
      el.bindData(model);
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });

    it("writes to a FuroFatString model on user input", () => {
      const model = createFatString();
      el.bindData(model);
      setInputValue(el, "typed");
      assert.equal(model.value.value, "typed");
    });

    it("writes to a StringValue model on user input", () => {
      const model = new StringValue();
      el.bindData(model);
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });

    it("writes on a bare 'input' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "input-only";
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, "input-only");
    });

    it("writes on a bare 'change' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "change-only";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "change-only");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = new STRING();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = new STRING();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("applies FAT 'readonly' label on bind", () => {
      const model = createFatString({ labels: { readonly: true } });
      el.bindData(model);
      assert.equal(el.readonly, true);
    });

    it("applies FAT 'required' label on bind", () => {
      const model = createFatString({ labels: { required: true } });
      el.bindData(model);
      assert.equal(el.required, true);
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatString({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = new STRING();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = new STRING();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new STRING();
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
  // [TEMPLATE] FAT attribute mapping — combobox only maps `placeholder`.
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'placeholder' FAT attribute to el.placeholder", async () => {
      const el: FuroUi5Combobox = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
      const model = createFatString({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "from-fat");
    });

    it("pre-set HTML 'placeholder' wins over FAT attribute", async () => {
      const el: FuroUi5Combobox = await fixture(html`<furo-ui5-combobox placeholder="local"></furo-ui5-combobox>`);
      const model = createFatString({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "local");
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5Combobox = await fixture(
        html`<furo-ui5-combobox accessible-name="preset"></furo-ui5-combobox>`,
      );
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5Combobox = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new STRING("A");
      const modelB = new STRING("B");
      el.bindData(modelA);
      assert.equal(el.value, "A");
      el.bindData(modelB);
      assert.equal(el.value, "B");
      modelA.value = "A-after";
      assert.equal(el.value, "B");
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new STRING("A");
      const modelB = new STRING("B");
      el.bindData(modelA);
      el.bindData(modelB);
      setInputValue(el, "typed");
      assert.equal(modelB.value, "typed");
      assert.equal(modelA.value, "A");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new STRING("init");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("clear() [element-specific]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("empties the value and writes it back to the model", () => {
      const model = new STRING("not empty");
      el.bindData(model);
      assert.equal(el.value, "not empty");
      el.clear();
      assert.equal(el.value, "");
      assert.equal(model.value, "");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] bindOptions() / optionsModel
  // ───────────────────────────────────────────────────────────────────────
  describe("bindOptions / optionsModel [element-specific]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("bindOptions(undefined) is a no-op", () => {
      el.bindOptions(undefined);
      assert.equal(el.optionsModel, undefined);
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 0);
    });

    it("renders one furo-ui5-cb-item per option from the model", () => {
      const options: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "1", displayName: "First" },
        { id: "2", displayName: "Second" },
      ]);
      el.bindOptions(options);
      const items = el.querySelectorAll("furo-ui5-cb-item");
      assert.equal(items.length, 2);
      assert.strictEqual(el.optionsModel, options);
    });

    it("re-renders when the underlying array changes (array-changed)", () => {
      const options: ARRAY<CubeOptions, ICubeOptions> = ARRAY.Builder(CubeOptions, [
        { id: "1", displayName: "First" },
        { id: "2", displayName: "Second" },
      ]);
      el.bindOptions(options);
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 2);
      options.add({ id: "3", displayName: "Third" }, true);
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 3);
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
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 2);
      el.bindOptions(optionsB);
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 3);
      // mutating the detached optionsA must not re-render through this element
      optionsA.add({ id: "stray", displayName: "Stray" }, true);
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 3);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] renderOptionList() / optionList
  // ───────────────────────────────────────────────────────────────────────
  describe("renderOptionList / optionList [element-specific]", () => {
    let el: FuroUi5Combobox;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-combobox></furo-ui5-combobox>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renderOptionList(undefined) is a no-op", () => {
      el.renderOptionList(undefined);
      assert.equal(el.optionList, undefined);
      assert.equal(el.querySelectorAll("furo-ui5-cb-item").length, 0);
    });

    it("renders one furo-ui5-cb-item per SelectOption with text + additionalText", () => {
      const list: SelectOption[] = [
        { id: "1", displayName: "A", additionalText: "extra" },
        { id: "2", displayName: "B" },
      ];
      el.renderOptionList(list);
      const items = el.querySelectorAll("furo-ui5-cb-item");
      assert.equal(items.length, 2);
      assert.equal((items[0] as HTMLElement & { text?: string }).text, "A");
      assert.equal((items[0] as HTMLElement & { additionalText?: string }).additionalText, "extra");
      assert.equal((items[1] as HTMLElement & { text?: string }).text, "B");
      assert.strictEqual(el.optionList, list);
    });
  });
});
