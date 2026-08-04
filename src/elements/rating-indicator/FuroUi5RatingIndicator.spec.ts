/**
 * Spec for `FuroUi5RatingIndicator`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` and the closest sibling
 * spec `src/elements/number-input/FuroUi5NumberInput.spec.ts`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract.
 *
 * RatingIndicator-specific notes vs. the template:
 *   - The tag is `furo-ui5-rating-indicator`.
 *   - The bound UI value is `value: number`. Internally the binding writes
 *     `modelValue` (a custom getter/setter that wraps `value`).
 *   - The default model is `FLOAT`. We cover `FLOAT` (primitive),
 *     `FuroFatFloat` (FAT wrapper) and `Int32Value` (google.protobuf wrapper).
 *     `Int32Value` is used because `NumericReaderWriters` only registers a
 *     reader/writer for `google.protobuf.Int32Value` — there is no entry for
 *     `google.protobuf.FloatValue` even though the type union accepts it.
 *   - Both `input` and `change` events write back to the model (RatingIndicator
 *     wires both → `writeToModel`); there is no separate "revert on change"
 *     behaviour like the NumberInput has.
 *   - **FAT attribute mapping block omitted**: FuroUi5RatingIndicator constructs
 *     `new FatHandler(this, [])` with an empty attribute list — only the default
 *     labels (`hidden | readonly | disabled | required`) apply. Label coverage
 *     stays in the model-driven-state block.
 *   - `[element-specific]` blocks cover the custom `modelValue` getter/setter
 *     (which proxies UI5 `value`) and the custom `valueState` setter (which
 *     mirrors the assigned state onto the `value-state` host attribute, driving
 *     the host CSS rules for `None | Negative | Critical | Positive | Information`).
 *   - No lifecycle-bound listeners (everything is wired inside `bindData`), so
 *     the `[TEMPLATE] lifecycle` block is omitted per the test-element skill.
 */
import "@/Assets";
import "./index";

import { FLOAT, Int32Value, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5RatingIndicator } from "./FuroUi5RatingIndicator";

import { createFatFloat } from "@/util/test-helpers/createFatFloat";
import { delay } from "@/util/test-helpers/delay";
import { setNumberInputValue } from "@/util/test-helpers/setNumberInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5RatingIndicator", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5RatingIndicator;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-rating-indicator accessible-name="name" data-testid="test"></furo-ui5-rating-indicator> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-rating-indicator element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-rating-indicator");
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
  // [TEMPLATE] Default model state — default is FLOAT (see FuroUi5RatingIndicator.ts).
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
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
  // [TEMPLATE] Model → UI value sync — drives FLOAT (primitive),
  // FuroFatFloat (FAT wrapper) and Int32Value (google.protobuf wrapper, the
  // only google.protobuf wrapper actually mapped in NumericReaderWriters).
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial FLOAT value on bind", () => {
      const model = new FLOAT(3);
      el.bindData(model);
      assert.equal(el.value, 3);
    });

    it("propagates FLOAT.value changes to el.value", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.value = 4;
      assert.equal(el.value, 4);
    });

    it("renders initial FuroFatFloat value on bind", () => {
      const model = createFatFloat({ value: 3 });
      el.bindData(model);
      assert.equal(el.value, 3);
    });

    it("propagates FuroFatFloat value changes to el.value", () => {
      const model = createFatFloat();
      el.bindData(model);
      model.value = 4;
      assert.equal(el.value, 4);
    });

    it("renders initial Int32Value value on bind", () => {
      const model = new Int32Value(3);
      el.bindData(model);
      assert.equal(el.value, 3);
    });

    it("propagates Int32Value value changes to el.value", () => {
      const model = new Int32Value();
      el.bindData(model);
      model.value = 4;
      assert.equal(el.value, 4);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync — both `input` and `change` write to
  // the model (RatingIndicator listens to both → writeToModel).
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a FLOAT model on user input", () => {
      const model = new FLOAT();
      el.bindData(model);
      setNumberInputValue(el, 4);
      assert.equal(model.value, 4);
    });

    it("writes to a FuroFatFloat model on user input", () => {
      const model = createFatFloat();
      el.bindData(model);
      setNumberInputValue(el, 4);
      assert.equal(model.value.value, 4);
    });

    it("writes to an Int32Value model on user input", () => {
      const model = new Int32Value();
      el.bindData(model);
      setNumberInputValue(el, 4);
      assert.equal(model.value, 4);
    });

    it("writes on a bare 'input' event", () => {
      const model = new FLOAT();
      el.bindData(model);
      el.value = 2;
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, 2);
    });

    it("writes on a bare 'change' event", () => {
      const model = new FLOAT();
      el.bindData(model);
      el.value = 5;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, 5);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / FAT labels / value-state /
  // constraints. RatingIndicator's handleConstraints honors `required`,
  // `read_only`, and `max_length` (mapped to `max`).
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = new FLOAT();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("applies FAT 'readonly' label on bind", () => {
      const model = createFatFloat({ labels: { readonly: true } });
      el.bindData(model);
      assert.equal(el.readonly, true);
    });

    it("applies FAT 'required' label on bind", () => {
      const model = createFatFloat({ labels: { required: true } });
      el.bindData(model);
      assert.equal(el.required, true);
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatFloat({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only, max_length) on bind", () => {
      const model = new FLOAT();
      // monkey-patch __getConstraints so the element sees a parent-supplied constraint set
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
        max_length: 7,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      assert.equal(el.readonly, true);
      assert.equal(el.max, 7);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new FLOAT(1);
      const modelB = new FLOAT(2);
      el.bindData(modelA);
      assert.equal(el.value, 1);
      el.bindData(modelB);
      assert.equal(el.value, 2);
      modelA.value = 5;
      assert.equal(el.value, 2);
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new FLOAT(1);
      const modelB = new FLOAT(2);
      el.bindData(modelA);
      el.bindData(modelB);
      setNumberInputValue(el, 4);
      assert.equal(modelB.value, 4);
      assert.equal(modelA.value, 1);
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new FLOAT(0);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // double-bind would have wired the listener twice; a single setNumberInputValue
      // should still produce a single, consistent write.
      setNumberInputValue(el, 4);
      assert.equal(model.value, 4);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] `modelValue` getter/setter — a thin number proxy over
  // the UI5 RatingIndicator `value` property, exposed so the
  // NumericReaderWriters can target a named numeric field on the element.
  // ───────────────────────────────────────────────────────────────────────
  describe("modelValue getter/setter [element-specific]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("setting modelValue updates el.value", () => {
      el.modelValue = 3;
      assert.equal(el.value, 3);
    });

    it("setting el.value is reflected by the modelValue getter", () => {
      el.value = 4;
      assert.equal(el.modelValue, 4);
    });

    it("readers write through modelValue to drive el.value (FLOAT round-trip)", () => {
      const model = new FLOAT(2);
      el.bindData(model);
      assert.equal(el.modelValue, 2);
      assert.equal(el.value, 2);
      model.value = 5;
      assert.equal(el.modelValue, 5);
      assert.equal(el.value, 5);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Custom `valueState` setter — assigns the requested
  // state and mirrors it onto the `value-state` host attribute that the
  // component's host-scoped CSS rules key off
  // (None / Negative / Critical / Positive / Information).
  // ───────────────────────────────────────────────────────────────────────
  describe("valueState setter [element-specific]", () => {
    let el: FuroUi5RatingIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-rating-indicator></furo-ui5-rating-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("sets the value-state attribute when assigned 'Negative'", () => {
      el.valueState = ValueState.Negative;
      assert.equal(el.valueState, ValueState.Negative);
      assert.equal(el.getAttribute("value-state"), "Negative");
    });

    it("sets the value-state attribute when assigned 'Critical'", () => {
      el.valueState = ValueState.Critical;
      assert.equal(el.getAttribute("value-state"), "Critical");
    });

    it("sets the value-state attribute when assigned 'Positive'", () => {
      el.valueState = ValueState.Positive;
      assert.equal(el.getAttribute("value-state"), "Positive");
    });

    it("sets the value-state attribute when assigned 'Information'", () => {
      el.valueState = ValueState.Information;
      assert.equal(el.getAttribute("value-state"), "Information");
    });

    it("sets the value-state attribute when assigned 'None'", () => {
      el.valueState = ValueState.Negative;
      el.valueState = ValueState.None;
      assert.equal(el.valueState, ValueState.None);
      assert.equal(el.getAttribute("value-state"), "None");
    });

    it("model-driven state-changed flows through the custom setter", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Positive, ["good"]);
      assert.equal(el.valueState, ValueState.Positive);
      assert.equal(el.getAttribute("value-state"), "Positive");
    });
  });
});
