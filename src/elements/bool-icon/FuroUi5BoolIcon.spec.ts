/**
 * Template spec for furo-ui5 binding elements, applied to `FuroUi5BoolIcon`.
 *
 * `FuroUi5BoolIcon` extends `LitElement` (not a UI5 component) and renders an
 * inner `<ui5-icon>`. It supports the boolean model types (`BOOLEAN`,
 * `FuroFatBool`, `BoolValue`), maps only the `disabled` FAT attribute, and
 * exposes `toggle()` as its element-specific surface. Blocks that exercise
 * UI5-only features (`valueState` / value-state-message slot, `required`,
 * `maxlength`) are intentionally omitted — see the project plan for details.
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

import { FuroUi5BoolIcon } from "./FuroUi5BoolIcon";

import { createFatBool } from "@/util/test-helpers/createFatBool";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const clickInnerIcon = (el: FuroUi5BoolIcon): void => {
  const icon = el.shadowRoot!.querySelector("ui5-icon")!;
  icon.dispatchEvent(new Event("click", { bubbles: true, composed: true }));
};

describe("FuroUi5BoolIcon", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5BoolIcon;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-bool-icon accessible-name="name" data-testid="test"></furo-ui5-bool-icon> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-bool-icon element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-bool-icon");
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
    let el: FuroUi5BoolIcon;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
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
  // Three supported model types; assert both `el.value` (the boolean prop)
  // and the rendered inner ui5-icon's `name` attribute (symboltrue / symbolfalse).
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5BoolIcon;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial BOOLEAN value on bind", async () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      await el.updateComplete;
      assert.equal(el.value, true);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symboltrue);
    });

    it("propagates BOOLEAN.value changes to el.value and the rendered icon", async () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      model.value = true;
      await el.updateComplete;
      assert.equal(el.value, true);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symboltrue);
    });

    it("renders initial FuroFatBool value on bind", async () => {
      const model = createFatBool({ value: true });
      el.bindData(model);
      await el.updateComplete;
      assert.equal(el.value, true);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symboltrue);
    });

    it("propagates FuroFatBool value changes to el.value and the rendered icon", async () => {
      const model = createFatBool({ value: false });
      el.bindData(model);
      model.value = true;
      await el.updateComplete;
      assert.equal(el.value, true);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symboltrue);
    });

    it("renders initial BoolValue value on bind", async () => {
      const model = new BoolValue(true);
      el.bindData(model);
      await el.updateComplete;
      assert.equal(el.value, true);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symboltrue);
    });

    it("propagates BoolValue value changes to el.value and the rendered icon", async () => {
      const model = new BoolValue(false);
      el.bindData(model);
      model.value = true;
      await el.updateComplete;
      assert.equal(el.value, true);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symboltrue);
    });

    it("renders symbolfalse when the model is false", async () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      model.value = false;
      await el.updateComplete;
      assert.equal(el.value, false);
      const icon = el.shadowRoot!.querySelector("ui5-icon")!;
      assert.equal(icon.getAttribute("name"), el.symbolfalse);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // Drive UI by clicking the inner ui5-icon — that's the element's UI path.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5BoolIcon;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a BOOLEAN model on user click", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      clickInnerIcon(el);
      assert.equal(model.value, true);
    });

    it("writes to a FuroFatBool model on user click", () => {
      const model = createFatBool({ value: false });
      el.bindData(model);
      clickInnerIcon(el);
      assert.equal(model.value.value, true);
    });

    it("writes to a BoolValue model on user click", () => {
      const model = new BoolValue(false);
      el.bindData(model);
      clickInnerIcon(el);
      assert.equal(model.value, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5BoolIcon;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
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

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatBool({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("applies field constraint read_only on bind", () => {
      const model = new BOOLEAN();
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        read_only: true,
      });
      el.bindData(model);
      assert.equal(el.readonly, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] FAT attribute mapping — only `disabled` is mapped on this element.
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'disabled' FAT attribute to el.disabled", async () => {
      const el: FuroUi5BoolIcon = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
      const model = createFatBool({ attributes: { disabled: "true" } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("pre-set HTML 'disabled' wins over FAT attribute", async () => {
      const el: FuroUi5BoolIcon = await fixture(html`<furo-ui5-bool-icon disabled></furo-ui5-bool-icon>`);
      const model = createFatBool({ attributes: { disabled: "false" } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5BoolIcon;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      assert.equal(el.value, true);
      el.bindData(modelB);
      assert.equal(el.value, false);
      modelA.value = false;
      assert.equal(el.value, false);
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new BOOLEAN(false);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      el.bindData(modelB);
      clickInnerIcon(el);
      assert.equal(modelB.value, true);
      assert.equal(modelA.value, false);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      clickInnerIcon(el);
      assert.equal(model.value, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] toggle() — flips the value, writes to model, no-ops
  // when disabled or readonly.
  // ───────────────────────────────────────────────────────────────────────
  describe("toggle() [element-specific]", () => {
    let el: FuroUi5BoolIcon;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-bool-icon></furo-ui5-bool-icon>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("flips the value and writes back to the bound model", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      el.toggle();
      assert.equal(el.value, true);
      assert.equal(model.value, true);
      el.toggle();
      assert.equal(el.value, false);
      assert.equal(model.value, false);
    });

    it("is a no-op when disabled", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      el.disabled = true;
      el.toggle();
      assert.equal(el.value, false);
      assert.equal(model.value, false);
    });

    it("is a no-op when readonly", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      el.readonly = true;
      el.toggle();
      assert.equal(el.value, false);
      assert.equal(model.value, false);
    });
  });
});
