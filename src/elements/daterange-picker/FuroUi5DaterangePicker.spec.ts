/**
 * Spec for `FuroUi5DaterangePicker`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts`.
 *
 * Daterange-picker-specific notes:
 *   - The bound value is the formatted range `string` (the picker holds the typed
 *     value verbatim on programmatic set), so it binds via `StringReaderWriters`
 *     on the `value` property — exactly like a text input.
 *   - No `FatHandler` (the picker has no FAT-mapped attributes), so the
 *     `FAT attribute mapping` block and FAT-label assertions are omitted.
 *   - It composes `FieldNodeValueState` + `ReadonlyState` (inherited from the
 *     DatePicker/Input base), so value-state, parent-readonly and the
 *     required/read_only constraints are asserted.
 *   - `clear()` is the only element-specific method.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { STRING, StringValue, ValueState } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5DaterangePicker } from "./FuroUi5DaterangePicker";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5DaterangePicker", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5DaterangePicker;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-daterange-picker accessible-name="name" data-testid="test"></furo-ui5-daterange-picker> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-daterange-picker element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-daterange-picker");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5DaterangePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-daterange-picker></furo-ui5-daterange-picker>`);
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

  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5DaterangePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-daterange-picker></furo-ui5-daterange-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("Jan 1, 2020 - Jan 31, 2020");
      el.bindData(model);
      assert.equal(el.value, "Jan 1, 2020 - Jan 31, 2020");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "Feb 1, 2020 - Feb 28, 2020";
      assert.equal(el.value, "Feb 1, 2020 - Feb 28, 2020");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "Mar 1, 2020 - Mar 31, 2020" });
      el.bindData(model);
      assert.equal(el.value, "Mar 1, 2020 - Mar 31, 2020");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("Apr 1, 2020 - Apr 30, 2020");
      el.bindData(model);
      assert.equal(el.value, "Apr 1, 2020 - Apr 30, 2020");
    });
  });

  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5DaterangePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-daterange-picker></furo-ui5-daterange-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on user input", () => {
      const model = new STRING();
      el.bindData(model);
      setInputValue(el, "Jan 1, 2020 - Jan 31, 2020");
      assert.equal(model.value, "Jan 1, 2020 - Jan 31, 2020");
    });

    it("writes to a FuroFatString model on user input", () => {
      const model = createFatString();
      el.bindData(model);
      setInputValue(el, "Jan 1, 2020 - Jan 31, 2020");
      assert.equal(model.value.value, "Jan 1, 2020 - Jan 31, 2020");
    });

    it("writes on a bare 'change' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "change-only";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "change-only");
    });
  });

  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5DaterangePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-daterange-picker></furo-ui5-daterange-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set / unset to el.readonly", () => {
      const model = new STRING();
      el.bindData(model);
      assert.equal(el.readonly, false);
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

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new STRING();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      assert.equal(el.readonly, true);
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5DaterangePicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-daterange-picker></furo-ui5-daterange-picker>`);
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

    it("bindData(sameModel) is a no-op", () => {
      const model = new STRING("init");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });

  describe("element-specific methods [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("clear() empties the value and writes it back to the model", async () => {
      const el: FuroUi5DaterangePicker = await fixture(html`<furo-ui5-daterange-picker></furo-ui5-daterange-picker>`);
      const model = new STRING("Jan 1, 2020 - Jan 31, 2020");
      el.bindData(model);
      assert.equal(el.value, "Jan 1, 2020 - Jan 31, 2020");
      el.clear();
      assert.equal(el.value, "");
      assert.equal(model.value, "");
    });
  });
});
