import "../src/Assets";
import "../src/furo-ui5-popover";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5Popover } from "../src";

chai.use(chaiA11yAxe);

describe("Popover Component", async () => {
  let el: FuroUi5Popover;

  let elLocator: LocatorSelectors;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-popover data-testid="test" header-text="popover">Content</furo-ui5-popover> `);
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("test");
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-popover element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-popover");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });

  it("should not be visible", async () => {
    assert.equal(el.checkVisibility(), false, "not visible");
  });

  it("should be visible after open", async () => {
    el.show();
    assert.equal(el.checkVisibility(), true, "visible");
    el.close();
    assert.equal(el.checkVisibility(), false, "not visible");
  });

  it("should be visible after open with showAt", async () => {
    el.showAt(el);
    assert.equal(el.checkVisibility(), true, "visible");
    el.close();
    assert.equal(el.checkVisibility(), false, "not visible");
  });
});
