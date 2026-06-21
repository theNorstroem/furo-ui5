/**
 * Spec for furo-ui5-color-palette, derived from the canonical template and the
 * combobox (option-list generation) pattern.
 *
 * Color-palette has no `value` property: it writes the picked color on the
 * `item-click` event and reflects the bound value by toggling each swatch's
 * `selected` flag. Swatches are generated from `colorsModel` (an ARRAY of color
 * strings). Tests therefore cover: identity/a11y, default model, swatch
 * generation, item-click write-back (STRING / FAT / StringValue), model→selection
 * read, and rebinding.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { ARRAY, STRING, StringValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, afterEach, assert, beforeAll, beforeEach, chai, describe, it, test } from "vitest";

import { FuroUi5ColorPalette } from "./FuroUi5ColorPalette";

import { createFatString } from "@/util/test-helpers/createFatString";
import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

const clickColor = (el: FuroUi5ColorPalette, color: string): void => {
  el.dispatchEvent(new CustomEvent("item-click", { detail: { color }, bubbles: true, composed: true }));
};

describe("FuroUi5ColorPalette", () => {
  describe("element identity & a11y [TEMPLATE]", () => {
    let el: FuroUi5ColorPalette;

    beforeAll(async () => {
      el = await fixture(html`
        <furo-ui5-color-palette accessible-name="palette" data-testid="test" .colorsModel="${ARRAY.Builder(STRING, ["#ff0000", "#00ff00", "#0000ff"])}"></furo-ui5-color-palette>
      `);
    });

    afterAll(() => {
      fixtureCleanup();
    });

    it("should be a furo-ui5-color-palette element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-color-palette");
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
    let el: FuroUi5ColorPalette;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette></furo-ui5-color-palette>`);
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

  describe("swatch generation from colorsModel [element-specific]", () => {
    let el: FuroUi5ColorPalette;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette></furo-ui5-color-palette>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("generates one furo-ui5-color-palette-item per color", () => {
      el.bindColors(ARRAY.Builder(STRING, ["#ff0000", "#00ff00", "#0000ff"]));
      const items = el.querySelectorAll("furo-ui5-color-palette-item");
      assert.equal(items.length, 3);
      assert.equal(items[0].value, "#ff0000");
      assert.equal(items[2].value, "#0000ff");
    });

    it("rebuilds the swatches when the array changes", () => {
      el.bindColors(ARRAY.Builder(STRING, ["#ff0000", "#00ff00", "#0000ff"]));
      assert.equal(el.querySelectorAll("furo-ui5-color-palette-item").length, 3);
      el.bindColors(ARRAY.Builder(STRING, ["#111111"]));
      assert.equal(el.querySelectorAll("furo-ui5-color-palette-item").length, 1);
    });
  });

  describe("UI → model value sync [TEMPLATE]", () => {
    let el: FuroUi5ColorPalette;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette></furo-ui5-color-palette>`);
    });

    afterEach(() => {
      fixtureCleanup();
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
  });

  describe("model → selection sync [TEMPLATE]", () => {
    let el: FuroUi5ColorPalette;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette></furo-ui5-color-palette>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("marks the swatch matching the bound value as selected", () => {
      el.bindColors(ARRAY.Builder(STRING, ["#ff0000", "#00ff00", "#0000ff"]));
      el.bindData(new STRING("#00ff00"));
      const items = el.querySelectorAll("furo-ui5-color-palette-item");
      assert.isFalse(items[0].selected);
      assert.isTrue(items[1].selected);
      assert.isFalse(items[2].selected);
    });

    it("updates the selected swatch when the model value changes", () => {
      el.bindColors(ARRAY.Builder(STRING, ["#ff0000", "#00ff00"]));
      const model = new STRING("#ff0000");
      el.bindData(model);
      assert.isTrue(el.querySelectorAll("furo-ui5-color-palette-item")[0].selected);
      model.value = "#00ff00";
      const items = el.querySelectorAll("furo-ui5-color-palette-item");
      assert.isFalse(items[0].selected);
      assert.isTrue(items[1].selected);
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    let el: FuroUi5ColorPalette;

    beforeEach(async () => {
      el = await fixture(html`<furo-ui5-color-palette></furo-ui5-color-palette>`);
    });

    afterEach(() => {
      fixtureCleanup();
    });

    it("UI writes go to the new model only after rebind", () => {
      const a = new STRING("#aaaaaa");
      const b = new STRING("#bbbbbb");
      el.bindData(a);
      el.bindData(b);
      clickColor(el, "#cccccc");
      assert.equal(b.value, "#cccccc");
      assert.equal(a.value, "#aaaaaa");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new STRING("#ff0000");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
