/**
 * Spec for `FuroUi5RangeSlider`, derived from the canonical template
 * `src/elements/text-input/FuroUi5TextInput.spec.ts` and its closest sibling
 * `src/elements/slider/FuroUi5Slider.spec.ts`.
 *
 * RangeSlider-specific notes:
 *   - A range binds TWO numeric field nodes: `model` / `bindData` → `startValue`
 *     (lower bound), `modelTo` / `bindDataTo` → `endValue` (upper bound).
 *   - Values are `number`. The default models are both `FLOAT`. One representative
 *     of each `NumericReaderWriters` category is exercised (primitive `FLOAT`,
 *     FAT `FuroFatFloat`, google.protobuf wrapper `Int32Value`).
 *   - Like Slider, `ReadonlyState` falls back to `disabled` (no readonly prop),
 *     and the inner UI5 slider scale omits `aria-valuenow`/`aria-label`, so the
 *     same two axe rules are ignored.
 *   - A UI change can move either handle, so writes go back to both ends.
 */
import "@/Assets";
import "./index";

import { FLOAT, Int32Value } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5RangeSlider } from "./FuroUi5RangeSlider";

import { createFatFloat } from "@/util/test-helpers/createFatFloat";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const fireChange = (el: FuroUi5RangeSlider): void => {
  el.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
};

describe("FuroUi5RangeSlider", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5RangeSlider;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-range-slider accessible-name="name" data-testid="test" min="0" max="100"></furo-ui5-range-slider> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-range-slider element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-range-slider");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(300);
      // The UI5 SliderScale inner `<div role="slider">` omits `aria-valuenow` /
      // `aria-label` — a known upstream UI5 limitation (also ignored in the Slider spec).
      await assert.isAccessible(el, {
        ignoredRules: ["aria-input-field-name", "aria-required-attr"],
      });
    });
  });

  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5RangeSlider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-range-slider></furo-ui5-range-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes default FLOAT models for both ends", () => {
      assert.isOk(el.model);
      assert.isOk(el.modelTo);
      assert.equal(el.model.__meta.typeName, "primitives.FLOAT");
      assert.equal(el.modelTo.__meta.typeName, "primitives.FLOAT");
    });

    it("bindData(undefined) / bindDataTo(undefined) are no-ops", () => {
      const start = el.model;
      const end = el.modelTo;
      el.bindData(undefined);
      el.bindDataTo(undefined);
      assert.strictEqual(el.model, start);
      assert.strictEqual(el.modelTo, end);
    });
  });

  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5RangeSlider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-range-slider min="0" max="100"></furo-ui5-range-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial start/end values on bind (FLOAT)", () => {
      el.bindData(new FLOAT(20));
      el.bindDataTo(new FLOAT(80));
      assert.equal(el.startValue, 20);
      assert.equal(el.endValue, 80);
    });

    it("propagates FLOAT changes to startValue / endValue", () => {
      const start = new FLOAT(10);
      const end = new FLOAT(90);
      el.bindData(start);
      el.bindDataTo(end);
      start.value = 30;
      end.value = 70;
      assert.equal(el.startValue, 30);
      assert.equal(el.endValue, 70);
    });

    it("renders FAT (FuroFatFloat) values on bind", () => {
      el.bindData(createFatFloat({ value: 25 }));
      el.bindDataTo(createFatFloat({ value: 75 }));
      assert.equal(el.startValue, 25);
      assert.equal(el.endValue, 75);
    });

    it("renders google.protobuf wrapper (Int32Value) values on bind", () => {
      el.bindData(new Int32Value(15));
      el.bindDataTo(new Int32Value(85));
      assert.equal(el.startValue, 15);
      assert.equal(el.endValue, 85);
    });
  });

  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5RangeSlider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-range-slider min="0" max="100"></furo-ui5-range-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("writes both ends to FLOAT models on a change event", () => {
      const start = new FLOAT(0);
      const end = new FLOAT(100);
      el.bindData(start);
      el.bindDataTo(end);
      el.startValue = 35;
      el.endValue = 65;
      fireChange(el);
      assert.equal(start.value, 35);
      assert.equal(end.value, 65);
    });

    it("writes both ends to FAT models on a change event", () => {
      const start = createFatFloat({ value: 0 });
      const end = createFatFloat({ value: 100 });
      el.bindData(start);
      el.bindDataTo(end);
      el.startValue = 40;
      el.endValue = 60;
      fireChange(el);
      assert.equal(start.value.value, 40);
      assert.equal(end.value.value, 60);
    });
  });

  describe("model-driven state [TEMPLATE]", () => {
    let el: FuroUi5RangeSlider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-range-slider min="0" max="100"></furo-ui5-range-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("applies parent-readonly-set to el.disabled (no readonly prop on Slider)", () => {
      const model = new FLOAT(10);
      el.bindData(model);
      assert.equal(el.disabled, false);
      model.__dispatchEvent(new CustomEvent("parent-readonly-set", { detail: model }));
      assert.equal(el.disabled, true);
    });

    it("applies field constraints (read_only → disabled, minimum, maximum) on bind", () => {
      const model = new FLOAT(10);
      (model as unknown as { __getConstraints: () => unknown }).__getConstraints = () => ({
        read_only: true,
        minimum: 5,
        maximum: 50,
      });
      el.bindData(model);
      assert.equal(el.disabled, true);
      assert.equal(el.min, 5);
      assert.equal(el.max, 50);
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5RangeSlider;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-range-slider min="0" max="100"></furo-ui5-range-slider>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old start model after rebind does not change startValue", () => {
      const a = new FLOAT(10);
      const b = new FLOAT(20);
      el.bindData(a);
      assert.equal(el.startValue, 10);
      el.bindData(b);
      assert.equal(el.startValue, 20);
      a.value = 99;
      assert.equal(el.startValue, 20);
    });

    it("UI writes go to the new start model only after rebind", () => {
      const a = new FLOAT(10);
      const b = new FLOAT(20);
      el.bindDataTo(new FLOAT(100));
      el.bindData(a);
      el.bindData(b);
      el.startValue = 42;
      fireChange(el);
      assert.equal(b.value, 42);
      assert.equal(a.value, 10);
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new FLOAT(10);
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
