/**
 * Spec for `FuroUi5ToggleButton`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` (with the boolean
 * adaptations established in `src/elements/checkbox/FuroUi5Checkbox.spec.ts`).
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * (model → UI, UI → model, readonly, FAT attributes, rebinding) and are
 * intended to be portable across binding elements. Blocks tagged
 * `[element-specific]` cover this element's own surface (`check()`, `uncheck()`).
 *
 * ToggleButton-specific notes vs. the TextInput template:
 *   - The value property is `pressed` (boolean), not `value` (string).
 *   - Supported model types are BOOLEAN | FuroFatBool | BoolValue.
 *   - `FuroUi5ToggleButton` does not compose `FieldNodeValueState`, so the
 *     value-state subtests from the template are dropped.
 *   - The `read_only` constraint lands on `el.disabled` (see
 *     `FuroUi5ToggleButton.handleConstraints`); `parent-readonly-set` flows
 *     through `ReadonlyState`. UI5 ToggleButton does not expose `readonly`,
 *     so the readonly observable here is `disabled` via `ReadonlyState`'s
 *     behavior on this element.
 *   - The FAT attributes mapped are `["icon", "endIcon", "design"]`. The
 *     `design` attribute has a custom reset handler — when a FAT update is
 *     received without a `design` attribute, the element resets `design`
 *     back to its remembered `_previousDesign` (initially `"Default"`).
 *   - `FuroUi5ToggleButton` registers no lifecycle-bound listeners outside of
 *     `bindData`, so the lifecycle block from the template is omitted.
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

import { FuroUi5ToggleButton } from "./FuroUi5ToggleButton";

import { createFatBool } from "@/util/test-helpers/createFatBool";
import { delay } from "@/util/test-helpers/delay";
import { setToggleButtonValue } from "@/util/test-helpers/setToggleButtonValue";

chai.use(chaiA11yAxe);

describe("FuroUi5ToggleButton", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ToggleButton;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-toggle-button accessible-name="name" data-testid="test">label</furo-ui5-toggle-button> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-toggle-button element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-toggle-button");
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
    let el: FuroUi5ToggleButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
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
    let el: FuroUi5ToggleButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial BOOLEAN value on bind", () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      assert.equal(el.pressed, true);
    });

    it("propagates BOOLEAN.value changes to el.pressed", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      model.value = true;
      assert.equal(el.pressed, true);
    });

    it("renders initial FuroFatBool value on bind", () => {
      const model = createFatBool({ value: true });
      el.bindData(model);
      assert.equal(el.pressed, true);
    });

    it("propagates FuroFatBool value changes to el.pressed", () => {
      const model = createFatBool();
      el.bindData(model);
      model.value = true;
      assert.equal(el.pressed, true);
    });

    it("renders initial BoolValue value on bind", () => {
      const model = new BoolValue(true);
      el.bindData(model);
      assert.equal(el.pressed, true);
    });

    it("propagates BoolValue value changes to el.pressed", () => {
      const model = new BoolValue();
      el.bindData(model);
      model.value = true;
      assert.equal(el.pressed, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] UI → model value sync
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5ToggleButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes to a BOOLEAN model on user toggle", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      setToggleButtonValue(el, true);
      assert.equal(model.value, true);
    });

    it("writes to a FuroFatBool model on user toggle", () => {
      const model = createFatBool();
      el.bindData(model);
      setToggleButtonValue(el, true);
      assert.equal(model.value.value, true);
    });

    it("writes to a BoolValue model on user toggle", () => {
      const model = new BoolValue();
      el.bindData(model);
      setToggleButtonValue(el, true);
      assert.equal(model.value, true);
    });

    it("writes on a bare 'change' event", () => {
      const model = new BOOLEAN();
      el.bindData(model);
      el.pressed = true;
      el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      assert.equal(model.value, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Model-driven state
  //
  // ToggleButton divergences from the template:
  //   - No value-state subtests (`FuroUi5ToggleButton` does not compose
  //     `FieldNodeValueState`).
  //   - UI5 ToggleButton has no `readonly` property; the `read_only`
  //     constraint lands on `el.disabled` (see
  //     `FuroUi5ToggleButton.handleConstraints`).
  //   - The element has no `required` property either; FAT 'required' is not
  //     covered.
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5ToggleButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies FAT 'disabled' label on bind", () => {
      const model = createFatBool({ labels: { disabled: true } });
      el.bindData(model);
      assert.equal(el.disabled, true);
    });

    it("applies field constraint read_only on bind", () => {
      const model = new BOOLEAN();
      // monkey-patch __getConstraints so the element sees a parent-supplied constraint set
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        read_only: true,
      });
      el.bindData(model);
      // FuroUi5ToggleButton maps read_only → disabled (UI5 ToggleButton has no readonly)
      assert.equal(el.disabled, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] FAT attribute mapping
  //
  // FuroUi5ToggleButton maps "icon", "endIcon", and "design"
  // (`new FatHandler(this, ["icon", "endIcon", "design"])`).
  //
  // The `design` attribute has a custom reset handler — if a subsequent FAT
  // update is received without a `design` attribute, the element resets
  // `design` to `_previousDesign` (initially `"Default"`).
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'icon' FAT attribute to el.icon", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
      const model = createFatBool({ attributes: { icon: "accept" } });
      el.bindData(model);
      assert.equal(el.icon, "accept");
    });

    it("applies 'endIcon' FAT attribute to el.endIcon", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
      const model = createFatBool({ attributes: { endIcon: "decline" } });
      el.bindData(model);
      assert.equal(el.endIcon, "decline");
    });

    it("applies 'design' FAT attribute to el.design", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
      const model = createFatBool({ attributes: { design: "Positive" } });
      el.bindData(model);
      assert.equal(el.design, "Positive");
    });

    it("resets design to the previous design when no FAT 'design' attribute is present", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
      // bind a FAT model with no `design` attribute → custom handler resets
      // `design` to `_previousDesign`, which is "Default" out of the box.
      const model = createFatBool({ attributes: { icon: "accept" } });
      el.bindData(model);
      assert.equal(el.design, "Default");
    });

    it("pre-set HTML 'icon' wins over FAT attribute", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button icon="accept">label</furo-ui5-toggle-button>`);
      const model = createFatBool({ attributes: { icon: "decline" } });
      el.bindData(model);
      assert.equal(el.icon, "accept");
    });

    it("pre-set HTML 'design' wins over FAT attribute", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button design="Emphasized">label</furo-ui5-toggle-button>`);
      const model = createFatBool({ attributes: { design: "Positive" } });
      el.bindData(model);
      assert.equal(el.design, "Emphasized");
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button accessible-name="preset">label</furo-ui5-toggle-button>`);
      const model = createFatBool();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5ToggleButton = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
      const model = createFatBool();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5ToggleButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.pressed", () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      assert.equal(el.pressed, true);
      el.bindData(modelB);
      assert.equal(el.pressed, false);
      modelA.value = false;
      assert.equal(el.pressed, false);
    });

    it("UI writes go to the new model only after rebind", () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      el.bindData(modelB);
      setToggleButtonValue(el, true);
      assert.equal(modelB.value, true);
      assert.equal(modelA.value, true);
    });

    it("bindData(sameModel) is a no-op (no duplicate listeners)", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
      // double-bind would have wired the listener twice; a single setToggleButtonValue
      // should still produce a single, consistent write.
      setToggleButtonValue(el, true);
      assert.equal(model.value, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] check() / uncheck()
  // ───────────────────────────────────────────────────────────────────────
  describe("check / uncheck [element-specific]", () => {
    let el: FuroUi5ToggleButton;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-toggle-button>label</furo-ui5-toggle-button>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("check() sets el.pressed and writes true to the model", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      el.check();
      assert.equal(el.pressed, true);
      assert.equal(model.value, true);
    });

    it("uncheck() sets el.pressed and writes false to the model", () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      el.uncheck();
      assert.equal(el.pressed, false);
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
