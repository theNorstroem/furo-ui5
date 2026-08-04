import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import type { FuroUi5Title } from "./FuroUi5Title";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Title Component", async () => {
  let el: FuroUi5Title;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-title level="H2">Hello Title</furo-ui5-title> `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-title element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-title");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should set its pure-tag marker attribute on connect", () => {
    // UI5Element auto-stamps the pure tag (here "furo-ui5-title") as a marker attribute
    // so that scoping-safe attribute selectors keep working.
    assert.equal(el.hasAttribute("furo-ui5-title"), true);
  });

  it("should render the default-slot light-dom text", () => {
    assert.include(el.textContent, "Hello Title");
  });

  it("should expose the level attribute as a property", () => {
    assert.equal(el.level, "H2");
  });

  it("should round-trip every supported level value", async () => {
    for (const level of ["H1", "H2", "H3", "H4", "H5", "H6"]) {
      el.setAttribute("level", level);
      await delay(16);
      assert.equal(el.level, level, `level "${level}" should round-trip`);
    }
    el.setAttribute("level", "H2");
    await delay(16);
  });

  it("should pass through level attribute changes at runtime", async () => {
    el.setAttribute("level", "H4");
    await delay(16);
    assert.equal(el.level, "H4");
    el.setAttribute("level", "H2");
    await delay(16);
  });
});
