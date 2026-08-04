import "@/Assets";
import "@/Icons";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Button } from "./FuroUi5Button";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Button Component", async () => {
  let el: FuroUi5Button;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-button icon="share">light-dom</furo-ui5-button> `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-button element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-button");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should render the default-slot light-dom content", () => {
    assert.include(el.textContent, "light-dom");
  });

  it("should be clickable", () =>
    new Promise(done => {
      const handler = () => {
        el.removeEventListener("click", handler);
        done(1);
      };
      el.addEventListener("click", handler);
      el.click();
    }));

  it("disable() should set the disabled property and enable() should clear it", () => {
    el.disable();
    assert.equal(el.disabled, true);
    el.enable();
    assert.equal(el.disabled, false);
  });

  it("disable() should block click events", async () => {
    let calls = 0;
    const handler = () => {
      calls += 1;
    };
    el.addEventListener("click", handler);
    el.disable();
    el.click();
    await delay(50);
    el.removeEventListener("click", handler);
    el.enable();
    assert.equal(calls, 0, "click handler should not fire while disabled");
  });

  it("should round-trip every supported design value", async () => {
    for (const design of ["Default", "Positive", "Negative", "Attention", "Emphasized", "Transparent"]) {
      el.setAttribute("design", design);
      await delay(16);
      assert.equal(el.design, design, `design "${design}" should round-trip`);
    }
    el.setAttribute("design", "Default");
    await delay(16);
  });

  it("hide() and show() should toggle the hidden attribute and visibility", () => {
    assert.equal(el.checkVisibility(), true, "starts visible");
    el.hide();
    assert.equal(el.hasAttribute("hidden"), true, "has hidden attribute after hide()");
    assert.equal(el.checkVisibility(), false, "not visible after hide()");
    el.show();
    assert.equal(el.hasAttribute("hidden"), false, "no hidden attribute after show()");
    assert.equal(el.checkVisibility(), true, "visible after show()");
  });
});
