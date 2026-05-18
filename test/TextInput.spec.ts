import "@/Assets";
import "@/Icons";
  import "@/elements/text-input";

import { fixture, fixtureCleanup } from "@open-wc/testing-helpers";
import { chaiA11yAxe } from "chai-a11y-axe";
import { html } from "lit";
import { afterAll, assert, beforeAll, chai, describe, it, test } from "vitest";
import { type LocatorSelectors, utils } from "vitest/browser";

import { FuroUi5TextInput } from "../src";
import { delay } from "./testutils/delay";

chai.use(chaiA11yAxe);

describe("TextInput Component", async () => {
  let el: FuroUi5TextInput;

  let elLocator: LocatorSelectors;

  beforeAll(async () => {
    el = await fixture(html` <furo-ui5-text-input accessible-name="name" data-testid="test"></furo-ui5-text-input> `);
    elLocator = utils.getElementLocatorSelectors(el);
    // dummy method call, you can remove it as soon you use elLocator in the tests
    elLocator.getByTestId("test");
  });

  afterAll(() => {
    fixtureCleanup();
  });

  it("should be a furo-ui5-text-input element", () => {
    // keep this test on top, so you can recognize a wrong assignment
    assert.equal(el.nodeName.toLowerCase(), "furo-ui5-text-input");
  });

  it("should be ok", () => {
    assert.isOk(el);
  });

  test("a11y", async () => {

    delay(100)
    await assert.isAccessible(el);
  });

});
