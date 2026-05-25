/**
 * Spec for `FuroUi5DatePicker`, adapted from the `FuroUi5TextInput` template.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * (model → UI, UI → model, readonly / value-state, constraints, rebinding,
 * lifecycle, a11y). Blocks tagged `[element-specific]` cover the date picker's
 * own surface: `min`/`max` date constraints and `clear()`.
 *
 * The picker binds two date-only model types: `primitives.STRING` (ISO date) and
 * `google.type.Date` (`XDate`). Its value is always handled as ISO `YYYY-MM-DD`.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { STRING, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5DatePicker } from "./FuroUi5DatePicker";

import { XDate } from "@/models/google/type/Date";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5DatePicker", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5DatePicker;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-date-picker accessible-name="name" data-testid="test"></furo-ui5-date-picker> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-date-picker element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-date-picker");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    it("pins the value format to ISO so value/minDate/maxDate stay ISO", () => {
      assert.equal(el.valueFormat, "yyyy-MM-dd");
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
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default google.type.Date model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "google.type.Date");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model → UI value sync — runs against both supported model types.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("2020-12-31");
      el.bindData(model);
      assert.equal(el.value, "2020-12-31");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "2021-06-15";
      assert.equal(el.value, "2021-06-15");
    });

    it("renders initial google.type.Date value on bind", () => {
      const model = new XDate({ year: 2020, month: 12, day: 31 });
      el.bindData(model);
      assert.equal(el.value, "2020-12-31");
    });

    it("propagates google.type.Date field changes to el.value", () => {
      const model = new XDate();
      el.bindData(model);
      model.year = 2021;
      model.month = 6;
      model.day = 15;
      assert.equal(el.value, "2021-06-15");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on user input", () => {
      const model = new STRING();
      el.bindData(model);
      setInputValue(el, "2020-12-31");
      assert.equal(model.value, "2020-12-31");
    });

    it("writes to a google.type.Date model on user input", () => {
      const model = new XDate();
      el.bindData(model);
      setInputValue(el, "2020-12-31");
      assert.equal(model.year.value, 2020);
      assert.equal(model.month.value, 12);
      assert.equal(model.day.value, 31);
    });

    it("writes on a bare 'input' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "2019-01-01";
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, "2019-01-01");
    });

    it("writes on a bare 'change' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "2019-01-01";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "2019-01-01");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / value-state / constraints
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
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
  // [element-specific] min / max date constraints → minDate / maxDate
  // ───────────────────────────────────────────────────────────────────────
  describe("min / max date constraints [element-specific]", () => {
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'min' constraint to el.minDate as ISO date", () => {
      const model = new STRING();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ min: "1999-12-31" });
      el.bindData(model);
      assert.equal(el.minDate, "1999-12-31");
    });

    it("applies 'max' constraint to el.maxDate as ISO date", () => {
      const model = new STRING();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ max: "2020-01-01" });
      el.bindData(model);
      assert.equal(el.maxDate, "2020-01-01");
    });

    it("applies both 'min' and 'max' constraints", () => {
      const model = new STRING();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ min: "1999-12-31", max: "2020-01-01" });
      el.bindData(model);
      assert.equal(el.minDate, "1999-12-31");
      assert.equal(el.maxDate, "2020-01-01");
    });

    it("normalizes a full-timestamp constraint value down to the ISO date", () => {
      const model = new STRING();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ min: "1999-12-31T23:59:59.000Z" });
      el.bindData(model);
      assert.equal(el.minDate, "1999-12-31");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new STRING("2000-01-01");
      const modelB = new STRING("2010-02-02");
      el.bindData(modelA);
      assert.equal(el.value, "2000-01-01");
      el.bindData(modelB);
      assert.equal(el.value, "2010-02-02");
      modelA.value = "1990-03-03";
      assert.equal(el.value, "2010-02-02");
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new STRING("2000-01-01");
      const modelB = new STRING("2010-02-02");
      el.bindData(modelA);
      el.bindData(modelB);
      setInputValue(el, "2020-12-31");
      assert.equal(modelB.value, "2020-12-31");
      assert.equal(modelA.value, "2000-01-01");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new STRING("2000-01-01");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      setInputValue(el, "2020-12-31");
      assert.equal(model.value, "2020-12-31");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("element-specific methods [element-specific]", () => {
    let el: FuroUi5DatePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-picker></furo-ui5-date-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("clear() empties the value and writes it back to the model", () => {
      const model = new STRING("2020-12-31");
      el.bindData(model);
      assert.equal(el.value, "2020-12-31");
      el.clear();
      assert.equal(el.value, "");
      assert.equal(model.value, "");
    });
  });
});
