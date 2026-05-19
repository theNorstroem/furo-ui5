/**
 * Spec for `FuroUi5Textarea`, derived from the canonical template at
 * `src/elements/text-input/FuroUi5TextInput.spec.ts`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * and were copied from the text-input spec with only the tag name and class
 * type changed. `[element-specific]` covers this element's own surface
 * (currently just `clear()`).
 *
 * Omitted vs. the text-input template:
 *   - `search-requested debounce` — textarea doesn't emit this event.
 *   - `closePopover()` — textarea doesn't expose this public method.
 *   - `lifecycle` disconnect block — textarea doesn't register listeners in
 *     `connectedCallback`, so there's nothing to verify gets cleaned up.
 *
 * Added vs. the text-input template:
 *   - A FAT-attribute test for `rows` (textarea's `FatHandler` maps it).
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

import { FuroUi5Textarea } from "./FuroUi5Textarea";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5Textarea", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Textarea;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-textarea accessible-name="name" data-testid="test"></furo-ui5-textarea> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-textarea element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-textarea");
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
    let el: FuroUi5Textarea;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
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
  // [TEMPLATE] Model → UI value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5Textarea;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("initial");
      el.bindData(model);
      assert.equal(el.value, "initial");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "from-model";
      assert.equal(el.value, "from-model");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "fat-initial" });
      el.bindData(model);
      assert.equal(el.value, "fat-initial");
    });

    it("propagates FuroFatString value changes to el.value", () => {
      const model = createFatString();
      el.bindData(model);
      model.value = "fat-update";
      assert.equal(el.value, "fat-update");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("sv-initial");
      el.bindData(model);
      assert.equal(el.value, "sv-initial");
    });

    it("propagates StringValue value changes to el.value", () => {
      const model = new StringValue();
      el.bindData(model);
      model.value = "sv-update";
      assert.equal(el.value, "sv-update");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5Textarea;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a STRING model on user input", () => {
      const model = new STRING();
      el.bindData(model);
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });

    it("writes to a FuroFatString model on user input", () => {
      const model = createFatString();
      el.bindData(model);
      setInputValue(el, "typed");
      assert.equal(model.value.value, "typed");
    });

    it("writes to a StringValue model on user input", () => {
      const model = new StringValue();
      el.bindData(model);
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });

    it("writes on a bare 'input' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "input-only";
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, "input-only");
    });

    it("writes on a bare 'change' event", () => {
      const model = new STRING();
      el.bindData(model);
      el.value = "change-only";
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, "change-only");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state — readonly / value-state / constraints
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5Textarea;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
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

    it("applies FAT 'readonly' label on bind", () => {
      const model = createFatString({ labels: { readonly: true } });
      el.bindData(model);
      assert.equal(el.readonly, true);
    });

    it("applies FAT 'required' label on bind", () => {
      const model = createFatString({ labels: { required: true } });
      el.bindData(model);
      assert.equal(el.required, true);
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatString({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
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

    it("applies field constraints (required, read_only, max_length) on bind", () => {
      const model = new STRING();
      // monkey-patch __getConstraints so the element sees a parent-supplied constraint set
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
        max_length: 10,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      assert.equal(el.readonly, true);
      assert.equal(el.maxlength, 10);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] FAT attribute mapping — textarea maps `placeholder`,
  // `maxlength`, and `rows` (see the FatHandler list in the constructor).
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'placeholder' FAT attribute to el.placeholder", async () => {
      const el: FuroUi5Textarea = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
      const model = createFatString({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "from-fat");
    });

    it("pre-set HTML 'placeholder' wins over FAT attribute", async () => {
      const el: FuroUi5Textarea = await fixture(
        html`<furo-ui5-textarea placeholder="local"></furo-ui5-textarea>`,
      );
      const model = createFatString({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "local");
    });

    it("applies 'maxlength' FAT attribute to el.maxlength", async () => {
      const el: FuroUi5Textarea = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
      const model = createFatString({ attributes: { maxlength: "12" } });
      el.bindData(model);
      assert.equal(Number(el.maxlength), 12);
    });

    it("applies 'rows' FAT attribute to el.rows", async () => {
      const el: FuroUi5Textarea = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
      const model = createFatString({ attributes: { rows: "5" } });
      el.bindData(model);
      assert.equal(el.rows, 5);
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5Textarea = await fixture(
        html`<furo-ui5-textarea accessible-name="preset"></furo-ui5-textarea>`,
      );
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5Textarea = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5Textarea;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
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

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new STRING("init");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear()
  // ───────────────────────────────────────────────────────────────────────
  describe("element-specific methods [element-specific]", () => {
    let el: FuroUi5Textarea;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-textarea></furo-ui5-textarea>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("clear() empties the value and writes it back to the model", () => {
      const model = new STRING("not empty");
      el.bindData(model);
      assert.equal(el.value, "not empty");
      el.clear();
      assert.equal(el.value, "");
      assert.equal(model.value, "");
    });
  });
});
