import "@/elements/icon";
import "../src/Assets";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Icon } from "../src";

chai.use(chaiA11yAxe);

describe("Icon Component", async () => {
  let el: FuroUi5Icon;

  let elLocator: LocatorSelectors;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-icon data-testid="test" name="share" mode="Decorative"></furo-ui5-icon> `);
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("data-testid");
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

  it("should have a ui5-icon attribute", async () => {
    assert.equal(el.hasAttribute("ui5-icon"), true);
  });
});
