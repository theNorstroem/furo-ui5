/**
 * Spec for furo-ui5-avatar, adapted from the `FuroUi5TextInput` template.
 *
 * furo-ui5-avatar is a display-only binding (reads from the model into the inherited `initials`
 * property, never writes back), so only the read-side `[TEMPLATE]` blocks apply.
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

import type { FuroUi5Avatar } from "./FuroUi5Avatar";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5Avatar", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5Avatar;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-avatar data-testid="test" accessible-name="John Doe" initials="JD"></furo-ui5-avatar> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-avatar element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-avatar");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });

    test("a11y", async () => {
      await delay(100);
      await assert.isAccessible(el);
    });
  });

  describe("default model state [TEMPLATE]", () => {
    let el: FuroUi5Avatar;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-avatar></furo-ui5-avatar>`);
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

  describe("model → UI value sync [TEMPLATE]", () => {
    let el: FuroUi5Avatar;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-avatar></furo-ui5-avatar>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("AB");
      el.bindData(model);
      assert.equal(el.initials, "AB");
    });

    it("propagates STRING.value changes to el.initials", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "CD";
      assert.equal(el.initials, "CD");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "EF" });
      el.bindData(model);
      assert.equal(el.initials, "EF");
    });

    it("propagates FuroFatString value changes to el.initials", () => {
      const model = createFatString();
      el.bindData(model);
      model.value = "GH";
      assert.equal(el.initials, "GH");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("IJ");
      el.bindData(model);
      assert.equal(el.initials, "IJ");
    });

    it("propagates StringValue value changes to el.initials", () => {
      const model = new StringValue();
      el.bindData(model);
      model.value = "KL";
      assert.equal(el.initials, "KL");
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5Avatar;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-avatar></furo-ui5-avatar>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.initials", () => {
      const modelA = new STRING("AA");
      const modelB = new STRING("BB");
      el.bindData(modelA);
      assert.equal(el.initials, "AA");
      el.bindData(modelB);
      assert.equal(el.initials, "BB");
      modelA.value = "CC";
      assert.equal(el.initials, "BB");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new STRING("XY");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
