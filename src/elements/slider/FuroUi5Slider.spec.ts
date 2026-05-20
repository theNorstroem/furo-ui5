/**
 * Spec for `FuroUi5Slider`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` and the closest sibling
 * `src/elements/number-input/FuroUi5NumberInput.spec.ts`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract.
 *
 * Slider-specific notes vs. the TextInput / NumberInput template:
 *   - The value property is a `number` (not a string).
 *   - The default model is `FLOAT`. The spec drives one representative of each
 *     model category supported by `NumericReaderWriters`: primitive (`FLOAT`),
 *     FAT (`FuroFatFloat`) and google.protobuf wrapper (`Int32Value` — the only
 *     google.protobuf numeric wrapper actually wired in `NumericReaderWriters`).
 *   - `FuroUi5Slider` composes only `ReadonlyState` (no `FieldNodeValueState`).
 *     The underlying UI5 `Slider` has neither a `readonly` nor a `required`
 *     property; `ReadonlyState` therefore falls back to driving `disabled`.
 *     Consequently:
 *       * `parent-readonly-set/unset` toggles `el.disabled` (not `el.readonly`).
 *       * FAT `disabled` label is asserted; FAT `readonly`/`required` labels
 *         are written as raw HTML attributes only and have no observable
 *         property, so they are not asserted.
 *       * No value-state subtests.
 *   - `handleConstraints` honors only `read_only` (→ `disabled`), `minimum`
 *     (→ `min`) and `maximum` (→ `max`).
 *   - FAT-mapped attributes: `min`, `max`, `step`, `labelInterval`,
 *     `showTickmarks`, `showTooltip`.
 *   - No element-specific public methods beyond inherited UI5 Slider, so the
 *     `[element-specific]` block is omitted.
 *   - No lifecycle-bound listeners (listeners are registered inside `bindData`),
 *     so the `[TEMPLATE] lifecycle` block is omitted per the test-element skill.
 */
import "@/Assets";
import "./index";

import { FLOAT, INT32, Int32Value } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Slider } from "./FuroUi5Slider";

import { createFatFloat } from "@/util/test-helpers/createFatFloat";
import { delay } from "@/util/test-helpers/delay";
import { setNumberInputValue } from "@/util/test-helpers/setNumberInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5Slider", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Slider;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-slider accessible-name="name" min="0" max="100" value="50" data-testid="test"></furo-ui5-slider> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-slider element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-slider");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(300);
      // The UI5 SliderScale's inner `<div role="slider">` (used by RangeSlider)
      // does not set `aria-valuenow` / `aria-label` when rendered by the basic
      // single-handle Slider — a known upstream UI5 limitation we cannot fix
      // from the binding wrapper. The handle itself is correctly labeled and
      // carries `aria-valuenow`. Ignore those two scale-progress-only rules.
      await assert.isAccessible(el, {
        ignoredRules: ["aria-input-field-name", "aria-required-attr"],
      });
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Default model state — Slider's default model is FLOAT
  // (see FuroUi5Slider.ts: `private _model: ... = new FLOAT()`).
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5Slider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default FLOAT model", () => {
      assert.isOk(el.model);
      assert.instanceOf(el.model, FLOAT);
      assert.equal(el.model.__meta.typeName, "primitives.FLOAT");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync — covers FLOAT, FuroFatFloat, Int32Value.
  // UI5 Slider stores el.value as a number; the reader sets it directly.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5Slider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-slider min="0" max="100"></furo-ui5-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial FLOAT value on bind", () => {
      const model = new FLOAT(42);
      el.bindData(model);
      assert.equal(el.value, 42);
    });

    it("propagates FLOAT.value changes to el.value", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.value = 7;
      assert.equal(el.value, 7);
    });

    it("renders initial FuroFatFloat value on bind", () => {
      const model = createFatFloat({ value: 42 });
      el.bindData(model);
      assert.equal(el.value, 42);
    });

    it("propagates FuroFatFloat value changes to el.value", () => {
      const model = createFatFloat();
      el.bindData(model);
      model.value = 7;
      assert.equal(el.value, 7);
    });

    it("renders initial Int32Value value on bind", () => {
      const model = new Int32Value(42);
      el.bindData(model);
      assert.equal(el.value, 42);
    });

    it("propagates Int32Value value changes to el.value", () => {
      const model = new Int32Value();
      el.bindData(model);
      model.value = 7;
      assert.equal(el.value, 7);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync — moving the slider fires both
  // `input` and `change`; both are wired to `writeToModel`.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5Slider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-slider min="0" max="100"></furo-ui5-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a FLOAT model on user input", () => {
      const model = new FLOAT();
      el.bindData(model);
      setNumberInputValue(el, 42);
      assert.equal(model.value, 42);
    });

    it("writes to a FuroFatFloat model on user input", () => {
      const model = createFatFloat();
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
      const model = new FLOAT();
      el.bindData(model);
      el.value = 17;
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, 17);
    });

    it("writes on a bare 'change' event", () => {
      const model = new FLOAT();
      el.bindData(model);
      el.value = 23;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, 23);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / FAT labels / constraints.
  //
  // Slider has neither `readonly` nor `required` properties; `ReadonlyState`
  // therefore drives `disabled` instead, and `handleConstraints` only honors
  // `read_only` (→ `disabled`), `minimum` (→ `min`) and `maximum` (→ `max`).
  // No value-state subtests because the slider has no `valueState` property
  // and `FuroUi5Slider` does not compose `FieldNodeValueState`.
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5Slider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.disabled", () => {
      const model = new FLOAT();
      el.bindData(model);
      assert.equal(el.disabled, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.disabled, true);
    });

    it("applies parent-readonly-unset to el.disabled", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.disabled, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.disabled, false);
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatFloat({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("applies field constraint 'read_only' as el.disabled on bind", () => {
      const model = new FLOAT();
      // monkey-patch __getConstraints so the element sees a parent-supplied constraint set
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        read_only: true,
      });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("applies field constraints 'minimum' and 'maximum' on bind", () => {
      const model = new FLOAT();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        minimum: 5,
        maximum: 50,
      });
      el.bindData(model);
      assert.equal(el.min, 5);
      assert.equal(el.max, 50);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] FAT attribute mapping
  //
  // FuroUi5Slider maps: `min`, `max`, `step`, `labelInterval`,
  // `showTickmarks`, `showTooltip`. Numeric attrs are JSON-parsed; boolean
  // attrs are JSON-parsed booleans (see FatHandler.applyAttributes).
  //
  // Pre-set HTML attribute precedence is only asserted for `min` / `max` /
  // `step` — these single-word attrs have an identical HTML attribute name
  // and FAT-key. `labelInterval` / `showTickmarks` / `showTooltip` have
  // dash-cased HTML attribute names (`label-interval`, `show-tickmarks`,
  // `show-tooltip`) and camelCase FAT keys; `FatHandler.readAttributes()`
  // stores only the dash-cased HTML names in `_initialAttributes`, so the
  // pre-set-HTML check does not match these camelCase FAT keys and FAT
  // would overwrite a pre-set HTML value. The base behavior of applying
  // the FAT attribute is still asserted for those three.
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'min' FAT attribute to el.min", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { min: "10" } });
      el.bindData(model);
      assert.equal(el.min, 10);
    });

    it("pre-set HTML 'min' wins over FAT attribute", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider min="3"></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { min: "10" } });
      el.bindData(model);
      assert.equal(el.min, 3);
    });

    it("applies 'max' FAT attribute to el.max", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { max: "80" } });
      el.bindData(model);
      assert.equal(el.max, 80);
    });

    it("pre-set HTML 'max' wins over FAT attribute", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider max="55"></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { max: "80" } });
      el.bindData(model);
      assert.equal(el.max, 55);
    });

    it("applies 'step' FAT attribute to el.step", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { step: "5" } });
      el.bindData(model);
      assert.equal(el.step, 5);
    });

    it("pre-set HTML 'step' wins over FAT attribute", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider step="2"></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { step: "5" } });
      el.bindData(model);
      assert.equal(el.step, 2);
    });

    it("applies 'labelInterval' FAT attribute to el.labelInterval", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { labelInterval: "4" } });
      el.bindData(model);
      assert.equal(el.labelInterval, 4);
    });

    it("applies 'showTickmarks' FAT attribute to el.showTickmarks", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { showTickmarks: "true" } });
      el.bindData(model);
      assert.equal(el.showTickmarks, true);
    });

    it("applies 'showTooltip' FAT attribute to el.showTooltip", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat({ attributes: { showTooltip: "true" } });
      el.bindData(model);
      assert.equal(el.showTooltip, true);
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider accessible-name="preset"></furo-ui5-slider>`);
      const model = createFatFloat();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5Slider = await fixture(html`<furo-ui5-slider></furo-ui5-slider>`);
      const model = createFatFloat();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5Slider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-slider min="0" max="100"></furo-ui5-slider>`);
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
