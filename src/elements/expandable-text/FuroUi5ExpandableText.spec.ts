/**
 * Spec for furo-ui5-expandable-text, adapted from the `FuroUi5TextInput` template.
 *
 * furo-ui5-expandable-text is a display-only binding (reads from the model into the inherited `text`
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

import type { FuroUi5ExpandableText } from "./FuroUi5ExpandableText";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5ExpandableText", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ExpandableText;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-expandable-text data-testid="test" text="some text"></furo-ui5-expandable-text> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-expandable-text element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-expandable-text");
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
    let el: FuroUi5ExpandableText;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-expandable-text></furo-ui5-expandable-text>`);
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
    let el: FuroUi5ExpandableText;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-expandable-text></furo-ui5-expandable-text>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("initial");
      el.bindData(model);
      assert.equal(el.text, "initial");
    });

    it("propagates STRING.value changes to el.text", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "from-model";
      assert.equal(el.text, "from-model");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "fat-initial" });
      el.bindData(model);
      assert.equal(el.text, "fat-initial");
    });

    it("propagates FuroFatString value changes to el.text", () => {
      const model = createFatString();
      el.bindData(model);
      model.value = "fat-update";
      assert.equal(el.text, "fat-update");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("sv-initial");
      el.bindData(model);
      assert.equal(el.text, "sv-initial");
    });

    it("propagates StringValue value changes to el.text", () => {
      const model = new StringValue();
      el.bindData(model);
      model.value = "sv-update";
      assert.equal(el.text, "sv-update");
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5ExpandableText;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-expandable-text></furo-ui5-expandable-text>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change el.text", () => {
      const modelA = new STRING("A");
      const modelB = new STRING("B");
      el.bindData(modelA);
      assert.equal(el.text, "A");
      el.bindData(modelB);
      assert.equal(el.text, "B");
      modelA.value = "A-after";
      assert.equal(el.text, "B");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new STRING("init");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
