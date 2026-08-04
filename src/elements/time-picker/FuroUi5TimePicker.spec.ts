/**
 * Spec for `FuroUi5TimePicker`, adapted from the `FuroUi5DatePicker` template.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract; blocks tagged
 * `[element-specific]` cover the time picker's own surface: the two supported model types
 * (`primitives.STRING` and `google.type.TimeOfDay`) and `clear()`.
 *
 * The bound value is always a 24-hour `HH:mm:ss` string.
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

import type { FuroUi5TimePicker } from "./FuroUi5TimePicker";

import { TimeOfDay } from "@/models/google/type/TimeOfDay";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5TimePicker", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5TimePicker;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-time-picker accessible-name="name" data-testid="test"></furo-ui5-time-picker> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-time-picker element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-time-picker");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    it("pins the value format to 24h HH:mm:ss", () => {
      assert.equal(el.valueFormat, "HH:mm:ss");
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
    let el: FuroUi5TimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-time-picker></furo-ui5-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default google.type.TimeOfDay model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "google.type.TimeOfDay");
    });

    it("renders an empty value for an all-zero TimeOfDay", () => {
      el.bindData(new TimeOfDay());
      assert.equal(el.value, "");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Model → UI value sync (STRING + TimeOfDay)
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [element-specific]", () => {
    let el: FuroUi5TimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-time-picker></furo-ui5-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders an initial STRING value on bind", () => {
      const model = new STRING("11:42:35");
      el.bindData(model);
      assert.equal(el.value, "11:42:35");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "08:15:30";
      assert.equal(el.value, "08:15:30");
    });

    it("renders an initial TimeOfDay value on bind", () => {
      const model = new TimeOfDay({ hours: 11, minutes: 42, seconds: 35 });
      el.bindData(model);
      assert.equal(el.value, "11:42:35");
    });

    it("zero-pads TimeOfDay components", () => {
      const model = new TimeOfDay({ hours: 8, minutes: 5, seconds: 9 });
      el.bindData(model);
      assert.equal(el.value, "08:05:09");
    });

    it("propagates TimeOfDay field changes to el.value", () => {
      const model = new TimeOfDay({ hours: 11, minutes: 42, seconds: 35 });
      el.bindData(model);
      model.hours = 6;
      model.minutes = 7;
      model.seconds = 8;
      assert.equal(el.value, "06:07:08");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] UI → model value sync (STRING + TimeOfDay)
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [element-specific]", () => {
    let el: FuroUi5TimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-time-picker></furo-ui5-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on user input", () => {
      const model = new STRING();
      el.bindData(model);
      setInputValue(el, "08:15:30");
      assert.equal(model.value, "08:15:30");
    });

    it("writes to a TimeOfDay model on user input", () => {
      const model = new TimeOfDay();
      el.bindData(model);
      setInputValue(el, "08:15:30");
      assert.equal(model.hours.value, 8);
      assert.equal(model.minutes.value, 15);
      assert.equal(model.seconds.value, 30);
    });

    it("zeroes a TimeOfDay model when the value is cleared", () => {
      const model = new TimeOfDay({ hours: 11, minutes: 42, seconds: 35 });
      el.bindData(model);
      setInputValue(el, "");
      assert.equal(model.hours.value, 0);
      assert.equal(model.minutes.value, 0);
      assert.equal(model.seconds.value, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / value-state / constraints
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5TimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-time-picker></furo-ui5-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = new TimeOfDay();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = new TimeOfDay();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = new TimeOfDay();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = new TimeOfDay();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new TimeOfDay();
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
    let el: FuroUi5TimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-time-picker></furo-ui5-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new STRING("01:01:01");
      const modelB = new STRING("02:02:02");
      el.bindData(modelA);
      assert.equal(el.value, "01:01:01");
      el.bindData(modelB);
      assert.equal(el.value, "02:02:02");
      modelA.value = "03:03:03";
      assert.equal(el.value, "02:02:02");
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new STRING("01:01:01");
      const modelB = new STRING("02:02:02");
      el.bindData(modelA);
      el.bindData(modelB);
      setInputValue(el, "08:15:30");
      assert.equal(modelB.value, "08:15:30");
      assert.equal(modelA.value, "01:01:01");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new STRING("01:01:01");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      setInputValue(el, "08:15:30");
      assert.equal(model.value, "08:15:30");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("element-specific methods [element-specific]", () => {
    let el: FuroUi5TimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-time-picker></furo-ui5-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("clear() empties the value and writes it back to the model", () => {
      const model = new STRING("11:42:35");
      el.bindData(model);
      assert.equal(el.value, "11:42:35");
      el.clear();
      assert.equal(el.value, "");
      assert.equal(model.value, "");
    });
  });
});
