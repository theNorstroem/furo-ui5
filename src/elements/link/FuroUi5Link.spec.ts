import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5Link } from "./FuroUi5Link";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Link Component", async () => {
  let el: FuroUi5Link;

  beforeAll(async () => {
    el = await fixture(
      html` <furo-ui5-link href="https://example.com" target="_blank" design="Default">Open example</furo-ui5-link> `
    );
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-link element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-link");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should render the default-slot light-dom text", () => {
    assert.include(el.textContent, "Open example");
  });

  it("should expose href and target from the fixture", () => {
    assert.equal(el.href, "https://example.com");
    assert.equal(el.target, "_blank");
  });

  it("should pass through href changes at runtime", async () => {
    el.setAttribute("href", "https://changed.example.com");
    await delay(16);
    assert.equal(el.href, "https://changed.example.com");
    el.setAttribute("href", "https://example.com");
    await delay(16);
  });

  it("should round-trip every supported design value", async () => {
    for (const design of ["Default", "Subtle", "Emphasized"]) {
      el.setAttribute("design", design);
      await delay(16);
      assert.equal(el.design, design, `design "${design}" should round-trip`);
    }
    el.setAttribute("design", "Default");
    await delay(16);
  });

  it("should fire a click event", () =>
    new Promise((done) => {
      el.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          done(1);
        },
        { once: true }
      );
      el.click();
    }));
});
