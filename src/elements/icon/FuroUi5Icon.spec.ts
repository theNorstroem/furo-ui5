import "@/Assets";
import "@/Icons";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";

import { FuroUi5Icon } from "./FuroUi5Icon";

import { delay } from "@/util/test-helpers/delay";

chai.use(chaiA11yAxe);

describe("Icon Component", async () => {
  let el: FuroUi5Icon;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-icon data-testid="test" name="share" mode="Decorative"></furo-ui5-icon> `);
    await delay(16);
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-icon element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-icon");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should have a ui5-icon attribute", () => {
    assert.equal(el.hasAttribute("ui5-icon"), true);
  });

  it("should expose the UI5 mode property from the fixture", () => {
    assert.equal(el.mode, "Decorative");
  });

  it("should pass through name attribute changes to the property", async () => {
    el.setAttribute("name", "accept");
    await delay(16);
    assert.equal(el.name, "accept");
    // restore for the rest of the suite
    el.setAttribute("name", "share");
    await delay(16);
  });

  it("should pass through design attribute changes to the property", async () => {
    el.setAttribute("design", "Negative");
    await delay(16);
    assert.equal(el.design, "Negative");
    el.removeAttribute("design");
    await delay(16);
  });

  it("should render an SVG once the icon resolves", async () => {
    await delay(50);
    const svg = el.shadowRoot!.querySelector("svg");
    assert.isNotNull(svg, "expected resolved icon to render an <svg>");
  });
});
