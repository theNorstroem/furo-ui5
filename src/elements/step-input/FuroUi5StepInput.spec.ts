/**
 * Spec for `FuroUi5StepInput`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract.
 *
 * StepInput-specific notes vs. the TextInput template:
 *   - The tag is `furo-ui5-step` (not `furo-ui5-step-input`).
 *   - The value property is `value` (number, not string).
 *   - The default model is `FLOAT`, but the spec drives the fully-supported
 *     numeric trifecta INT32 / FuroFatInt32 / Int32Value (the subset for which
 *     `NumericReaderWriters` has both readers and writers).
 *   - StepInput composes both `FieldNodeValueState` and `ReadonlyState`, so
 *     value-state and `parent-readonly-set/unset` subtests are kept.
 *   - The only FAT-mapped attribute is `placeholder`.
 *   - No element-specific public methods (UI5 StepInput's `_incValue` /
 *     `_decValue` / `_modifyValue` are private), so the `[element-specific]`
 *     block from the template is omitted.
 *   - No lifecycle-bound listeners (listeners are registered inside `bindData`),
 *     so the `[TEMPLATE] lifecycle` block is omitted per the test-element skill.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { INT32, Int32Value, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5StepInput } from "./FuroUi5StepInput";

import { createFatInt32 } from "@/util/test-helpers/createFatInt32";
import { delay } from "@/util/test-helpers/delay";
import { setNumberInputValue } from "@/util/test-helpers/setNumberInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5StepInput", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5StepInput;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-step-input accessible-name="name" data-testid="test"></furo-ui5-step-input> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-step element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-step-input");
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
    let el: FuroUi5StepInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default FLOAT model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "primitives.FLOAT");
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
  // Drives the trifecta of model types fully supported by NumericReaderWriters
  // in both directions: primitives.INT32, furo.fat.Int32, google.protobuf.Int32Value.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5StepInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial INT32 value on bind", () => {
      const model = new INT32(7);
      el.bindData(model);
      assert.equal(el.value, 7);
    });

    it("propagates INT32.value changes to el.value", () => {
      const model = new INT32();
      el.bindData(model);
      model.value = 12;
      assert.equal(el.value, 12);
    });

    it("renders initial FuroFatInt32 value on bind", () => {
      const model = createFatInt32({ value: 7 });
      el.bindData(model);
      assert.equal(el.value, 7);
    });

    it("propagates FuroFatInt32 value changes to el.value", () => {
      const model = createFatInt32();
      el.bindData(model);
      model.value = 12;
      assert.equal(el.value, 12);
    });

    it("renders initial Int32Value value on bind", () => {
      const model = new Int32Value(7);
      el.bindData(model);
      assert.equal(el.value, 7);
    });

    it("propagates Int32Value value changes to el.value", () => {
      const model = new Int32Value();
      el.bindData(model);
      model.value = 12;
      assert.equal(el.value, 12);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5StepInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to an INT32 model on user input", () => {
      const model = new INT32();
      el.bindData(model);
      setNumberInputValue(el, 42);
      assert.equal(model.value, 42);
    });

    it("writes to a FuroFatInt32 model on user input", () => {
      const model = createFatInt32();
      el.bindData(model);
      setNumberInputValue(el, 42);
      assert.equal(model.value.value, 42);
    });

    it("writes to an Int32Value model on user input", () => {
      const model = new Int32Value();
      el.bindData(model);
      setNumberInputValue(el, 42);
      assert.equal(model.value, 42);
    });

    it("writes on a bare 'input' event", () => {
      const model = new INT32();
      el.bindData(model);
      el.value = 17;
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, 17);
    });

    it("writes on a bare 'change' event", () => {
      const model = new INT32();
      el.bindData(model);
      el.value = 23;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, 23);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5StepInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = new INT32();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = new INT32();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("applies FAT 'readonly' label on bind", () => {
      const model = createFatInt32({ labels: { readonly: true } });
      el.bindData(model);
      assert.equal(el.readonly, true);
    });

    it("applies FAT 'required' label on bind", () => {
      const model = createFatInt32({ labels: { required: true } });
      el.bindData(model);
      assert.equal(el.required, true);
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatInt32({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = new INT32();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = new INT32();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new INT32();
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
  // FuroUi5StepInput maps only "placeholder" (`new FatHandler(this, ["placeholder"])`).
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'placeholder' FAT attribute to el.placeholder", async () => {
      const el: FuroUi5StepInput = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
      const model = createFatInt32({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "from-fat");
    });

    it("pre-set HTML 'placeholder' wins over FAT attribute", async () => {
      const el: FuroUi5StepInput = await fixture(html`<furo-ui5-step-input placeholder="local"></furo-ui5-step-input>`);
      const model = createFatInt32({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "local");
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5StepInput = await fixture(html`<furo-ui5-step-input accessible-name="preset"></furo-ui5-step-input>`);
      const model = createFatInt32();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5StepInput = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
      const model = createFatInt32();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5StepInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-step-input></furo-ui5-step-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new INT32(1);
      const modelB = new INT32(2);
      el.bindData(modelA);
      assert.equal(el.value, 1);
      el.bindData(modelB);
      assert.equal(el.value, 2);
      modelA.value = 9;
      assert.equal(el.value, 2);
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new INT32(1);
      const modelB = new INT32(2);
      el.bindData(modelA);
      el.bindData(modelB);
      setNumberInputValue(el, 42);
      assert.equal(modelB.value, 42);
      assert.equal(modelA.value, 1);
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new INT32(0);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // double-bind would have wired the listener twice; a single setNumberInputValue
      // should still produce a single, consistent write.
      setNumberInputValue(el, 42);
      assert.equal(model.value, 42);
    });
  });
});
