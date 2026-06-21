/**
 * Spec for furo-ui5-message-strip, adapted from the `FuroUi5TextInput` template.
 *
 * furo-ui5-message-strip is a display-only binding (reads from the model, renders the value as slotted
 * text, never writes back), so only the read-side `[TEMPLATE]` blocks apply.
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

import { FuroUi5MessageStrip } from "./FuroUi5MessageStrip";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("FuroUi5MessageStrip", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5MessageStrip;
    let elLocator: LocatorSelectors;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-message-strip data-testid="test">an info message</furo-ui5-message-strip> `);
      elLocator = utils.getElementLocatorSelectors(el);
      elLocator.getByTestId("test");
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-message-strip element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-message-strip");
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
    let el: FuroUi5MessageStrip;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-message-strip></furo-ui5-message-strip>`);
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
    let el: FuroUi5MessageStrip;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-message-strip></furo-ui5-message-strip>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("renders initial STRING value on bind", () => {
      const model = new STRING("initial");
      el.bindData(model);
      assert.equal(el.textContent, "initial");
    });

    it("propagates STRING.value changes to the text", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "from-model";
      assert.equal(el.textContent, "from-model");
    });

    it("renders initial FuroFatString value on bind", () => {
      const model = createFatString({ value: "fat-initial" });
      el.bindData(model);
      assert.equal(el.textContent, "fat-initial");
    });

    it("propagates FuroFatString value changes to the text", () => {
      const model = createFatString();
      el.bindData(model);
      model.value = "fat-update";
      assert.equal(el.textContent, "fat-update");
    });

    it("renders initial StringValue value on bind", () => {
      const model = new StringValue("sv-initial");
      el.bindData(model);
      assert.equal(el.textContent, "sv-initial");
    });

    it("propagates StringValue value changes to the text", () => {
      const model = new StringValue();
      el.bindData(model);
      model.value = "sv-update";
      assert.equal(el.textContent, "sv-update");
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5MessageStrip;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-message-strip></furo-ui5-message-strip>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("mutating the old model after rebind does not change the text", () => {
      const modelA = new STRING("A");
      const modelB = new STRING("B");
      el.bindData(modelA);
      assert.equal(el.textContent, "A");
      el.bindData(modelB);
      assert.equal(el.textContent, "B");
      modelA.value = "A-after";
      assert.equal(el.textContent, "B");
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
