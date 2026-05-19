/**
 * Spec for `FuroUi5ProgressIndicator` (tag `furo-ui5-progress-indicator`).
 * This element is a **read-only display** binding element: it mirrors a numeric
 * model value onto the inherited UI5 `value` property and never writes back to
 * the model.
 *
 * Applied [TEMPLATE] blocks: element identity & a11y, default model state,
 * model -> UI value sync (FLOAT / FuroFatFloat / Int32Value), model-driven
 * state (only `state-changed` -> `valueState` via `FieldNodeValueState`),
 * rebinding cleanliness.
 *
 * Omitted [TEMPLATE] blocks (with reasons):
 *   - `UI -> model value sync` - there is no UI affordance for the user to
 *     change the progress value; the indicator is display-only (the source
 *     wires an empty writers Map into `ModelReaderWriter`).
 *   - `FAT attribute mapping` - no `FatHandler` is constructed; the element
 *     does not map any FAT attributes onto component properties.
 *   - Model-driven `parent-readonly-set/unset`, FAT `readonly|required|disabled`
 *     labels, and `__getConstraints` (`required`/`read_only`/`max_length`) are
 *     intentionally NOT exercised: the element does not compose
 *     `ReadonlyState` and the inherited UI5 `ProgressIndicator` is not a form
 *     control - it exposes neither `readonly` nor `required` nor `disabled`
 *     nor `min`/`max`. Only `FieldNodeValueState` is composed, so `valueState`
 *     is the single model-driven surface we can assert.
 *   - `lifecycle` - listeners are attached in `bindData` (not in
 *     `connectedCallback`); their cleanup is exercised by the rebinding block.
 *
 * Numeric-type coverage notes: we cover `FLOAT` (primitive), `FuroFatFloat`
 * (FAT wrapper) and `Int32Value` (google.protobuf wrapper). `Int32Value` is
 * the only `google.protobuf.*` wrapper registered in `NumericReaderWriters` -
 * `google.protobuf.FloatValue` is intentionally not in the readers map even
 * though the binding type-union accepts it. Same caveat is documented in the
 * rating-indicator spec.
 */
import "@/Assets";
import "./index";

import { FLOAT, Int32Value, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5ProgressIndicator } from "./FuroUi5ProgressIndicator";

import { createFatFloat } from "@/util/test-helpers/createFatFloat";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5ProgressIndicator", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ProgressIndicator;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-progress-indicator accessible-name="name" data-testid="test"></furo-ui5-progress-indicator>
      `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-progress-indicator element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-progress-indicator");
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
  // [TEMPLATE] Default model state - default is FLOAT (see source).
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5ProgressIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-progress-indicator></furo-ui5-progress-indicator>`);
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
  // [TEMPLATE] Model -> UI value sync - drives FLOAT (primitive),
  // FuroFatFloat (FAT wrapper) and Int32Value (google.protobuf wrapper, the
  // only google.protobuf wrapper actually mapped in NumericReaderWriters).
  // ───────────────────────────────────────────────────────────────────────
  describe("model -> UI value sync [TEMPLATE]", () => {
    let el: FuroUi5ProgressIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-progress-indicator></furo-ui5-progress-indicator>`);
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
      model.value = 75;
      assert.equal(el.value, 75);
    });

    it("renders initial FuroFatFloat value on bind", () => {
      const model = createFatFloat({ value: 42 });
      el.bindData(model);
      assert.equal(el.value, 42);
    });

    it("propagates FuroFatFloat value changes to el.value", () => {
      const model = createFatFloat();
      el.bindData(model);
      model.value = 75;
      assert.equal(el.value, 75);
    });

    it("renders initial Int32Value value on bind", () => {
      const model = new Int32Value(42);
      el.bindData(model);
      assert.equal(el.value, 42);
    });

    it("propagates Int32Value value changes to el.value", () => {
      const model = new Int32Value();
      el.bindData(model);
      model.value = 75;
      assert.equal(el.value, 75);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state - only `state-changed` is wired (via
  // `FieldNodeValueState`). Readonly/required/disabled/min/max are NOT
  // exposed by the inherited UI5 ProgressIndicator, and the element does
  // not compose `ReadonlyState` or `FatHandler` - so those facets of the
  // template are intentionally omitted (see file header).
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5ProgressIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-progress-indicator></furo-ui5-progress-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("propagates state-changed -> valueState + valueStateMessage div", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("propagates state-changed for ValueState.Critical", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Critical, ["careful"]);
      assert.equal(el.valueState, ValueState.Critical);
    });

    it("propagates state-changed for ValueState.Positive", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Positive, ["good"]);
      assert.equal(el.valueState, ValueState.Positive);
    });

    it("propagates state-changed for ValueState.Information", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Information, ["info"]);
      assert.equal(el.valueState, ValueState.Information);
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = new FLOAT();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5ProgressIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-progress-indicator></furo-ui5-progress-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new FLOAT(10);
      const modelB = new FLOAT(20);
      el.bindData(modelA);
      assert.equal(el.value, 10);
      el.bindData(modelB);
      assert.equal(el.value, 20);
      modelA.value = 99;
      // Stays in the new model's state (20), unaffected by the old model.
      assert.equal(el.value, 20);
    });

    it("the new model drives el.value after rebind", () => {
      const modelA = new FLOAT(10);
      const modelB = new FLOAT(20);
      el.bindData(modelA);
      el.bindData(modelB);
      modelB.value = 55;
      assert.equal(el.value, 55);
      modelA.value = 99;
      // modelA mutation must not touch el.value (still driven by modelB).
      assert.equal(el.value, 55);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new FLOAT(0);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      model.value = 33;
      assert.equal(el.value, 33);
    });
  });
});
