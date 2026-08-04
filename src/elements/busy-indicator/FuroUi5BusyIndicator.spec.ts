/**
 * Spec for `FuroUiBusyIndicator` (tag `furo-ui5-busy-indicator`). This element
 * is a **read-only display** binding element: it mirrors a boolean model value
 * onto the inherited UI5 `active` property and never writes back to the model.
 *
 * Applied [TEMPLATE] blocks: element identity & a11y, default model state,
 * model → UI value sync (BOOLEAN / FuroFatBool / BoolValue), rebinding
 * cleanliness.
 *
 * Omitted [TEMPLATE] blocks (with reasons):
 *   - `UI → model value sync` — there is no UI affordance for the user to flip
 *     the busy state; the busy indicator is display-only.
 *   - `FAT attribute mapping` — no `FatHandler` is constructed; no FAT
 *     attributes are mapped to component properties.
 *   - `model-driven state` — the element neither composes `FieldNodeValueState`
 *     / `ReadonlyState` nor exposes `readonly` / `disabled` / `required` /
 *     `valueState`. The inherited UI5 `BusyIndicator` is not a form control.
 *   - `lifecycle` — listeners are attached in `bindData` (not in
 *     `connectedCallback`); their cleanup is exercised by the rebinding block.
 *
 * Element-specific block covers `activate()` / `deactivate()`.
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

import type { FuroUi5BusyIndicator } from "./FuroUi5BusyIndicator";

import { createFatBool } from "@/util/test-helpers/createFatBool";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUiBusyIndicator", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5BusyIndicator;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-busy-indicator accessible-name="name" data-testid="test"></furo-ui5-busy-indicator> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-busy-indicator element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-busy-indicator");
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
    let el: FuroUi5BusyIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-busy-indicator></furo-ui5-busy-indicator>`);
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
  // Asserts that the bound model's boolean value is mirrored onto the
  // inherited UI5 `active` property for each supported model type.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5BusyIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-busy-indicator></furo-ui5-busy-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial BOOLEAN value on bind", () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      assert.equal(el.active, true);
    });

    it("propagates BOOLEAN.value changes to el.active", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      model.value = true;
      assert.equal(el.active, true);
    });

    it("renders initial FuroFatBool value on bind", () => {
      const model = createFatBool({ value: true });
      el.bindData(model);
      assert.equal(el.active, true);
    });

    it("propagates FuroFatBool value changes to el.active", () => {
      const model = createFatBool({ value: false });
      el.bindData(model);
      model.value = true;
      assert.equal(el.active, true);
    });

    it("renders initial BoolValue value on bind", () => {
      const model = new BoolValue(true);
      el.bindData(model);
      assert.equal(el.active, true);
    });

    it("propagates BoolValue value changes to el.active", () => {
      const model = new BoolValue(false);
      el.bindData(model);
      model.value = true;
      assert.equal(el.active, true);
    });

    it("flips el.active back to false when the model value goes false", () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      assert.equal(el.active, true);
      model.value = false;
      assert.equal(el.active, false);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5BusyIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-busy-indicator></furo-ui5-busy-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.active", () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      assert.equal(el.active, true);
      el.bindData(modelB);
      assert.equal(el.active, false);
      modelA.value = false;
      // Stays in the new model's state (false), unaffected by the old model.
      assert.equal(el.active, false);
    });

    it("the new model drives el.active after rebind", () => {
      const modelA = new BOOLEAN(false);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      el.bindData(modelB);
      modelB.value = true;
      assert.equal(el.active, true);
      modelA.value = true;
      // modelA mutation must not touch el.active (still driven by modelB).
      assert.equal(el.active, true);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      model.value = true;
      assert.equal(el.active, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] activate() / deactivate() — toggle the inherited
  // UI5 `active` attribute imperatively. The element does NOT write back
  // to a bound model when these are called (display-only binding).
  // ───────────────────────────────────────────────────────────────────────
  describe("activate() / deactivate() [element-specific]", () => {
    let el: FuroUi5BusyIndicator;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-busy-indicator></furo-ui5-busy-indicator>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("activate() sets the 'active' attribute and reflects on el.active", () => {
      assert.equal(el.hasAttribute("active"), false);
      el.activate();
      assert.equal(el.hasAttribute("active"), true);
      assert.equal(el.active, true);
    });

    it("deactivate() removes the 'active' attribute and reflects on el.active", () => {
      el.activate();
      assert.equal(el.active, true);
      el.deactivate();
      assert.equal(el.hasAttribute("active"), false);
      assert.equal(el.active, false);
    });

    it("activate() / deactivate() do not write back to a bound model", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      el.activate();
      assert.equal(el.active, true);
      assert.equal(model.value, false);
      el.deactivate();
      assert.equal(el.active, false);
      assert.equal(model.value, false);
    });
  });
});
