/**
 * Spec for furo-ui5-color-palette-popover. Same binding surface as
 * furo-ui5-color-palette (item-click write-back + colorsModel swatch generation +
 * model→selection), plus the inherited popover open/close surface.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { ARRAY, STRING, StringValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";

import type { FuroUi5ColorPalettePopover } from "./FuroUi5ColorPalettePopover";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const clickColor = (el: FuroUi5ColorPalettePopover, color: string): void => {
  el.dispatchEvent(new CustomEvent("item-click", { detail: { color }, bubbles: true, composed: true }));
};

describe("FuroUi5ColorPalettePopover", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ColorPalettePopover;

    beforeAll(async () => {
      el = await fixture(html` <furo-ui5-color-palette-popover accessible-name="palette" data-testid="test"></furo-ui5-color-palette-popover> `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-color-palette-popover element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-color-palette-popover");
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
    let el: FuroUi5ColorPalettePopover;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette-popover></furo-ui5-color-palette-popover>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("exposes a default STRING model", () => {
      assert.isOk(el.model);
      assert.equal(el.model.__meta.typeName, "primitives.STRING");
    });

    it("bindData(undefined) / bindColors(undefined) are no-ops", () => {
      const m = el.model;
      el.bindData(undefined);
      el.bindColors(undefined);
      assert.strictEqual(el.model, m);
    });
  });

  describe("swatch generation + binding [element-specific]", () => {
    let el: FuroUi5ColorPalettePopover;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette-popover></furo-ui5-color-palette-popover>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("generates one furo-ui5-color-palette-item per color", () => {
      el.bindColors(ARRAY.Builder(STRING, ["#ff0000", "#00ff00"]));
      assert.equal(el.querySelectorAll("furo-ui5-color-palette-item").length, 2);
    });

    it("writes to a STRING model on item-click", () => {
      const model = new STRING();
      el.bindData(model);
      clickColor(el, "#ff0000");
      assert.equal(model.value, "#ff0000");
    });

    it("writes to a FuroFatString model on item-click", () => {
      const model = createFatString();
      el.bindData(model);
      clickColor(el, "#00ff00");
      assert.equal(model.value.value, "#00ff00");
    });

    it("writes to a StringValue model on item-click", () => {
      const model = new StringValue();
      el.bindData(model);
      clickColor(el, "#0000ff");
      assert.equal(model.value, "#0000ff");
    });

    it("marks the swatch matching the bound value as selected", () => {
      el.bindColors(ARRAY.Builder(STRING, ["#ff0000", "#00ff00"]));
      el.bindData(new STRING("#00ff00"));
      const items = el.querySelectorAll("furo-ui5-color-palette-item");
      assert.isFalse(items[0].selected);
      assert.isTrue(items[1].selected);
    });
  });

  describe("popover surface [element-specific]", () => {
    let el: FuroUi5ColorPalettePopover;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette-popover></furo-ui5-color-palette-popover>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("closePopover() sets open to false", () => {
      el.open = true;
      el.closePopover();
      assert.equal(el.open, false);
    });

    it("show() should set open to true; close() should reset it", () => {
      el.show();
      assert.equal(el.open, true, "open is true after show()");
      el.close();
      assert.equal(el.open, false, "open is false after close()");
    });

    it("showAt(opener) should assign the opener and set open synchronously", () => {
      el.showAt(el);
      assert.equal(el.opener, el, "opener reference assigned");
      assert.equal(el.open, true, "open is true synchronously after showAt()");
      el.close();
      assert.equal(el.open, false);
    });
  });
});
