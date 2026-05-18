import "../src/Assets";
import "@/elements/table-toolbar-separator";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5TableToolbarSeparator } from "../src";

chai.use(chaiA11yAxe);

describe("TableToolbarSeparator Component", async () => {
  let el: FuroUi5TableToolbarSeparator;

  let elLocator: LocatorSelectors;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-table-toolbar-separator data-testid="test"></furo-ui5-table-toolbar-separator> `);
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("test");
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-table-toolbar-separator element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-table-toolbar-separator");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {
    await assert.isAccessible(el);
  });
});
