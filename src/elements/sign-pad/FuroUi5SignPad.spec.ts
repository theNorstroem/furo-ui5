import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5SignPad } from "./FuroUi5SignPad";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("SignPad Component", async () => {
  let el: FuroUi5SignPad;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-sign-pad role="application" aria-label="signature"></furo-ui5-sign-pad> `);
    // allow _FBPReady to construct the internal SignaturePad
    await delay(50);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-sign-pad element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-sign-pad");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should re render on resize", async () => {
    const reducedWidth = el.clientWidth * 0.9;
    el.style.width = `${reducedWidth.toString()}px`;
    await delay(316);
    assert.equal(reducedWidth, el.clientWidth);
  });

  it("should render a canvas in shadow", () => {
    const canvas = el.shadowRoot!.querySelector("canvas");
    assert.isNotNull(canvas);
  });

  it("should start enabled (disabled=false)", () => {
    assert.equal(el.disabled, false);
    assert.equal(el.hasAttribute("disabled"), false);
  });

  it("disable() should set disabled=true and reflect the attribute; enable() should reset it", async () => {
    el.disable();
    await delay(16);
    assert.equal(el.disabled, true, "disabled property is true");
    assert.equal(el.hasAttribute("disabled"), true, "disabled attribute reflected");
    el.enable();
    await delay(16);
    assert.equal(el.disabled, false);
    assert.equal(el.hasAttribute("disabled"), false);
  });

  it("encodeImage() should populate the image data URL and fire sign-updated", () =>
    new Promise(done => {
      el.addEventListener(
        "sign-updated",
        e => {
          const detail = (e as CustomEvent<string>).detail;
          assert.isString(detail);
          assert.match(detail, /^data:image\/png/);
          assert.equal(el.image, detail, "image property matches detail");
          done(1);
        },
        { once: true }
      );
      el.encodeImage();
    }));

  it("clear() should fire sign-updated with the empty-canvas data URL", () =>
    new Promise(done => {
      el.addEventListener(
        "sign-updated",
        e => {
          const detail = (e as CustomEvent<string>).detail;
          assert.isString(detail);
          assert.match(detail, /^data:image\/png/);
          done(1);
        },
        { once: true }
      );
      el.clear();
    }));
});
