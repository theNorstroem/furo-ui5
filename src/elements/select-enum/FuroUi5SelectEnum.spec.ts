/**
 * Spec for `FuroUi5SelectEnum`. Mirrors the `[TEMPLATE]` describe-blocks from
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` (the canonical reference
 * spec for furo-ui5 binding elements) with these adaptations:
 *   - tag / class swap to `furo-ui5-select-enum` / `FuroUi5SelectEnum`
 *   - the only supported model type is `ENUM<T>`; the FAT / google.protobuf
 *     wrapper variants do not apply, so the `model → UI value sync` and
 *     `UI → model value sync` blocks each have a single ENUM variant only
 *   - `default model state` is reshaped: SelectEnum has NO auto-constructed
 *     default model. `el.model` is `undefined` until `bindData(<ENUM>)` is
 *     called, and `bindData(undefined)` is documented as a no-op
 *   - `model-driven state` drops the FAT label tests (no FAT support) and
 *     keeps only `parent-readonly`, value-state, and constraint handling
 *   - `FAT attribute mapping` block is skipped (no `FatHandler` is wired up,
 *     and the element has no mapped FAT attributes)
 *   - `lifecycle` block is skipped (no `connectedCallback`-registered
 *     listeners — listeners are wired in `bindData` and torn down on rebind)
 * Blocks tagged `[element-specific]` cover SelectEnum-only surface:
 * `showUnspecifiedOption` behavior and the auto-build of options from
 * `ENUM.enumArg` keys.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { ENUM, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5SelectEnum } from "./FuroUi5SelectEnum";

import { Materials } from "@/models/furoui5test/cube/Materials";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

/** Fresh ENUM model bound to the `Materials` enum from the furoui5test contracts. */
const createEnum = (initial?: Materials): ENUM<Materials> => new ENUM<Materials>(initial, Materials, Materials.MATERIALS_UNSPECIFIED);

/**
 * Drive a UI-side selection without going through the UI5 popover. Clears
 * the `selected` flag on every option, sets it on the target, and dispatches
 * a bubbling `change` event — which is what `FuroUi5SelectEnum` listens for
 * to push the selection back into the model.
 *
 * NOTE: UI5 populates the default slot via a MutationObserver that fires on a
 * microtask, so callers must `await delay(0)` after `bindData(...)` before
 * calling this helper. Otherwise `el.selectedOption` is `undefined` and the
 * change handler reads no id.
 */
const selectOption = (el: FuroUi5SelectEnum, optionId: string): void => {
  const options = el.querySelectorAll("furo-ui5-option");
  options.forEach((opt) => {
    (opt as HTMLElement & { selected: boolean }).selected = false;
  });
  const target = el.querySelector<HTMLElement & { selected: boolean }>(`furo-ui5-option#${optionId}`);
  assert.isOk(target, `option ${optionId} must exist`);
  target.selected = true;
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};

describe("FuroUi5SelectEnum", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5SelectEnum;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-select-enum accessible-name="name" data-testid="test"></furo-ui5-select-enum> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-select-enum element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-select-enum");
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
  // [TEMPLATE] Default model state — adapted: SelectEnum does not
  // auto-construct a default model. `el.model` is `undefined` until
  // `bindData(<ENUM>)` is called.
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5SelectEnum;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes no default model before bindData is called", () => {
      assert.isUndefined(el.model);
    });

    it("bindData(undefined) is a no-op", () => {
      el.bindData(undefined);
      assert.isUndefined(el.model);
    });

    it("rejects a non-ENUM field node (model stays undefined)", () => {
      // a bound STRING field is not bindable to SelectEnum — the element logs an
      // error and refuses the model.
      const wrong = createEnum();
      // forge a non-ENUM typeName so the bind early-returns
      (wrong as unknown as { __meta: { typeName: string } }).__meta.typeName = "primitives.STRING";
      el.bindData(wrong);
      assert.isUndefined(el.model);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync — ENUM only (no FAT/wrapper variants).
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5SelectEnum;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders the initial ENUM value on bind (option is selected)", () => {
      const model = createEnum(Materials.MATERIALS_GLASS);
      el.bindData(model);
      const selected = el.querySelector<HTMLElement & { selected: boolean }>("furo-ui5-option[id='MATERIALS_GLASS']");
      assert.isOk(selected);
      assert.equal(selected.selected, true);
    });

    it("propagates ENUM.value changes to the selected option", async () => {
      const model = createEnum();
      el.bindData(model);
      // wait one microtask cycle so UI5's MutationObserver populates the
      // `options` slot — `_select(index)` short-circuits while the slot is empty.
      await delay(0);
      model.value = Materials.MATERIALS_WOOD;
      const selected = el.querySelector<HTMLElement & { selected: boolean }>("furo-ui5-option[id='MATERIALS_WOOD']");
      assert.isOk(selected);
      assert.equal(selected.selected, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync — ENUM only.
  // The element listens to a bare `change` event and reads `selectedOption.id`.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5SelectEnum;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes the selected option id back to the ENUM model on change", async () => {
      const model = createEnum();
      el.bindData(model);
      await delay(0);
      selectOption(el, "MATERIALS_METALS");
      assert.equal(model.value, Materials.MATERIALS_METALS);
    });

    it("writes on a bare 'change' event", async () => {
      const model = createEnum();
      el.bindData(model);
      await delay(0);
      const target = el.querySelector<HTMLElement & { selected: boolean }>("furo-ui5-option[id='MATERIALS_PLASTICS']");
      assert.isOk(target);
      el.querySelectorAll("furo-ui5-option").forEach((opt) => {
        (opt as HTMLElement & { selected: boolean }).selected = false;
      });
      target.selected = true;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, Materials.MATERIALS_PLASTICS);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / value-state / constraints.
  // FAT label tests are intentionally omitted: SelectEnum only accepts an
  // `ENUM` field, which has no FAT label surface.
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5SelectEnum;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = createEnum();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = createEnum();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = createEnum();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = createEnum();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = createEnum();
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
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5SelectEnum;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change the selection", () => {
      const modelA = createEnum(Materials.MATERIALS_GLASS);
      const modelB = createEnum(Materials.MATERIALS_WOOD);
      el.bindData(modelA);
      assert.equal(el.querySelector<HTMLElement & { selected: boolean }>("furo-ui5-option[id='MATERIALS_GLASS']")?.selected, true);
      el.bindData(modelB);
      assert.equal(el.querySelector<HTMLElement & { selected: boolean }>("furo-ui5-option[id='MATERIALS_WOOD']")?.selected, true);
      modelA.value = Materials.MATERIALS_METALS;
      // selection still reflects modelB
      assert.equal(el.querySelector<HTMLElement & { selected: boolean }>("furo-ui5-option[id='MATERIALS_WOOD']")?.selected, true);
    });

    it("UI writes go to the new model only after rebind", async () => {
      const modelA = createEnum(Materials.MATERIALS_GLASS);
      const modelB = createEnum(Materials.MATERIALS_WOOD);
      el.bindData(modelA);
      el.bindData(modelB);
      await delay(0);
      selectOption(el, "MATERIALS_PAPER");
      assert.equal(modelB.value, Materials.MATERIALS_PAPER);
      assert.equal(modelA.value, Materials.MATERIALS_GLASS);
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", async () => {
      const model = createEnum(Materials.MATERIALS_GLASS);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      await delay(0);
      selectOption(el, "MATERIALS_RUBBER");
      assert.equal(model.value, Materials.MATERIALS_RUBBER);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] auto-build options from ENUM.enumArg keys
  // ───────────────────────────────────────────────────────────────────────
  describe("auto-build options from ENUM keys [element-specific]", () => {
    let el: FuroUi5SelectEnum;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders one furo-ui5-option per ENUM key on bind", () => {
      const model = createEnum();
      el.bindData(model);
      const options = el.querySelectorAll("furo-ui5-option");
      assert.equal(options.length, Object.keys(Materials).length);
    });

    it("sets each option's id to the enum key", () => {
      const model = createEnum();
      el.bindData(model);
      const ids = Array.from(el.querySelectorAll("furo-ui5-option")).map((opt) => opt.id);
      Object.keys(Materials).forEach((key) => {
        assert.include(ids, key);
      });
    });

    it("removes existing options on rebind (no leftover from prior bind)", () => {
      const a = createEnum();
      el.bindData(a);
      const initialCount = el.querySelectorAll("furo-ui5-option").length;
      // rebind to a different ENUM instance with the same enumArg → option count stable.
      const b = createEnum();
      el.bindData(b);
      assert.equal(el.querySelectorAll("furo-ui5-option").length, initialCount);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] `showUnspecifiedOption` attribute behavior
  // ───────────────────────────────────────────────────────────────────────
  describe("showUnspecifiedOption [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("marks the _UNSPECIFIED option with data-unspecified when showUnspecifiedOption=false", async () => {
      const el: FuroUi5SelectEnum = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
      const model = createEnum();
      el.bindData(model);
      const unspecified = el.querySelector("furo-ui5-option[id='MATERIALS_UNSPECIFIED']");
      assert.isOk(unspecified);
      assert.isTrue(unspecified.hasAttribute("data-unspecified"));
    });

    it("does NOT mark the _UNSPECIFIED option when showUnspecifiedOption=true", async () => {
      const el: FuroUi5SelectEnum = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
      el.showUnspecifiedOption = true;
      const model = createEnum();
      el.bindData(model);
      const unspecified = el.querySelector("furo-ui5-option[id='MATERIALS_UNSPECIFIED']");
      assert.isOk(unspecified);
      assert.isFalse(unspecified.hasAttribute("data-unspecified"));
    });

    it("leaves non-UNSPECIFIED options without the data-unspecified marker", async () => {
      const el: FuroUi5SelectEnum = await fixture(html`<furo-ui5-select-enum></furo-ui5-select-enum>`);
      const model = createEnum();
      el.bindData(model);
      const glass = el.querySelector("furo-ui5-option[id='MATERIALS_GLASS']");
      assert.isOk(glass);
      assert.isFalse(glass.hasAttribute("data-unspecified"));
    });
  });
});
