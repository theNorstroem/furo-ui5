/**
 * Spec for furo-ui5-color-picker, adapted from the `FuroUi5TextInput` template.
 *
 * `[TEMPLATE]` blocks exercise the universal binding contract (identity/a11y,
 * default model, model → UI, UI → model, rebinding). ColorPicker has no FAT
 * attributes, no value-state and no readonly/required surface, so the
 * `model-driven state`, `FAT attribute mapping` and `lifecycle` blocks from the
 * template are intentionally omitted. `[element-specific]` covers the
 * accessible-name fallback and the change-only write-back.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { STRING, StringValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5ColorPicker } from "./FuroUi5ColorPicker";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5ColorPicker", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ColorPicker;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-color-picker accessible-name="name" data-testid="test"></furo-ui5-color-picker> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-color-picker element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-color-picker");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(100);
      // ColorPicker embeds UI5's hue/alpha sliders, whose inner `<div role="slider">`
      // scale-progress elements omit `aria-valuenow` / `aria-label` — a known
      // upstream UI5 limitation we cannot fix from the binding wrapper (the same
      // rules are ignored in the Slider spec).
      await assert.isAccessible(el, {
        ignoredRules: ["aria-input-field-name", "aria-required-attr"],
      });
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Default model state
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5ColorPicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-picker></furo-ui5-color-picker>`);
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
  // [TEMPLATE] Model → UI value sync — bind a model, mutate its value, the
  // component reflects the new color. Runs against all three supported types.
  // ColorPicker stores `value` verbatim (no normalization on set).
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5ColorPicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-picker></furo-ui5-color-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("#ff0000");
      el.bindData(model);
      assert.equal(el.value, "#ff0000");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "#00ff00";
      assert.equal(el.value, "#00ff00");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "#0000ff" });
      el.bindData(model);
      assert.equal(el.value, "#0000ff");
    });

    it("propagates FuroFatString value changes to el.value", () => {
      const model = createFatString();
      el.bindData(model);
      model.value = "#123456";
      assert.equal(el.value, "#123456");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("#abcdef");
      el.bindData(model);
      assert.equal(el.value, "#abcdef");
    });

    it("propagates StringValue value changes to el.value", () => {
      const model = new StringValue();
      el.bindData(model);
      model.value = "#fedcba";
      assert.equal(el.value, "#fedcba");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync — ColorPicker writes back only on the
  // "change" event (it has no "input" event).
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5ColorPicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-picker></furo-ui5-color-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on a change event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "#111111";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "#111111");
    });

    it("writes to a FuroFatString model on a change event", () => {
      const model = createFatString();
      el.bindData(model);
      el.value = "#222222";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value.value, "#222222");
    });

    it("writes to a StringValue model on a change event", () => {
      const model = new StringValue();
      el.bindData(model);
      el.value = "#333333";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "#333333");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5ColorPicker;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-picker></furo-ui5-color-picker>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new STRING("#aaaaaa");
      const modelB = new STRING("#bbbbbb");
      el.bindData(modelA);
      assert.equal(el.value, "#aaaaaa");
      el.bindData(modelB);
      assert.equal(el.value, "#bbbbbb");
      modelA.value = "#cccccc";
      assert.equal(el.value, "#bbbbbb");
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new STRING("#aaaaaa");
      const modelB = new STRING("#bbbbbb");
      el.bindData(modelA);
      el.bindData(modelB);
      el.value = "#dddddd";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(modelB.value, "#dddddd");
      assert.equal(modelA.value, "#aaaaaa");
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new STRING("#eeeeee");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      el.value = "#0a0a0a";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "#0a0a0a");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] accessible-name fallback to the model __label
  // ───────────────────────────────────────────────────────────────────────
  describe("accessible-name fallback [element-specific]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5ColorPicker = await fixture(html`<furo-ui5-color-picker accessible-name="preset"></furo-ui5-color-picker>`);
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5ColorPicker = await fixture(html`<furo-ui5-color-picker></furo-ui5-color-picker>`);
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });
});
