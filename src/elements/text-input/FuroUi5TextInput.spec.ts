/**
 * Template spec for furo-ui5 binding elements, anchored to `FuroUi5TextInput`.
 *
 * Describe-blocks tagged `[TEMPLATE]` exercise the universal binding contract
 * (model → UI, UI → model, readonly / value-state, FAT attributes, rebinding,
 * lifecycle, a11y) and are intended to be copied into other element specs with
 * only the tag name, model type(s), and FAT attribute list adjusted.
 * Blocks tagged `[element-specific]` cover this element's own surface
 * (debounced `search-requested`, `clear()`, `closePopover()`).
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

import { FuroUi5TextInput } from "./FuroUi5TextInput";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";
import { setInputValue } from "@/util/test-helpers/setInputValue";

chai.use(chaiA11yAxe);

describe("FuroUi5TextInput", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // Kept verbatim from the original spec — these are the smoke tests every
  // element must keep.
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5TextInput;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-text-input accessible-name="name" data-testid="test"></furo-ui5-text-input> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-text-input element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-text-input");
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
  // [TEMPLATE] Default model state — every binding element constructs an
  // internal default model and treats bindData(undefined) / bindData(same)
  // as no-ops.
  // ───────────────────────────────────────────────────────────────────────
  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
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
  // [TEMPLATE] Model → UI value sync — covers the user's first scenario:
  // bind a model, mutate its value, and the component renders the new value.
  // Runs against all three supported model types.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
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
  // [TEMPLATE] UI → model value sync — covers the user's third scenario:
  // typing into the component writes back to the bound model.
  // ───────────────────────────────────────────────────────────────────────
  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
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
  // [TEMPLATE] Model-driven state — covers the user's second scenario:
  // changes to readonly / value-state / constraints on the model propagate
  // to the component.
  // ───────────────────────────────────────────────────────────────────────
  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
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
  // [TEMPLATE] FAT attribute mapping — element-specific in the *list of
  // mapped attributes*, but the pattern (model attribute → element property,
  // pre-set HTML wins) is universal.
  // ───────────────────────────────────────────────────────────────────────
  describe("FAT attribute mapping [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("applies 'placeholder' FAT attribute to el.placeholder", async () => {
      const el: FuroUi5TextInput = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
      const model = createFatString({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "from-fat");
    });

    it("pre-set HTML 'placeholder' wins over FAT attribute", async () => {
      const el: FuroUi5TextInput = await fixture(html`<furo-ui5-text-input placeholder="local"></furo-ui5-text-input>`);
      const model = createFatString({ attributes: { placeholder: "from-fat" } });
      el.bindData(model);
      assert.equal(el.placeholder, "local");
    });

    it("applies 'maxlength' FAT attribute to el.maxlength", async () => {
      const el: FuroUi5TextInput = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
      const model = createFatString({ attributes: { maxlength: "12" } });
      el.bindData(model);
      assert.equal(Number(el.maxlength), 12);
    });

    it("pre-set accessible-name wins over model __label", async () => {
      const el: FuroUi5TextInput = await fixture(html`<furo-ui5-text-input accessible-name="preset"></furo-ui5-text-input>`);
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, "preset");
    });

    it("falls back to model __label when accessibleName is not preset", async () => {
      const el: FuroUi5TextInput = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
      const model = createFatString();
      el.bindData(model);
      assert.equal(el.accessibleName, model.__label);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness — re-binding to a new model must detach
  // the old model's listeners so stale events don't leak through.
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
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
      // double-bind would have wired the listener twice; a single setInputValue
      // should still produce a single, consistent write.
      setInputValue(el, "typed");
      assert.equal(model.value, "typed");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] search-requested event (500ms trailing-edge debounce)
  // ───────────────────────────────────────────────────────────────────────
  describe("search-requested debounce [element-specific]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("fires once after a single input following the debounce window", async () => {
      let count = 0;
      let detail = "";
      el.addEventListener("search-requested", e => {
        count += 1;
        detail = (e as CustomEvent<string>).detail;
      });
      setInputValue(el, "hello");
      await delay(600);
      assert.equal(count, 1);
      assert.equal(detail, "hello");
    });

    it("coalesces a burst of inputs into one search-requested with the final value", async () => {
      let count = 0;
      let detail = "";
      el.addEventListener("search-requested", e => {
        count += 1;
        detail = (e as CustomEvent<string>).detail;
      });
      setInputValue(el, "a");
      setInputValue(el, "ab");
      setInputValue(el, "abc");
      await delay(600);
      assert.equal(count, 1);
      assert.equal(detail, "abc");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] clear() and closePopover()
  // ───────────────────────────────────────────────────────────────────────
  describe("element-specific methods [element-specific]", () => {
    let el: FuroUi5TextInput;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
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

    it("closePopover() sets el.open = false", () => {
      el.open = true;
      el.closePopover();
      assert.equal(el.open, false);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Lifecycle — disconnecting the element must remove the
  // listeners it registered in connectedCallback.
  // ───────────────────────────────────────────────────────────────────────
  describe("lifecycle [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("does not fire search-requested after the element is disconnected", async () => {
      const el: FuroUi5TextInput = await fixture(html`<furo-ui5-text-input></furo-ui5-text-input>`);
      let count = 0;
      el.addEventListener("search-requested", () => {
        count += 1;
      });
      el.remove();
      el.value = "x";
      el.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
      await delay(600);
      assert.equal(count, 0);
    });
  });
});
