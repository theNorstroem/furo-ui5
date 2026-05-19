/**
 * Spec for `FuroUi5Switch`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * (model → UI, UI → model, readonly, FAT attributes, rebinding) and are
 * intended to be portable across binding elements. Blocks tagged
 * `[element-specific]` cover this element's own surface (`check()`, `uncheck()`).
 *
 * Switch-specific notes vs. the TextInput template:
 *   - The value property is `checked` (boolean), not `value` (string).
 *   - Supported model types are BOOLEAN | FuroFatBool | BoolValue.
 *   - `FuroUi5Switch` does not compose `FieldNodeValueState`, so the value-state
 *     subtests from the template are dropped.
 *   - The `read_only` constraint lands on `el.disabled` (see
 *     `FuroUi5Switch.handleConstraints`), while `parent-readonly-set` flows
 *     through `ReadonlyState` to `el.readonly` (UI5 Switch exposes a
 *     `readonly` property).
 *   - The lifecycle block from the template tested a debounced search-listener
 *     registered in `connectedCallback`; `FuroUi5Switch` registers no
 *     lifecycle-bound listeners, so the block is omitted.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { BOOLEAN, BoolValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Switch } from "./FuroUi5Switch";

import { createFatBool } from "@/util/test-helpers/createFatBool";
import { delay } from "@/util/test-helpers/delay";
import { setCheckboxValue } from "@/util/test-helpers/setCheckboxValue";

chai.use(chaiA11yAxe);

describe("FuroUi5Switch", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Switch;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-switch accessible-name="name" data-testid="test"></furo-ui5-switch> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-switch element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-switch");
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
    let el: FuroUi5Switch;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default BOOLEAN model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "primitives.BOOLEAN");
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
    let el: FuroUi5Switch;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial BOOLEAN value on bind", () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      assert.equal(el.checked, true);
    });

    it("propagates BOOLEAN.value changes to el.checked", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      model.value = true;
      assert.equal(el.checked, true);
    });

    it("renders initial FuroFatBool value on bind", () => {
      const model = createFatBool({ value: true });
      el.bindData(model);
      assert.equal(el.checked, true);
    });

    it("propagates FuroFatBool value changes to el.checked", () => {
      const model = createFatBool();
      el.bindData(model);
      model.value = true;
      assert.equal(el.checked, true);
    });

    it("renders initial BoolValue value on bind", () => {
      const model = new BoolValue(true);
      el.bindData(model);
      assert.equal(el.checked, true);
    });

    it("propagates BoolValue value changes to el.checked", () => {
      const model = new BoolValue();
      el.bindData(model);
      model.value = true;
      assert.equal(el.checked, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5Switch;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a BOOLEAN model on user toggle", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      setCheckboxValue(el, true);
      assert.equal(model.value, true);
    });

    it("writes to a FuroFatBool model on user toggle", () => {
      const model = createFatBool();
      el.bindData(model);
      setCheckboxValue(el, true);
      assert.equal(model.value.value, true);
    });

    it("writes to a BoolValue model on user toggle", () => {
      const model = new BoolValue();
      el.bindData(model);
      setCheckboxValue(el, true);
      assert.equal(model.value, true);
    });

    it("writes on a bare 'input' event", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      el.checked = true;
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      assert.equal(model.value, true);
    });

    it("writes on a bare 'change' event", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      el.checked = true;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state
  //
  // Switch divergences from the template:
  //   - No value-state subtests (`FuroUi5Switch` does not compose
  //     `FieldNodeValueState`).
  //   - `parent-readonly-set/unset` lands on `el.readonly` (UI5 Switch
  //     exposes `readonly`); the `read_only` constraint lands on
  //     `el.disabled` (`FuroUi5Switch.handleConstraints`).
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5Switch;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.readonly", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      assert.equal(el.readonly, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
    });

    it("applies parent-readonly-unset to el.readonly", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.readonly, true);
      model.__dispatchEvent(new CustomEvent("parent-readonly-unset", { detail: model }));
      assert.equal(el.readonly, false);
    });

    it("applies FAT 'readonly' label on bind", () => {
      const model = createFatBool({ labels: { readonly: true } });
      el.bindData(model);
      assert.equal(el.readonly, true);
    });

    it("applies FAT 'required' label on bind", () => {
      const model = createFatBool({ labels: { required: true } });
      el.bindData(model);
      assert.equal(el.required, true);
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatBool({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("applies field constraints (required, read_only) on bind", () => {
      const model = new BOOLEAN();
      // monkey-patch __getConstraints so the element sees a parent-supplied constraint set
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        required: true,
        read_only: true,
      });
      el.bindData(model);
      assert.equal(el.required, true);
      // FuroUi5Switch maps read_only → disabled (no UI5 Switch readonly via constraints path)
      assert.equal(el.disabled, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] FAT attribute mapping
  //
  // FuroUi5Switch maps only "disabled" (`new FatHandler(this, ["disabled"])`).
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'disabled' FAT attribute to el.disabled", async () => {
      const el: FuroUi5Switch = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
      const model = createFatBool({ attributes: { disabled: "true" } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("pre-set HTML 'disabled' wins over FAT attribute", async () => {
      const el: FuroUi5Switch = await fixture(html`<furo-ui5-switch disabled></furo-ui5-switch>`);
      const model = createFatBool({ attributes: { disabled: "false" } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5Switch = await fixture(html`<furo-ui5-switch accessible-name="preset"></furo-ui5-switch>`);
      const model = createFatBool();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5Switch = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
      const model = createFatBool();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5Switch;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.checked", () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      assert.equal(el.checked, true);
      el.bindData(modelB);
      assert.equal(el.checked, false);
      modelA.value = false;
      assert.equal(el.checked, false);
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      el.bindData(modelB);
      setCheckboxValue(el, true);
      assert.equal(modelB.value, true);
      assert.equal(modelA.value, true);
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // double-bind would have wired the listener twice; a single setCheckboxValue
      // should still produce a single, consistent write.
      setCheckboxValue(el, true);
      assert.equal(model.value, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] check() / uncheck()
  // ───────────────────────────────────────────────────────────────────────
  describe("check / uncheck [element-specific]", () => {
    let el: FuroUi5Switch;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-switch></furo-ui5-switch>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("check() sets el.checked and writes true to the model", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      el.check();
      assert.equal(el.checked, true);
      assert.equal(model.value, true);
    });

    it("uncheck() sets el.checked and writes false to the model", () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      el.uncheck();
      assert.equal(el.checked, false);
      assert.equal(model.value, false);
    });

    it("check() / uncheck() write through to a FuroFatBool model", () => {
      const model = createFatBool({ value: false });
      el.bindData(model);
      el.check();
      assert.equal(model.value.value, true);
      el.uncheck();
      assert.equal(model.value.value, false);
    });
  });
});
