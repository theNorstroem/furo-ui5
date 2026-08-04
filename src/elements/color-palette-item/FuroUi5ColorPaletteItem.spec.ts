/**
 * Spec for furo-ui5-color-palette-item, adapted from the `FuroUi5TextInput` template.
 *
 * It is a display-only child binding (reads a CSS color string from the model into the inherited
 * `value` property, never writes back), so only the read-side `[TEMPLATE]` blocks apply.
 */
import "@/Assets";
import "@/Icons";
import "./index";

import { STRING, StringValue } from "@furo/open-models";
import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { html } from "lit";
import { afterEach, assert, beforeEach, describe, it } from "vitest";

import type { FuroUi5ColorPaletteItem } from "./FuroUi5ColorPaletteItem";

import { createFatString } from "@/util/test-helpers/createFatString";

describe("FuroUi5ColorPaletteItem", () => {
  let el: FuroUi5ColorPaletteItem;

  beforeEach(async () => {
    el = await fixture(html`<furo-ui5-color-palette-item></furo-ui5-color-palette-item>`);
  });

  afterEach(() => {
    fixtureCleanup();
  });

  describe("element identity [TEMPLATE]", () => {
    it("should be a furo-ui5-color-palette-item element", () => {
      assert.equal(el.nodeName.toLowerCase(), "furo-ui5-color-palette-item");
    });

    it("should be ok", () => {
      assert.isOk(el);
    });
  });

  describe("default model state [TEMPLATE]", () => {
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
    it("renders initial STRING color on bind", () => {
      el.bindData(new STRING("#ff0000"));
      assert.equal(el.value, "#ff0000");
    });

    it("propagates STRING.value changes to el.value", () => {
      const model = new STRING();
      el.bindData(model);
      model.value = "#00ff00";
      assert.equal(el.value, "#00ff00");
    });

    it("renders FuroFatString color on bind", () => {
      el.bindData(createFatString({ value: "#0000ff" }));
      assert.equal(el.value, "#0000ff");
    });

    it("renders StringValue color on bind", () => {
      el.bindData(new StringValue("#abcdef"));
      assert.equal(el.value, "#abcdef");
    });
  });

  describe("rebinding cleanliness [TEMPLATE]", () => {
    it("mutating the old model after rebind does not change el.value", () => {
      const a = new STRING("#aaaaaa");
      const b = new STRING("#bbbbbb");
      el.bindData(a);
      assert.equal(el.value, "#aaaaaa");
      el.bindData(b);
      assert.equal(el.value, "#bbbbbb");
      a.value = "#cccccc";
      assert.equal(el.value, "#bbbbbb");
    });

    it("bindData(sameModel) is a no-op", () => {
      const model = new STRING("#eeeeee");
      el.bindData(model);
      const ref = el.model;
      el.bindData(model);
      assert.strictEqual(el.model, ref);
    });
  });
});
