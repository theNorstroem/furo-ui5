/**
 * Template spec for furo-ui5 binding elements, applied to `FuroUi5ShowHide`.
 *
 * `FuroUi5ShowHide` extends `LitElement` (not a UI5 component) and acts as a
 * visibility container driven by a boolean model (`BOOLEAN`, `FuroFatBool`,
 * `BoolValue`). Its `value` property represents the hidden state — `true`
 * hides, `false` shows. Element-specific surface: `show()`, `hide()`,
 * `toggle()` methods plus the `toggled`, `hid`, `showed` custom events.
 *
 * Blocks intentionally omitted (see project plan):
 * - `UI → model value sync` — the element is display-only; no UI input path.
 * - `FAT attribute mapping` — no FAT attributes are mapped (no `FatHandler`).
 * - `model-driven state` — no `valueState`, no FAT `disabled`/`required`
 *   handling on this element.
 *
 * All visibility-changing tests set `NoAnimation = true` so the synchronous
 * fast path runs; the actual `_hidden` flip still happens in a `setTimeout(1)`,
 * so each assertion that reads `el.value` is preceded by `await delay(10)`.
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

import { FuroUi5ShowHide } from "./FuroUi5ShowHide";

import { createFatBool } from "@/util/test-helpers/createFatBool";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5ShowHide", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ShowHide;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-show-hide data-testid="test"></furo-ui5-show-hide> `);
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-show-hide element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-show-hide");
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
    let el: FuroUi5ShowHide;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
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
  // `value` here is the *hidden* flag (true = hidden). Bind `true` → element
  // becomes hidden (gets the `is-hidden` attribute); bind `false` → visible.
  // ───────────────────────────────────────────────────────────────────────
  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5ShowHide;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = true;
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial BOOLEAN value on bind (true → hidden)", async () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
    });

    it("propagates BOOLEAN.value changes to el.value", async () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      await delay(10);
      assert.equal(el.value, false);
      model.value = true;
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
    });

    it("renders initial FuroFatBool value on bind", async () => {
      const model = createFatBool({ value: true });
      el.bindData(model);
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
    });

    it("propagates FuroFatBool value changes to el.value", async () => {
      const model = createFatBool({ value: false });
      el.bindData(model);
      await delay(10);
      assert.equal(el.value, false);
      model.value = true;
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
    });

    it("renders initial BoolValue value on bind", async () => {
      const model = new BoolValue(true);
      el.bindData(model);
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
    });

    it("propagates BoolValue value changes to el.value", async () => {
      const model = new BoolValue(false);
      el.bindData(model);
      await delay(10);
      assert.equal(el.value, false);
      model.value = true;
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
    });

    it("removes the is-hidden attribute when the model flips back to false", async () => {
      const model = new BOOLEAN(true);
      el.bindData(model);
      await delay(10);
      assert.isTrue(el.hasAttribute("is-hidden"));
      model.value = false;
      await delay(10);
      assert.equal(el.value, false);
      assert.isFalse(el.hasAttribute("is-hidden"));
    });

    it("inverts visibility via _checkInversedState when hideOnFalse is set", () => {
      el.hideOnFalse = true;
      // _checkInversedState is the inversion hook used by the value setter
      // to derive the *hide* flag from the desired model bool.
      assert.equal(el._checkInversedState(true), false);
      assert.equal(el._checkInversedState(false), true);
      el.hideOnFalse = false;
      assert.equal(el._checkInversedState(true), true);
      assert.equal(el._checkInversedState(false), false);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5ShowHide;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = true;
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.value", async () => {
      const modelA = new BOOLEAN(true);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      await delay(10);
      assert.equal(el.value, true);
      el.bindData(modelB);
      await delay(10);
      assert.equal(el.value, false);
      modelA.value = false;
      await delay(10);
      // still reflects modelB
      assert.equal(el.value, false);
    });

    it("model→UI updates follow the newly bound model", async () => {
      const modelA = new BOOLEAN(false);
      const modelB = new BOOLEAN(false);
      el.bindData(modelA);
      el.bindData(modelB);
      modelB.value = true;
      await delay(10);
      assert.equal(el.value, true);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new BOOLEAN(false);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Lifecycle — disconnecting the element must stop reacting to
  // subsequent model mutations (the update listener registered
  // in bindData should not leave the element in a broken state).
  // ───────────────────────────────────────────────────────────────────────
  describe("lifecycle [TEMPLATE]", () => {
    afterEach(() => {
      fixtureCleanup();
    });

    it("does not throw when the model fires after the element is removed", async () => {
      const el: FuroUi5ShowHide = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = true;
      const model = new BOOLEAN(false);
      el.bindData(model);
      await delay(10);
      el.remove();
      // mutate model after removal — must not throw
      model.value = true;
      await delay(10);
      assert.isOk(el);
    });

    it("pending hide() animation timeout does not cause an error after removal", async () => {
      // animated path uses setTimeout(800) to clear the animating attribute;
      // removing the element before that fires must not crash the test runner.
      const el: FuroUi5ShowHide = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = false;
      await el.updateComplete;
      el.hide();
      el.remove();
      // wait past the 800ms animation timeout
      await delay(900);
      assert.isOk(el);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] show() — sets el.value=false (visible), fires `showed`
  // ───────────────────────────────────────────────────────────────────────
  describe("show() [element-specific]", () => {
    let el: FuroUi5ShowHide;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = true;
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("makes the element visible and dispatches `showed`", async () => {
      // start hidden
      el.hide();
      await delay(10);
      assert.equal(el.value, true);

      const showed = new Promise<CustomEvent<boolean>>(resolve => {
        el.addEventListener(
          "showed",
          e => {
            resolve(e as CustomEvent<boolean>);
          },
          { once: true }
        );
      });

      el.show();
      const evt = await showed;
      await delay(10);
      assert.equal(el.value, false);
      assert.isFalse(el.hasAttribute("is-hidden"));
      assert.isFalse(el.hasAttribute("aria-hidden"));
      assert.equal(evt.detail, false);
    });

    it("dispatches `toggled` when the visibility actually changes", async () => {
      el.hide();
      await delay(10);

      const toggled = new Promise<CustomEvent<boolean>>(resolve => {
        el.addEventListener(
          "toggled",
          e => {
            resolve(e as CustomEvent<boolean>);
          },
          { once: true }
        );
      });

      el.show();
      const evt = await toggled;
      assert.equal(evt.detail, false);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] hide() — sets el.value=true (hidden), fires `hid`
  // ───────────────────────────────────────────────────────────────────────
  describe("hide() [element-specific]", () => {
    let el: FuroUi5ShowHide;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = true;
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("hides the element and dispatches `hid`", async () => {
      const hid = new Promise<CustomEvent<boolean>>(resolve => {
        el.addEventListener(
          "hid",
          e => {
            resolve(e as CustomEvent<boolean>);
          },
          { once: true }
        );
      });

      el.hide();
      const evt = await hid;
      await delay(10);
      assert.equal(el.value, true);
      assert.isTrue(el.hasAttribute("is-hidden"));
      assert.equal(el.getAttribute("aria-hidden"), "true");
      assert.equal(el.getAttribute("tabindex"), "-1");
      assert.equal(evt.detail, true);
    });

    it("dispatches `toggled` on the first hide()", async () => {
      const toggled = new Promise<CustomEvent<boolean>>(resolve => {
        el.addEventListener(
          "toggled",
          e => {
            resolve(e as CustomEvent<boolean>);
          },
          { once: true }
        );
      });

      el.hide();
      const evt = await toggled;
      assert.equal(evt.detail, true);
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] toggle() — flips the current visibility state and
  // emits the appropriate event chain.
  // ───────────────────────────────────────────────────────────────────────
  describe("toggle() [element-specific]", () => {
    let el: FuroUi5ShowHide;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-show-hide></furo-ui5-show-hide>`);
      el.NoAnimation = true;
      await el.updateComplete;
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("hides a visible element on toggle and fires `hid`", async () => {
      assert.equal(el.value, false);

      const hid = new Promise<CustomEvent<boolean>>(resolve => {
        el.addEventListener(
          "hid",
          e => {
            resolve(e as CustomEvent<boolean>);
          },
          { once: true }
        );
      });

      el.toggle();
      const evt = await hid;
      await delay(10);
      assert.equal(el.value, true);
      assert.equal(evt.detail, true);
    });

    it("shows a hidden element on toggle and fires `showed`", async () => {
      el.hide();
      await delay(10);
      assert.equal(el.value, true);

      const showed = new Promise<CustomEvent<boolean>>(resolve => {
        el.addEventListener(
          "showed",
          e => {
            resolve(e as CustomEvent<boolean>);
          },
          { once: true }
        );
      });

      el.toggle();
      const evt = await showed;
      await delay(10);
      assert.equal(el.value, false);
      assert.equal(evt.detail, false);
    });

    it("a hide → show round-trip fires `toggled` twice", async () => {
      let toggledCount = 0;
      el.addEventListener("toggled", () => {
        toggledCount += 1;
      });

      el.toggle(); // visible → hidden
      await delay(10);
      el.toggle(); // hidden → visible
      await delay(10);

      assert.equal(toggledCount, 2);
    });
  });
});
