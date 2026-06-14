/**
 * Spec for `FuroUi5DateTimePicker`, adapted from the `FuroUi5TextInput` / `FuroUi5DatePicker`
 * templates.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract; blocks tagged
 * `[element-specific]` cover the date-time picker's own surface: the four supported model types
 * (`STRING`, `google.protobuf.Timestamp`, `primitives.INT32`, `primitives.INT64`), `min`/`max`
 * date constraints, and `clear()`.
 *
 * The bound value is always a canonical RFC 3339 string; `int32`/`int64` are unix seconds.
 * Test values are Z-terminated (UTC) so assertions are timezone-independent.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { INT32, INT64, STRING, Timestamp, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5DateTimePicker } from "./FuroUi5DateTimePicker";

import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

const ISO = "2017-01-15T01:30:15.000Z";
const ISO_SECONDS = Math.floor(new Date(ISO).getTime() / 1000);

describe("FuroUi5DateTimePicker", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5DateTimePicker;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-date-time-picker accessible-name="name" data-testid="test"></furo-ui5-date-time-picker> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-date-time-picker element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-date-time-picker");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    it("pins the value format to RFC 3339 so value/minDate/maxDate stay ISO", () => {
      assert.equal(el.valueFormat, "yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
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
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default google.protobuf.Timestamp model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "google.protobuf.Timestamp");
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Model → UI value sync — for each supported model type.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [element-specific]", () => {
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders an initial STRING value on bind", () => {
      const model = new STRING(ISO);
      el.bindData(model);
      assert.equal(el.value, ISO);
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = ISO;
      assert.equal(el.value, ISO);
    });

    it("renders an initial Timestamp value on bind", () => {
      const model = new Timestamp(ISO);
      el.bindData(model);
      assert.equal(el.value, ISO);
    });

    it("renders an INT32 (unix seconds) value on bind", () => {
      const model = new INT32();
      model.value = ISO_SECONDS;
      el.bindData(model);
      assert.equal(el.value, ISO);
    });

    it("renders an INT64 (unix seconds) value on bind", () => {
      const model = new INT64();
      model.value = BigInt(ISO_SECONDS);
      el.bindData(model);
      assert.equal(el.value, ISO);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] UI → model value sync — for each supported model type.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [element-specific]", () => {
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    // The date-time picker writes asynchronously: writeToModel resolves UI5's
    // `dateValueAsync` before writing, so assertions await a tick.
    it("writes to a STRING model on user input", async () => {
      const model = new STRING();
      el.bindData(model);
      setInputValue(el, ISO);
      await delay(50);
      assert.equal(model.value, ISO);
    });

    it("writes to a Timestamp model on user input", async () => {
      const model = new Timestamp();
      el.bindData(model);
      setInputValue(el, ISO);
      await delay(50);
      assert.equal(model.value, ISO);
    });

    it("writes unix seconds to an INT32 model on user input", async () => {
      const model = new INT32();
      el.bindData(model);
      setInputValue(el, ISO);
      await delay(50);
      assert.equal(model.value, ISO_SECONDS);
    });

    it("writes unix seconds to an INT64 model on user input", async () => {
      const model = new INT64();
      el.bindData(model);
      setInputValue(el, ISO);
      await delay(50);
      assert.equal(model.value, BigInt(ISO_SECONDS));
    });

    it("writes 0 to an INT32 model when the value is cleared", async () => {
      const model = new INT32();
      model.value = ISO_SECONDS;
      el.bindData(model);
      setInputValue(el, "");
      await delay(50);
      assert.equal(model.value, 0);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / value-state / constraints
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = new Timestamp();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = new Timestamp();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("propagates state-changed → valueState + valueStateMessage div", () => {
      const model = new Timestamp();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      assert.equal(el.valueState, ValueState.Negative);
      const vse = el.querySelector('div[slot="valueStateMessage"].vse');
      assert.isOk(vse, "value-state-message div should exist");
      assert.equal(vse.textContent, "bad");
    });

    it("clears valueState back to None on a None state-changed", () => {
      const model = new Timestamp();
      el.bindData(model);
      model.__setValueState(ValueState.Negative, ["bad"]);
      model.__setValueState(ValueState.None, [""]);
      assert.equal(el.valueState, ValueState.None);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new Timestamp();
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
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("anchors the 'min' constraint to start-of-day on minDate", () => {
      const model = new Timestamp();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ min: "1999-12-31" });
      el.bindData(model);
      assert.equal(el.minDate, "1999-12-31T00:00:00.000Z");
    });

    it("anchors the 'max' constraint to start-of-day on maxDate", () => {
      const model = new Timestamp();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ max: "2020-01-01" });
      el.bindData(model);
      assert.equal(el.maxDate, "2020-01-01T00:00:00.000Z");
    });

    it("applies both 'min' and 'max' constraints", () => {
      const model = new Timestamp();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({ min: "1999-12-31", max: "2020-01-01" });
      el.bindData(model);
      assert.equal(el.minDate, "1999-12-31T00:00:00.000Z");
      assert.equal(el.maxDate, "2020-01-01T00:00:00.000Z");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new STRING("2000-01-01T00:00:00.000Z");
      const modelB = new STRING("2010-02-02T10:20:30.000Z");
      el.bindData(modelA);
      assert.equal(el.value, "2000-01-01T00:00:00.000Z");
      el.bindData(modelB);
      assert.equal(el.value, "2010-02-02T10:20:30.000Z");
      modelA.value = "1990-03-03T00:00:00.000Z";
      assert.equal(el.value, "2010-02-02T10:20:30.000Z");
    });

    it("UI writes go to the new model only after rebind", async () => {
      const modelA = new STRING("2000-01-01T00:00:00.000Z");
      const modelB = new STRING("2010-02-02T10:20:30.000Z");
      el.bindData(modelA);
      el.bindData(modelB);
      setInputValue(el, ISO);
      await delay(50);
      assert.equal(modelB.value, ISO);
      assert.equal(modelA.value, "2000-01-01T00:00:00.000Z");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", async () => {
      const model = new STRING("2000-01-01T00:00:00.000Z");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      setInputValue(el, ISO);
      await delay(50);
      assert.equal(model.value, ISO);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("element-specific methods [element-specific]", () => {
    let el: FuroUi5DateTimePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-date-time-picker></furo-ui5-date-time-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("clear() empties the value and writes it back to the model", async () => {
      const model = new STRING(ISO);
      el.bindData(model);
      assert.equal(el.value, ISO);
      el.clear();
      assert.equal(el.value, "");
      await delay(50);
      assert.equal(model.value, "");
    });
  });
});
