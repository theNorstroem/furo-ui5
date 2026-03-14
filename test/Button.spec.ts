import "@/Assets";
import "@/web-components/furo-ui5-button";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Button } from "../src";

chai.use(chaiA11yAxe);

// https://vitest.dev/guide/browser/context.html#context
// https://main.vitest.dev/guide/browser/locators.html

describe("Button Component", async () => {
  let el: FuroUi5Button;
  let btn: FuroUi5Button;

  let elLocator: LocatorSelectors;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-button icon="share">light-dom</furo-ui5-button> `);
    btn = el;
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("data-testid");
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-button element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(btn.nodeName.toLowerCase(), "furo-ui5-button");
  });

  it("should be ok", () => {
    assert.isOk(btn);
  });

  it("should be clickable", () =>
    new Promise(done => {
      btn.addEventListener("click", () => {
        done(1);
      });
      btn.click();
    }));

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should have enable function", () =>
    new Promise(done => {
      btn.disable();
      btn.addEventListener("click", () => {
        done(1);
      });
      btn.enable();
      btn.click();
    }));

  it("should have different designs", () =>
    new Promise(done => {
      btn.setAttribute("design", "Negative");
      setTimeout(() => {
        assert.equal(btn.design, "Negative");
        done(1);
      }, 16);
    }));

  it("should hide", async () => {
    assert.equal(btn.checkVisibility(), true, "visible");
    btn.hide();
    assert.equal(btn.checkVisibility(), false, "not visible");
    btn.show();
    assert.equal(btn.checkVisibility(), true, "visible");
  });
});
