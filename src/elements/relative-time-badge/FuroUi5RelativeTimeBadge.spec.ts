/**
 * Spec for `FuroUi5RelativeTimeBadge` — a display-only element that extends the UI5 `Tag` and renders
 * relative time (e.g. "in 5 days", "5 days ago") from a bound date/time model.
 *
 * Blocks tagged `[TEMPLATE]` cover the shared binding contract; `[element-specific]` blocks cover the
 * relative-time rendering and the past/future color scheme.
 *
 * Test dates are computed relative to `Date.now()` so the future/past sign (and therefore the color
 * scheme) is deterministic regardless of when the suite runs; the relative-text assertions only check
 * for stable substrings to stay locale-tolerant.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { INT32, STRING, Timestamp } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import type { FuroUi5RelativeTimeBadge } from "./FuroUi5RelativeTimeBadge";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const DAY_MS = 24 * 60 * 60 * 1000;
const futureIso = (days: number): string => new Date(Date.now() + days * DAY_MS).toISOString();
const pastIso = (days: number): string => new Date(Date.now() - days * DAY_MS).toISOString();

describe("FuroUi5RelativeTimeBadge", () => {
  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Element identity & accessibility
  // ───────────────────────────────────────────────────────────────────────
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5RelativeTimeBadge;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-relative-time-badge data-testid="test"></furo-ui5-relative-time-badge> `);
      el.bindData(new STRING(futureIso(5)));
      elLocator = utils.getElementLocatorSelectors(el);
      // dummy method call, you can remove it as soon you use elLocator in the tests
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-relative-time-badge element", () => {
      // keep this test on top, so you can recognize a wrong assignment
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-relative-time-badge");
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
    let el: FuroUi5RelativeTimeBadge;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-relative-time-badge></furo-ui5-relative-time-badge>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default google.protobuf.Timestamp model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "google.protobuf.Timestamp");
    });

    it("is hidden until a value is bound", () => {
      assert.equal(el.hidden, true);
    });

    it("bindData(undefined) is a no-op", () => {
      const initial = el.model;
      el.bindData(undefined);
      assert.strictEqual(el.model, initial);
    });

    it("hides itself when bound to an empty value", () => {
      el.bindData(new Timestamp());
      assert.equal(el.hidden, true);
      assert.equal(el.textContent.trim(), "");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [element-specific] Relative time rendering & color scheme
  // ───────────────────────────────────────────────────────────────────────
  describe("relative time rendering [element-specific]", () => {
    let el: FuroUi5RelativeTimeBadge;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-relative-time-badge></furo-ui5-relative-time-badge>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders a future STRING date with the positive color scheme", () => {
      el.bindData(new STRING(futureIso(5)));
      assert.equal(el.hidden, false);
      assert.equal(el.colorScheme, "1");
      assert.include(el.textContent.trim(), "5");
      assert.include(el.textContent.trim(), "day");
    });

    it("renders a past STRING date with the negative color scheme", () => {
      el.bindData(new STRING(pastIso(5)));
      assert.equal(el.hidden, false);
      assert.equal(el.colorScheme, "2");
      assert.include(el.textContent.trim(), "day");
    });

    it("renders a future Timestamp value", () => {
      el.bindData(new Timestamp(futureIso(3)));
      assert.equal(el.hidden, false);
      assert.equal(el.colorScheme, "1");
    });

    it("renders a future INT32 (unix seconds) value", () => {
      const model = new INT32();
      model.value = Math.floor(Date.now() / 1000) + 5 * 24 * 60 * 60;
      el.bindData(model);
      assert.equal(el.hidden, false);
      assert.equal(el.colorScheme, "1");
    });

    it("renders a past INT32 (unix seconds) value with the negative scheme", () => {
      const model = new INT32();
      model.value = Math.floor(Date.now() / 1000) - 5 * 24 * 60 * 60;
      el.bindData(model);
      assert.equal(el.colorScheme, "2");
    });

    it("honors a custom positive color scheme", () => {
      el.colorSchemePositive = "5";
      el.bindData(new STRING(futureIso(5)));
      assert.equal(el.colorScheme, "5");
    });

    it("sets the absolute timestamp as the tag tooltip (title)", () => {
      el.bindData(new STRING(futureIso(5)));
      assert.isNotEmpty(el.title);
    });

    it("propagates model value changes to the rendered text", () => {
      const model = new STRING(futureIso(5));
      el.bindData(model);
      assert.equal(el.colorScheme, "1");
      model.value = pastIso(5);
      assert.equal(el.colorScheme, "2");
    });
  });

  // ───────────────────────────────────────────────────────────────────────
  // [TEMPLATE] Rebinding cleanliness
  // ───────────────────────────────────────────────────────────────────────
  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5RelativeTimeBadge;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-relative-time-badge></furo-ui5-relative-time-badge>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change the rendered scheme", () => {
      const modelA = new STRING(futureIso(5));
      const modelB = new STRING(pastIso(5));
      el.bindData(modelA);
      assert.equal(el.colorScheme, "1");
      el.bindData(modelB);
      assert.equal(el.colorScheme, "2");
      modelA.value = futureIso(10);
      assert.equal(el.colorScheme, "2");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new STRING(futureIso(5));
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
