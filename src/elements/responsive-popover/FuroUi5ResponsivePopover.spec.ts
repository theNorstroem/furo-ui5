import "@/Assets";
import "./index";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5ResponsivePopover } from "./FuroUi5ResponsivePopover";

chai.use(chaiA11yAxe);

describe("ResponsivePopover Component", async () => {
  let el: FuroUi5ResponsivePopover;

  let elLocator: LocatorSelectors;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-responsive-popover data-testid="test"></furo-ui5-responsive-popover> `);
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("test");
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-responsive-popover element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-responsive-popover");
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
